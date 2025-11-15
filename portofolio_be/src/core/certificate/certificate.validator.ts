import Joi from 'joi';

export const certificateValidator = {
  create: Joi.object({
    nama_certificate: Joi.string().optional().allow(null, ''),
    desk_certificate: Joi.string().optional().allow(null, ''),
    id_user: Joi.string().required(),
  }),
  update: Joi.object({
    nama_certificate: Joi.string().optional().allow(null, ''),
    desk_certificate: Joi.string().optional().allow(null, ''),
    id_user: Joi.string().optional().allow(null, ''),
    id_certificate: Joi.string().optional().allow(null, ''),
  }),
};

export default certificateValidator;
