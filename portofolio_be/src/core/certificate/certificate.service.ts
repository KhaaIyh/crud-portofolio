import BaseService from '../../base/service.base';
import prisma from '../../db/prisma';

class certificateService extends BaseService {
  constructor() {
    super(prisma);
  }

  findAll = async (query: any) => {
    const q = this.transformFindAllQuery(query);
    const data = await this.db.certificate.findMany({ ...q });

    if (query?.paginate) {
      const countData = await this.db.certificate.count({
        where: (q as any).where,
      });
      return this.paginate(data, countData, q as any);
    }
    return this.noPaginate(data);
  };

  findById = async (id: string) => {
    const data = await this.db.certificate.findUniqueOrThrow({
      where: { id_certificate: id },
    });
    return data;
  };

  create = async (payload: any) => {
    const data = await this.db.certificate.create({ data: payload });
    return data;
  };

  update = async (id: string, payload: any) => {
    const data = await this.db.certificate.update({
      where: { id_certificate: id },
      data: payload,
    });
    return data;
  };

  delete = async (id: string) => {
    const data = await this.db.certificate.delete({
      where: { id_certificate: id },
    });
    return data;
  };
}

export default certificateService;
