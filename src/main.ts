import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import firebase from 'firebase-admin';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');

const { service_account } = JSON.parse(
  fs.readFileSync(__dirname + '/firebase-adminsdk.json', 'utf8'),
);

firebase.initializeApp({
  credential: firebase.credential.cert(service_account),
});

export const firestore = firebase.firestore();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3001);
}
bootstrap();
