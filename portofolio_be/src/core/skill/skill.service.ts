import BaseService from '../../base/service.base';
import prisma from '../../db/prisma';

class skillService extends BaseService {
  constructor() {
    super(prisma);
  }

  findAll = async (query: any) => {
    const q = this.transformFindAllQuery(query);
    const data = await this.db.skill.findMany({ ...q });

    if (query?.paginate) {
      const countData = await this.db.skill.count({ where: (q as any).where });
      return this.paginate(data, countData, q as any);
    }
    return this.noPaginate(data);
  };

  findById = async (id: string) => {
    const data = await this.db.skill.findUniqueOrThrow({
      where: { id_skill: id },
    });
    return data;
  };

  create = async (payload: any) => {
    const data = await this.db.skill.create({ data: payload });
    return data;
  };

  update = async (id: string, payload: any) => {
    const data = await this.db.skill.update({
      where: { id_skill: id },
      data: payload,
    });
    return data;
  };

  delete = async (id: string) => {
    const data = await this.db.skill.delete({ where: { id_skill: id } });
    return data;
  };
}

export default skillService;
