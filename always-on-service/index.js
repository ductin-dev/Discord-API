require('dotenv').config()

const Eris = require("eris");
require('./always-on.js')

const bot = new Eris(process.env.TOKEN);

bot.on("error", (err) => {
  console.error(err);
});

bot.on('ready', () => {
  console.log(`Bot connected as ${bot.user.username}`);
});

// Get the bot to connect to Discord
bot.connect(); 