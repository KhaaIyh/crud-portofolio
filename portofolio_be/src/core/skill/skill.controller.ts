import BaseController from '../../base/controller.base';
import skillService from './skill.service';
import type { Request, Response } from 'express';

class skillController extends BaseController {
  #service: skillService;

  constructor() {
    super();
    this.#service = new skillService();
  }

  findAll = this.wrapper(async (req: Request, res: Response) => {
    const data = await this.#service.findAll((req as any).vquery);
    return this.success(res, data, 'Banyak skill berhasil didapatkan');
  });

  findById = this.wrapper(async (req: Request, res: Response) => {
    const data = await this.#service.findById(req.params.id);
    return this.success(res, data, 'skill berhasil didapatkan');
  });

  create = this.wrapper(async (req: Request, res: Response) => {
    const payload = (req as any).vbody || {};
    const data = await this.#service.create(payload);
    return this.created(res, data, 'user berhasil dibuat');
  });

  update = this.wrapper(async (req: Request, res: Response) => {
    const data = await this.#service.update(req.params.id, (req as any).vbody);
    return this.success(res, data, 'skill berhasil diperbarui');
  });

  delete = this.wrapper(async (req: Request, res: Response) => {
    const data = await this.#service.delete(req.params.id);
    return this.noContent(res, 'skill berhasil dihapus');
  });
}

export default skillController;
