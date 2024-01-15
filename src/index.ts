import {logger} from '@src/logger/logger';
import chalk from 'chalk';
import express from 'express';
import {PORT} from './constants';

const app = express();

app.get('/ping', (req, res) => res.status(200).send('pong'));

app.listen(PORT, () => {
  logger.log(chalk.blue('[server]'), `running on port ${chalk.bold(PORT)}`);
});
