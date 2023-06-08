require('dotenv').config();
const Eris = require("eris");
const cron = require('node-cron');

const lib = require('./util.js');
const service = require('./auto-mess.js');
const { cron_setting, channels, msgs } = require('./config.json');

const bot = new Eris(process.env.TOKEN2, {
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

// Cron for attendance
var taskDay;
var taskEnd;
// Cron schedule everyday 7h31 - 7h52 AM
cron.schedule(`30 7 * * *`, () => {
  taskDay = cron.schedule(`${lib.randomBetween(31, 52)} 7 * * *`, () => {
    service.messageService([channels[0]], msgs[2], bot);
  }, {
    scheduled: true,
    timezone: cron_setting.zone
  });
}, {
  scheduled: true,
  timezone: cron_setting.zone
});
cron.schedule(`0 8 * * *`, () => {
  try {
    taskDay.stop();
  } catch (e) {
    console.log("Task start is not created");
  }
}, {
  scheduled: true,
  timezone: cron_setting.zone
});
// Cron schedule everyday 17h21 - 17h59 PM
cron.schedule(`20 17 * * *`, () => {
  taskEnd = cron.schedule(`${lib.randomBetween(21, 59)} 17 * * *`, () => {
    service.messageService([channels[0]], msgs[3], bot);
  }, {
    scheduled: true,
    timezone: cron_setting.zone
  });
}, {
  scheduled: true,
  timezone: cron_setting.zone
});
cron.schedule(`0 18 * * *`, () => {
  try {
    taskEnd.stop();
  } catch (e) {
    console.log("Task end is not created");
  }
}, {
  scheduled: true,
  timezone: cron_setting.zone
});

