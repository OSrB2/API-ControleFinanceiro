import express from 'express';
import { ExpensesController } from '../domain/expenses/controller/ExpensesController';

const expensesRotes = express.Router();

expensesRotes.post('/expenses/register', ExpensesController.create);
expensesRotes.get('/expenses', ExpensesController.getAll);
expensesRotes.get('/expenses/:id', ExpensesController.getOne);
expensesRotes.get('/expenses/description', ExpensesController.getDescription);
expensesRotes.put('/expenses/update/:id', ExpensesController.update);
expensesRotes.delete('/expenses/delete/:id', ExpensesController.delete);

export default expensesRotes;
