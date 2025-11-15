import { Router } from 'express';
import userRouter from './core/user/user.router';
import projectRouter from './core/project/project.router';
import certificateRouter from './core/certificate/certificate.router';
import skillRouter from './core/skill/skill.router';

const r = Router();

r.use('/user', userRouter)
r.use('/project', projectRouter)
r.use('/certificate', certificateRouter)
r.use('/skill', skillRouter)

const router = r;
export default router;
