import { Router } from 'express';
import validatorMiddleware from '../../middlewares/validator.middleware';
import skillController from './skill.controller';
import skillValidator from './skill.validator';
import { baseValidator } from '../../base/validator.base';

const r = Router();
const validator = skillValidator;
const controller = new skillController();

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

const skillRouter = r;
export default skillRouter;
