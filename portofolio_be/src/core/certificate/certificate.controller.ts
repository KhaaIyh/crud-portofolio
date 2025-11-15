import BaseController from '../../base/controller.base';
import certificateService from './certificate.service';
import type { Request, Response } from 'express';

class certificateController extends BaseController {
  #service: certificateService;

  constructor() {
    super();
    this.#service = new certificateService();
  }

  findAll = this.wrapper(async (req: Request, res: Response) => {
    const data = await this.#service.findAll((req as any).vquery);
    return this.success(res, data, 'Banyak certificate berhasil didapatkan');
  });

  findById = this.wrapper(async (req: Request, res: Response) => {
    const data = await this.#service.findById(req.params.id);
    return this.success(res, data, 'certificate berhasil didapatkan');
  });

  create = this.wrapper(async (req: Request, res: Response) => {
    const payload = (req as any).vbody || {};
    const data = await this.#service.create(payload);
    return this.created(res, data, 'user berhasil dibuat');
  });

  update = this.wrapper(async (req: Request, res: Response) => {
    const data = await this.#service.update(req.params.id, (req as any).vbody);
    return this.success(res, data, 'certificate berhasil diperbarui');
  });

  delete = this.wrapper(async (req: Request, res: Response) => {
    const data = await this.#service.delete(req.params.id);
    return this.noContent(res, 'certificate berhasil dihapus');
  });
}

export default certificateController;
