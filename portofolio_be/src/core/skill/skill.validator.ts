import Joi from 'joi';

export const skillValidator = {
  create: Joi.object({
    nama_skill: Joi.string().optional().allow(null, ''),
    desk_skill: Joi.string().optional().allow(null, ''),
    id_user: Joi.string().required(),
  }),
  update: Joi.object({
    nama_skill: Joi.string().optional().allow(null, ''),
    desk_skill: Joi.string().optional().allow(null, ''),
    id_user: Joi.string().optional().allow(null, ''),
    id_skill: Joi.string().optional().allow(null, ''),
  }),
};

export default skillValidator;
