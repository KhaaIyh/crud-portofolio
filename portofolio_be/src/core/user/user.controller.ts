import BaseController from '../../base/controller.base';
import userService from './user.service';
import type { Request, Response } from 'express';
import path from 'path';
import FileManager from '../../lib/file-manager/index';
import { promises as fsp } from 'fs';

class userController extends BaseController {
  #service: userService;

  constructor() {
    super();
    this.#service = new userService();
  }

  findAll = this.wrapper(async (req: Request, res: Response) => {
    const data = await this.#service.findAll((req as any).vquery);
    return this.success(res, data, 'Banyak user berhasil didapatkan');
  });

  findById = this.wrapper(async (req: Request, res: Response) => {
    const data = await this.#service.findById(req.params.id);
    return this.success(res, data, 'user berhasil didapatkan');
  });

  create = this.wrapper(async (req: Request, res: Response) => {
    const payload = (req as any).vbody || {};

    const file = (req as any).file as Express.Multer.File | undefined;
    if (file && file.buffer) {
      const fm = new FileManager();
      const uploadsDir = path.join('public', 'uploads', 'user');
      fm.makeDir(uploadsDir);
      const filename = fm.generateFilename(file.originalname);
      const destpath = path.join(uploadsDir, filename);
      await fsp.writeFile(destpath, file.buffer);
      payload.profile = `/public/uploads/user/${filename}`;
    }

    const data = await this.#service.create(payload);
    return this.created(res, data, 'user berhasil dibuat');
  });

  update = this.wrapper(async (req: Request, res: Response) => {
    const payload = (req as any).vbody || {};

    const file = (req as any).file as Express.Multer.File | undefined;
    if (file && file.buffer) {
      const fm = new FileManager();
      const uploadsDir = path.join('public', 'uploads', 'user');
      fm.makeDir(uploadsDir);
      const filename = fm.generateFilename(file.originalname);
      const destpath = path.join(uploadsDir, filename);
      await fsp.writeFile(destpath, file.buffer);
      payload.profile = `/public/uploads/user/${filename}`;
    }

    const data = await this.#service.update(req.params.id, payload);
    return this.success(res, data, 'user berhasil diperbarui');
  });

  delete = this.wrapper(async (req: Request, res: Response) => {
    const data = await this.#service.delete(req.params.id);
    return this.noContent(res, 'user berhasil dihapus');
  });
}

export default userController;
