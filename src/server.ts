import express from 'express';

import './database/connection';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

console.log('The server is running');
app.listen(3333);
