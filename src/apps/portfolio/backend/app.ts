//modules
import express, { urlencoded } from 'express';
import morgan from 'morgan';
import cors from 'cors';
//config file
import config from './config';
//routes middleware
import router from './routes';
//server status
import { pingResponse } from './controllers/ping';

//express initialization
const app = express();

//corsOptions
type Options = {
  origin: string;
  credentials: boolean;
  optionSuccessStatus: number;
};
const corsOptions: Options = {
  origin: 'http://localhost:3000',
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200
};

//app configs
app.set('port', config.PORT);
app.use(morgan('dev'));
app.use(cors(corsOptions));
app.use(express.json());
app.use(urlencoded({ extended: false }));
app.use('/api', router);

//server status
app.use('/ping', pingResponse);

module.exports = app;
export default app;
