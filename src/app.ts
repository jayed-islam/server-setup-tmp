import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StudentRoutes } from './modules/student/student.routes';
import notFound from './app/middlewares/notFound';
const app: Application = express();

app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1/students', StudentRoutes);

const getAController = (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
};

app.get('/', getAController);

// not Found
app.use(notFound);

export default app;
