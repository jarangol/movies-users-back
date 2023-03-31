import { initializeApp, applicationDefault } from 'firebase-admin/app';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import usersController from './controllers/users.controller.js'

initializeApp({ credential: applicationDefault() });

const app = express()
app.use(bodyParser.json());
app.use(cors())
app.use(usersController);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})