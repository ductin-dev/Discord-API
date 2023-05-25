const Eris = require("eris");
require('dotenv').config()
require('./auto-mess.js')

const bot = new Eris(process.env.TOKEN, {
  intents: [
    "guildMessages"
  ]
});

bot.on("error", (err) => {
  console.error(err);
});

// Get the bot to connect to Discord
bot.connect(); 
