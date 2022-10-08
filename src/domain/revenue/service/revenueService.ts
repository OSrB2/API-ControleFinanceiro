import { Revenue } from '../models/revenueModel';
import { RevenueEntities } from '../entities/RevenueEntities';

export class RevenueService {
  async revenueExists(id: string): Promise<RevenueEntities> {
    const revenueExist = await Revenue.count({
      where: { id },
    });
    return revenueExist;
  }

  async descriptionExist(description: string): Promise<RevenueEntities> {
    const descriptionExist = await Revenue.count({
      where: { description },
    });

    return descriptionExist;
  }

  async register(
    description: string,
    value: number,
    date: string
  ): Promise<RevenueEntities> {
    const newRevenue = await Revenue.create({ description, value, date });

    return newRevenue;
  }

  async getAll(): Promise<RevenueEntities> {
    const revenues = await Revenue.findAll();

    return revenues;
  }

  async getOne(id: string): Promise<RevenueEntities> {
    const checkRevenue = await Revenue.findOne({
      where: { id },
    });
    return checkRevenue;
  }

  async update(
    id: string,
    description: string,
    value: number
  ): Promise<RevenueEntities> {
    const revenueUpdated = await Revenue.update(
      {
        description,
        value,
      },
      {
        where: { id },
      }
    );

    return revenueUpdated;
  }

  async delete(id: string): Promise<RevenueEntities> {
    const revenue = await Revenue.destroy({
      where: { id },
    });

    return revenue;
  }
}
