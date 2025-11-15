import { Router } from 'express';
import validatorMiddleware from '../../middlewares/validator.middleware';
import certificateController from './certificate.controller';
import certificateValidator from './certificate.validator';
import { baseValidator } from '../../base/validator.base';

const r = Router();
const validator = certificateValidator;
const controller = new certificateController();

r.get(
  '/',
  validatorMiddleware({ query: baseValidator.findAllQuery }),
  controller.findAll
);

r.get('/find-one/:id', controller.findById);

r.post(
  '/create',
  validatorMiddleware({ body: validator.create }),
  controller.create
);

r.put(
  '/update/:id',
  validatorMiddleware({ body: validator.update }),
  controller.update
);

r.delete('/delete/:id', controller.delete);

const certificateRouter = r;
export default certificateRouter;
