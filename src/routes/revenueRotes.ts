import express from 'express';
import { RevenueController } from '../domain/revenue/controller/revenueController';

const revenueRotes = express.Router();

revenueRotes.post('/revenue/register', RevenueController.create);
revenueRotes.get('/revenues', RevenueController.getAll);
revenueRotes.get('/revenues/:id', RevenueController.getOne);
revenueRotes.put('/revenues/update/:id', RevenueController.update);
revenueRotes.delete('/revenues/delete/:id', RevenueController.delete);

export default revenueRotes;
