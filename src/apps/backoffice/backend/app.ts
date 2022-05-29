import Express, { urlencoded } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import config from './config';
import { pingResponse } from './controllers/ping';
import router from './routes';

const app = Express();

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

app.set('port', config.PORT);
app.use(morgan('dev'));
app.use(Express.json({}));
app.use(cors(corsOptions));
app.use(urlencoded({ extended: false }));

//server status
app.use('/ping', pingResponse);

app.use('/api', router);

module.exports = app;
