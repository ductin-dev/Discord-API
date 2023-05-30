require('dotenv').config();
const Eris = require("eris");
const cron = require('node-cron');

const lib = require('./util.js');
const service = require('./auto-mess.js');
const { cron_setting, channels, msgs } = require('./config.json');

const bot = new Eris(process.env.TOKEN1, {
  intents: [
    "guildMessages"
  ]
});

bot.on("error", (err) => {
  console.error(err);
});

bot.on('ready', () => {
  console.log(`Bot connected as ${bot.user.username}`);
});

bot.connect();

// ========================================================
// Cron schedule instanely
// service.messageService([channels[1], channels[0]], msgs[1], bot);

// Cron schedule everyday default
// cron.schedule(`${cron_setting.minute} ${cron_setting.hour} * * *`, () => {
//   service.messageService([], msgs[1], bot);
// }, {
//   scheduled: true,
//   timezone: cron_setting.zone
// });

// Cron schedule everyday 7h30 - 7h50 AM
cron.schedule(`${lib.randomBetween(30, 50)} 7 * * *`, () => {
  service.messageService([channels[1], channels[0]], msgs[1], bot);
}, {
  scheduled: true,
  timezone: cron_setting.zone
});

// Cron schedule everyday 17h10 - 17h59 PM
cron.schedule(`${lib.randomBetween(10, 59)} 17 * * *`, () => {
  service.messageService([], msgs[1], bot);
}, {
  scheduled: true,
  timezone: cron_setting.zone
});