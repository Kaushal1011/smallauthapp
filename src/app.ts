import bodyparser from 'body-parser';
import cors from 'cors';
import express, * as e from 'express';

interface FormResponse {
  username: string;
  password: string;
}

(function () {
  const app: e.Express = express();
  app.use(bodyparser.json());
  const port: number = 3000;
  app.use(cors());

  app.get('/', (_req, res) => {
    res.send('Hello World!');
  });

  // simple auth function
  app.post('/auth', (req, res) => {
    let a: FormResponse = req.body as FormResponse;
    console.log(a);
    if (a.username === 'kaushalpatil' && a.password === 'kaushal1011') {
      res.status(200).json({
        message: 'authenticated',
      });
      console.log('Accepted');
    } else {
      res.status(401).json({ message: 'authentication failed' });
      console.error('Failed');
    }
  });

  app.get('/auth', (_req, res) => {
    res.send('Hmm Auth Page');
  });

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
})();
