import { Expenses } from '../models/expensesModel';
import { ExpensesEntities } from '../entities/expensesEntities';

export class ExpensesService {
  async expensesExists(id: string): Promise<ExpensesEntities> {
    const expensesExists = await Expenses.count({
      where: { id },
    });

    return expensesExists;
  }

  async descriptionExist(description: string): Promise<ExpensesEntities> {
    const descriptionExist = await Expenses.count({
      where: { description },
    });

    return descriptionExist;
  }

  async register(
    description: string,
    value: number,
    date: string,
    category: string
  ): Promise<ExpensesEntities> {
    const newExpenses = await Expenses.create({
      description,
      value,
      category,
      date,
    });

    return newExpenses;
  }

  async getAll(): Promise<ExpensesEntities> {
    const expenses = await Expenses.findAll();

    return expenses;
  }

  async getOne(id: string): Promise<ExpensesEntities> {
    const expense = await Expenses.findOne({
      where: { id },
    });

    return expense;
  }

  async getDescription(description: string): Promise<ExpensesEntities> {
    const checkDescriptions = await Expenses.findOne({
      where: { description },
    });

    return checkDescriptions;
  }

  async update(
    id: string,
    description: string,
    value: string,
    category: string
  ): Promise<ExpensesEntities> {
    const expenseUpdate = await Expenses.update(
      {
        description,
        value,
      },
      {
        where: { id },
      }
    );

    return expenseUpdate;
  }

  async delete(id: string): Promise<ExpensesEntities> {
    const expense = await Expenses.destroy({
      where: { id },
    });

    return expense;
  }
}
