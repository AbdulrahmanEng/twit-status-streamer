const twit = require('twit');
const env = require('dotenv').config().parsed;
const chalk = require('chalk');

const T = new twit({
  consumer_key: env.consumer_key,
  consumer_secret: env.consumer_secret,
  access_token: env.access_token,
  access_token_secret: env.access_token_secret,
  timeout_ms: 60 * 1000,
});

const stream = T.stream('statuses/filter', { track: 'machine learning' });

stream.on('tweet', (tweet) => console.log(chalk.green(`${tweet.user.screen_name} : ${tweet.text}`)));
stream.on('error', (error) => console.log(chalk.red(error)));