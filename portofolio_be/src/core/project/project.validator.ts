import Joi from 'joi';

export const projectValidator = {
  create: Joi.object({
    nama_project: Joi.string().optional().allow(null, ''),
    desk_project: Joi.string().optional().allow(null, ''),
    foto_project: Joi.string().optional().allow(null, ''),
    id_user: Joi.string().required(),
  }),
  update: Joi.object({
    nama_project: Joi.string().optional().allow(null, ''),
    desk_project: Joi.string().optional().allow(null, ''),
    foto_project: Joi.string().optional().allow(null, ''),
    id_user: Joi.string().optional().allow(null, ''),
    id_project: Joi.string().optional().allow(null, ''),
  }),
};

export default projectValidator;
