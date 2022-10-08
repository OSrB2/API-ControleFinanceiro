import { Request, Response } from 'express';
import { expensesService } from '../service';

export const ExpensesController = {
  async create(req: Request, res: Response) {
    try {
      const { description, value, date, category } = req.body;

      const expenseExist = await expensesService.descriptionExist(description);

      if (expenseExist) {
        return res.status(400).json('This description already exists');
      }

      const newExpenses = await expensesService.register(
        description,
        value,
        date,
        category
      );

      return res.status(201).json(newExpenses);
    } catch (error) {
      return res.status(500).json('Something went wrong, contact support!');
    }
  },

  async getAll(req: Request, res: Response) {
    try {
      const showExpenses = await expensesService.getAll();

      return res.status(200).json(showExpenses);
    } catch (error) {
      return res.status(500).json('Something went wrong, contact support!');
    }
  },

  async getOne(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const findExpense = await expensesService.getOne(id);

      if (!findExpense) {
        return res.status(404).json('No record found!');
      }

      return res.status(200).json(findExpense);
    } catch (error) {
      return res.status(500).json('Something went wrong, contact support!');
    }
  },

  async getDescription(req: Request, res: Response) {
    try {
      const { description } = req.params;

      const findDescription = await expensesService.descriptionExist(
        description
      );

      if (!findDescription) {
        return res.status(404).json('No record found!');
      }

      return res.status(200).json(findDescription);
    } catch (error) {
      return res.status(500).json('Something went wrong, contact support!');
    }
  },

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { description, value, category } = req.body;

      const checkExpense = await expensesService.expensesExists(id);

      if (!checkExpense) {
        return res.status(404).json('No record found!');
      }

      await expensesService.update(id, description, value, category);
      return res.status(200).json('Successful update');
    } catch (error) {
      return res.status(500).json('Something went wrong, contact support!');
    }
  },

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const checkExpense = await expensesService.expensesExists(id);

      if (!checkExpense) {
        return res.status(404).json('No record found!');
      }

      await expensesService.delete(id);

      return res.status(204).send();
    } catch (error) {
      return res.status(500).json('Something went wrong, contact support!');
    }
  },
};
