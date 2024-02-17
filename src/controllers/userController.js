import { addUserService, checkIfUsernameExistsService, GetUserProfileService, UpdateUserProfileService } from '../services/userService.js';

export async function addUserControl(req, res, next) {
  try {
    const result = await addUserService(req);
    res.status(200).json({ result });
  } catch (error) {
    next(error);
  }
}

export async function checkIfUsernameExistsControl(req, res, next) {
  try {
    const result = await checkIfUsernameExistsService(req);
    res.status(200).json({ result });
  } catch (error) {
    next(error);
  }
}

export async function GetUserProfileControl(req, res, next) {
  try {
    const result = await GetUserProfileService(req);
    res.status(200).json({ result });
  } catch (e) {
    next(e);
  }
}

export async function UpdateUserProfileControl(req, res, next) {
  try {
    const result = await UpdateUserProfileService(req);
    res.status(200).json({ result });
  } catch (error) {
    next(error);
  }
}