import express, { Request, Response } from 'express';
import { createUsr, getUser, getUsers, deleteUsr } from '$db';

interface UserInput {
  name: string;
  email: string;
  role?: 'admin' | 'client';
};

const app = express();

app.use(express.json());

app.get('/users', async (req: Request, res: Response) => {
  const users = await getUsers();
  console.log(users);
  
  res.status(200).json(users);
});

app.get('/users/:id', async (req: Request<{ id: string; }>, res: Response) => {
  const id = req.params.id;
  const user = await getUser(id);
  console.log(user)
  res.status(200).json(user);
});

app.post('/users', async (req: Request<any, any, UserInput>, res: Response) => {
  const user = await createUsr(req.body);
  console.log(user);
  res.status(200).send('yo!');
});

app.delete('/users/:id', async (req: Request<{ id: string; }>, res: Response) => {
  const id = req.params.id;
  const result = await deleteUsr(id);
  console.log(result)
  return res.status(200).send('yo!');
})

app.listen(3010, () => {
  console.log('Server is running on port 3010');
});
