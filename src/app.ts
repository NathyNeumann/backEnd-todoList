import express, { Express } from 'express';
import bodyParser from 'body-parser';
import cors from "cors";
import router from './routes';

const app: Express = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', router);

export default app;
