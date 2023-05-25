const Eris = require("eris");
require('dotenv').config()
require('./always-on.js')

const bot = new Eris(process.env.TOKEN);

bot.on("error", (err) => {
  console.error(err);
});

// Get the bot to connect to Discord
bot.connect(); 