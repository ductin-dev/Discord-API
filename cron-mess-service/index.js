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
// Cron schedule everyday 7h32 - 7h55 AM
cron.schedule(`30 7 * * mon-fri`, () => {
  taskDay = cron.schedule(`${lib.randomBetween(32, 55)} 7 * * mon-fri`, () => {
    service.messageService([channels[2]], msgs[2], bot);
  }, {
    scheduled: true,
    timezone: cron_setting.zone
  });
}, {
  scheduled: true,
  timezone: cron_setting.zone
});
cron.schedule(`0 8 * * mon-fri`, () => {
  try {
    taskDay.stop();
  } catch (e) {
    console.log("Task start is not created");
  }
}, {
  scheduled: true,
  timezone: cron_setting.zone
});
// Cron schedule everyday 17h22 - 17h50 PM
cron.schedule(`20 17 * * mon-fri`, () => {
  taskEnd = cron.schedule(`${lib.randomBetween(22, 50)} 17 * * mon-fri`, () => {
    service.messageService([channels[2]], msgs[3], bot);
  }, {
    scheduled: true,
    timezone: cron_setting.zone
  });
}, {
  scheduled: true,
  timezone: cron_setting.zone
});
cron.schedule(`0 18 * * mon-fri`, () => {
  try {
    taskEnd.stop();
  } catch (e) {
    console.log("Task end is not created");
  }
}, {
  scheduled: true,
  timezone: cron_setting.zone
});

