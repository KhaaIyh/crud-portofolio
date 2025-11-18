import { Router } from 'express';
import validatorMiddleware from '../../middlewares/validator.middleware';
import projectController from './project.controller';
import projectValidator from './project.validator';
import { baseValidator } from '../../base/validator.base';
import { upload } from '../../middlewares/upload.middleware';

const r = Router();
const validator = projectValidator;
const controller = new projectController();
const fileUpload = upload({
  mimeTypes: ['image/jpeg', 'image/png'],
  maxBytes: 5 * 1024 * 1024,
});

r.get(
  '/',
  validatorMiddleware({ query: baseValidator.findAllQuery }),
  controller.findAll
);

r.get('/find-one/:id', controller.findById);

r.post(
  '/create',
  fileUpload.single('foto_project'),
  validatorMiddleware({ body: validator.create }),
  controller.create
);

r.put(
  '/update/:id',
  fileUpload.single('foto_project'),
  validatorMiddleware({ body: validator.update }),
  controller.update
);

r.delete('/delete/:id', controller.delete);

const projectRouter = r;
export default projectRouter;
