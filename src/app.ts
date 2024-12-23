import cors from 'cors';
import express, { Application, Request, Response } from 'express';

import { globalErrorHandler } from './app/middleswares/globalErrorHandler';
import { notFound } from './app/middleswares/notFound';
import router from './app/routes';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api', router);

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars, no-unused-vars
app.use(globalErrorHandler);
app.use(notFound);

app.get('/', (req: Request, res: Response) => {
  res.send('App is running');
});

export default app;
