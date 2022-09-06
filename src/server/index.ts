import 'dotenv/config';
import App from '../infrastructure/app';

const port = process.env.APP_PORT || process.env.PORT;

App.listen(port, () =>
  console.log(`App running in http://localhost:${process.env.APP_PORT}`)
);
