import { addUserService } from '../services/userService.js';

export async function addUserControl(req, res, next) {
  try {
    const result = await addUserService(req);
    res.status(200).json({ result });
  } catch (error) {
    next(error);
  }
}
