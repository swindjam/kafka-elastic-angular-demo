// Kafka consumer
import {Client} from '@elastic/elasticsearch';
import {Kafka} from 'kafkajs';

const main = async () => {
  const client = new Client({
    // cloud: {
    //   id: '<cloud-id>'
    // },
    auth: {
      username: 'elastic',
      password: 'password'
    }
  });

  const kafka = new Kafka({
    clientId: 'kafka-elastic-angular-demo',
    brokers: ['kafka:9092'],
  })
  const consumer = kafka.consumer({
    groupId: 'backend-ingest-books'
  });
  await consumer.connect()
  await consumer.subscribe({ topics: ['ingest-books'] })

  await consumer.run({
    eachMessage: async ({ message } ) => {
      console.log('Received Message', message);
      await client.index({
        index: 'books',
        document: {
          ...message.value,
          type: 'paperback'
        }
      })
    }
  })
};

main();
