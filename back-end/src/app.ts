import * as express from 'express';
import * as cors from 'cors';
import userRouter from './routes/users.routes';
import ServicesRouter from './routes/services.routes';
import PartsRouter from './routes/parts.routes';
import errMiddleware from './helpers/errMiddleware';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.app.use(cors());

    this.config();

    this.app.get('/', (req, res) => res.json({ ok: true }));
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
    this.app.use(userRouter);
    this.app.use(ServicesRouter);
    this.app.use(PartsRouter);
    this.app.use(errMiddleware);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };

export const { app } = new App();
