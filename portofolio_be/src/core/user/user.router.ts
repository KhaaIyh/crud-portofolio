import { Router } from 'express';
import validatorMiddleware from '../../middlewares/validator.middleware';
import userController from './user.controller';
import userValidator from './user.validator';
import { baseValidator } from '../../base/validator.base';
import { upload } from '../../middlewares/upload.middleware';

const r = Router();
const validator = userValidator;
const controller = new userController();
const fileUpload = upload({mimeTypes: ['image/jpeg', 'image/png'], maxBytes: 5 * 1024 * 1024}); // 5MB limit

r.get(
  '/',
  validatorMiddleware({ query: baseValidator.findAllQuery }),
  controller.findAll
);

r.get('/find-one/:id', controller.findById);

r.post(
  '/create',
  fileUpload.single('profile'),
  validatorMiddleware({ body: validator.create }),
  controller.create
);

r.put(
  '/update/:id',
  fileUpload.single('profile'),
  validatorMiddleware({ body: validator.update }),
  controller.update
);

r.delete('/delete/:id', controller.delete);

const userRouter = r;
export default userRouter;
