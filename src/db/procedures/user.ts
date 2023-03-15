import { db } from "$db";
import type { UserInput } from '$types';

async function getUsers() {
  const [ res ] = await db.query("SELECT * FROM user");
  return res;
};

const getUser = async (id: string) => {
  const [[res]] = await db.query('SELECT * FROM user WHERE u_id = ?', [id]);
  return res;
};

const createUsr = async (body: UserInput) => {
  
  const [res] = await db.query(`
    INSERT INTO user (name, email, role) VALUES (?, ?, ?)
  `, 
    [body.name, body.email, body.role ?? null]
  );

  const id = res.insertId as string;

  return getUser(id);
};


async function deleteUsr(id: string) {
  const [res] = await db.query(`
    DELETE FROM user WHERE u_id = ?
  `, [id]);
  const u_id = res.insertId;
  return getUser(u_id);
}

export { getUsers, getUser, createUsr, deleteUsr };