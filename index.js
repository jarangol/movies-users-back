import { initializeApp, applicationDefault } from 'firebase-admin/app';
import express from 'express';
import bodyParser from 'body-parser';
import usersController from './controllers/users.controller.js'
initializeApp({ credential: applicationDefault() });

const app = express()
app.use(bodyParser.json());

app.use(usersController);

const port = process.env.PORT
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})