import type { Request, Response } from "express";
import { createUsr, deleteUsr, getUser, getUsers } from "$db";
import type { UserInput } from '$types';

async function get_users(_, res: Response) {
  const users = await getUsers();
  console.log(users);
  
  res.status(200).json(users);
};

async function get_usr(req: Request<{ id: string; }>, res: Response) {
  const id = req.params.id;
  const user = await getUser(id);
  console.log(user)
  res.status(200).json(user);
};

async function post_usr(req: Request<any, any, UserInput>, res: Response) {
  const user = await createUsr(req.body);
  console.log(user);
  res.status(200).send('yo');
};

async function delete_usr(req: Request<{ id: string; }>, res: Response) {
  const id = req.params.id;
  const result = await deleteUsr(id);
  console.log(result)
  return res.status(200).send('yo!');
};

export {
  get_users,
  get_usr,
  post_usr,
  delete_usr
}