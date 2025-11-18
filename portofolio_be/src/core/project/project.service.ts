import BaseService from '../../base/service.base';
import prisma from '../../db/prisma';

class projectService extends BaseService {
  constructor() {
    super(prisma);
  }

  findAll = async (query: any) => {
    const q = this.transformFindAllQuery(query);
    const data = await this.db.project.findMany({ ...q });

    if (query?.paginate) {
      const countData = await this.db.project.count({
        where: (q as any).where,
      });
      return this.paginate(data, countData, q as any);
    }
    return this.noPaginate(data);
  };

  findById = async (id: string) => {
    const data = await this.db.project.findUniqueOrThrow({
      where: { id_project: id },
    });
    return data;
  };

  create = async (payload: any) => {
    const data = await this.db.project.create({ data: payload });
    return data;
  };

  update = async (id: string, payload: any) => {
    const data = await this.db.project.update({
      where: { id_project: id },
      data: payload,
    });
    return data;
  };

  delete = async (id: string) => {
    const data = await this.db.project.delete({ where: { id_project: id } });
    return data;
  };
}

export default projectService;
