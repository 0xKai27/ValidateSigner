import express from 'express';

const router: express.Router = express.Router();

/* GET home page. */
router.get('/', function(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.render('index', { title: 'Express Typescript Skeleton' });
});

export { router as indexRouter };
