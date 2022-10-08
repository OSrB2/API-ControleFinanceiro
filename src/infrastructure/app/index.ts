import express, { Application } from 'express';
import routes from '../../routes/routes';
import db from '../database';

const App = express();

db.hasConnection();

App.use(express.json());
App.use(routes);

export default App;
