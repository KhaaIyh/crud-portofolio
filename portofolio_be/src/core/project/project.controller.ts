import BaseController from '../../base/controller.base';
import projectService from './project.service';
import type { Request, Response } from 'express';
import path from 'path';
import FileManager from '../../lib/file-manager/index';
import { promises as fsp } from 'fs';

class projectController extends BaseController {
  #service: projectService;

  constructor() {
    super();
    this.#service = new projectService();
  }

  findAll = this.wrapper(async (req: Request, res: Response) => {
    const data = await this.#service.findAll((req as any).vquery);
    return this.success(res, data, 'Banyak project berhasil didapatkan');
  });

  findById = this.wrapper(async (req: Request, res: Response) => {
    const data = await this.#service.findById(req.params.id);
    return this.success(res, data, 'project berhasil didapatkan');
  });

  create = this.wrapper(async (req: Request, res: Response) => {
    const payload = (req as any).vbody || {};

    const file = (req as any).file as Express.Multer.File | undefined;
    if (file && file.buffer) {
      const fm = new FileManager();
      const uploadsDir = path.join('public', 'uploads', 'project');
      fm.makeDir(uploadsDir);
      const filename = fm.generateFilename(file.originalname);
      const destpath = path.join(uploadsDir, filename);
      await fsp.writeFile(destpath, file.buffer);
      payload.foto_project = `/public/uploads/project/${filename}`;
    }

    const data = await this.#service.create(payload);
    return this.created(res, data, 'project berhasil dibuat');
  });

  update = this.wrapper(async (req: Request, res: Response) => {
    const payload = (req as any).vbody || {};

    const file = (req as any).file as Express.Multer.File | undefined;
    if (file && file.buffer) {
      const fm = new FileManager();
      const uploadsDir = path.join('public', 'uploads', 'project');
      fm.makeDir(uploadsDir);
      const filename = fm.generateFilename(file.originalname);
      const destpath = path.join(uploadsDir, filename);
      await fsp.writeFile(destpath, file.buffer);
      payload.foto_project = `/public/uploads/project/${filename}`;
    }

    const data = await this.#service.update(req.params.id, payload);
    return this.success(res, data, 'project berhasil diperbarui');
  });

  delete = this.wrapper(async (req: Request, res: Response) => {
    const data = await this.#service.delete(req.params.id);
    return this.noContent(res, 'project berhasil dihapus');
  });
}

export default projectController;
