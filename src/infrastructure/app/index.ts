import express, { Application } from 'express';
import db from '../database';

const App = express();

db.hasConnection();

export default App;
