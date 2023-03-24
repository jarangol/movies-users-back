import { getAuth } from "firebase-admin/auth";
import express from 'express';

const app = express();

app.post('/users', async (req, res) => {
  try {
    const { email, password, displayName } = req.body;

    const auth = getAuth();
    const userCredential = await auth.createUser({
      email,
      password,
      displayName,
    })
    const user = userCredential;
    return res.send(user)
  } catch (error) {
    const errorMessage = error.message;
    return res.status(500).send({ errorMessage })
  }
})

app.get('/users/:uid', async (req, res) => {
  try {
    const { uid } = req.params;
    const auth = getAuth();
    const user = await auth.getUser(uid)
    return res.send(user)
  } catch (error) {
    const errorMessage = error.message;
    return res.status(500).send({ errorMessage })
  }
})

app.put('/users/:uid', async (req, res) => {
  try {
    const { uid } = req.params;
    const { email, name, disabled } = req.body;
    const auth = getAuth();
    const user = await auth.updateUser(uid, {
      email,
      displayName: name,
      disabled: disabled || false,
    })
    return res.send(user)
  } catch (error) {
    const errorMessage = error.message;
    return res.status(500).send({ errorMessage })
  }
})

app.delete('/users/:uid', async (req, res) => {
  try {
    const { uid } = req.params;
    const auth = getAuth();
    const user = await auth.deleteUser(uid);
    return res.send(user)
  } catch (error) {
    const errorMessage = error.message;
    return res.status(500).send({ errorMessage })
  }
})

export default app;