import Joi from 'joi';

export const userValidator = {
  create: Joi.object({
    email: Joi.string().email().required(),
    no_hp: Joi.string().optional().allow(null, ''),
    nama: Joi.string().optional().allow(null, ''),
    title: Joi.string().optional().allow(null, ''),
    bio: Joi.string().optional().allow(null, ''),
    profile: Joi.string().optional().allow(null, ''),
    instagram: Joi.string().optional().allow(null, ''),
    github: Joi.string().optional().allow(null, ''),
    linkedin: Joi.string().optional().allow(null, ''),
  }),
  update: Joi.object({
    email: Joi.string().email().optional(),
    no_hp: Joi.string().optional().allow(null, ''),
    nama: Joi.string().optional().allow(null, ''),
    title: Joi.string().optional().allow(null, ''),
    bio: Joi.string().optional().allow(null, ''),
    profile: Joi.string().optional().allow(null, ''),
    instagram: Joi.string().optional().allow(null, ''),
    github: Joi.string().optional().allow(null, ''),
    linkedin: Joi.string().optional().allow(null, ''),
    id_user: Joi.string().optional().allow(null, ''),
    id_project: Joi.string().optional().allow(null, ''),
  }),
};

export default userValidator;
