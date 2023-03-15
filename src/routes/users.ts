import { Router } from 'express';
import { delete_usr, get_usr, get_users, post_usr, } from '$controllers';
// import { middleware } from '../middleware/log';

const router = Router();

router
  .get('/', get_users)
  .get('/:id', get_usr)
  .post('/', post_usr)
  // .put('/:id', updateUser)
  .delete('/:id', delete_usr)

export { router };
