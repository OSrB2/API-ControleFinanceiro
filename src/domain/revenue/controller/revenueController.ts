import { Request, Response } from 'express';
import { revenueService } from '../service';

export const RevenueController = {
  async getAll(req: Request, res: Response) {
    try {
      const showRevenues = await revenueService.getAll();

      return res.status(200).json(showRevenues);
    } catch (error) {
      return res.status(500).json('Something went wrong, contact support!');
    }
  },

  async create(req: Request, res: Response) {
    try {
      const { description, value, date } = req.body;

      const descriptionExist = await revenueService.descriptionExist(
        description
      );

      if (descriptionExist) {
        return res.status(400).json('This description already exists');
      }

      const newRevenue = await revenueService.register(
        description,
        value,
        date
      );

      console.log(newRevenue);
      return res.status(201).json(newRevenue);
    } catch (error) {
      console.log(error);
      return res.status(500).json('Something went wrong, contact support!');
    }
  },

  async getOne(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const findRevenue = await revenueService.getOne(id);

      if (!findRevenue) {
        return res.status(404).json('No record found!');
      }

      return res.status(200).json(findRevenue);
    } catch (error) {
      return res.status(500).json('Something went wrong, contact support!');
    }
  },

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { description, value } = req.body;

      const checkRevenue = await revenueService.revenueExists(id);

      if (!checkRevenue) {
        return res.status(404).json('No record found!');
      }

      await revenueService.update(id, description, value);

      return res.status(200).json('Successful update');
    } catch (error) {
      return res.status(500).json('Something went wrong, contact support!');
    }
  },

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const checkRevenue = await revenueService.revenueExists(id);

      if (!checkRevenue) {
        return res.status(404).json('No record found!');
      }

      await revenueService.delete(id);

      return res.status(204).send();
    } catch (error) {
      console.log(error);
      return res.status(500).json('Something went wrong, contact support!');
    }
  },
};
