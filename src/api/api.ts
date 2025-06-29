import Koa from 'koa';
import Router from '@koa/router';
import { bodyParser } from "@koa/bodyparser";
import {Kafka} from 'kafkajs';
import { Client } from '@elastic/elasticsearch';

const app = new Koa();
const router = new Router();

app.use(bodyParser());

router
  .get('/books', async (ctx) => {
console.log('get')
    ctx.body = {
      books: [{name: 'aaa', type: 'paperback'}]
    };


    // Fetch data from elastic
    // const client = new Client({
    //   // cloud: {
    //   //   id: '<cloud-id>'
    //   // },
    //   auth: {
    //     username: 'elastic',
    //     password: 'password'
    //   }
    // });
    //
    // const res = await client.search({
    //   index: 'books',
    //   query: {
    //     match: {
    //       type: 'paperback'
    //     }
    //   }
    // });


  })
  .post('/data', async (ctx: any) => {
    console.log('post');

    const { id, document } = ctx.request.body;

    const kafka = new Kafka({
      clientId: 'kafka-elastic-angular-demo',
      brokers: ['kafka:9092'],
    })
    const producer = kafka.producer()

    await producer.connect()
    await producer.send({
      topic: 'ingest-books',
      messages: [
        { value: JSON.stringify({ id, document }) },
      ],
    })

    await producer.disconnect()
  })

app.use(router.routes());
app.use(router.allowedMethods());

// app.use(ctx => {
//
//
//   ctx.body = {
//     items: [
//       {
//         name: 'The Hobbit'
//       }
//     ]
//   }
// });

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
