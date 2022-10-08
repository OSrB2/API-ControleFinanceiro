import express from 'express';
import revenueRotes from './revenueRotes';
import expensesRotes from './expensesRotes';

const routes = express.Router();

routes.use(revenueRotes);
routes.use(expensesRotes);

export default routes;
