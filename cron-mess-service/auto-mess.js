const cron = require('node-cron');
// const Discord = require('discord.js');
const { token, guild_id, channel_id } = require('./config.json');

console.log("ok auto mess");

// cron.schedule('0 1 * * *', () => {
//   console.log('Runing a job at 01:00 at America/Sao_Paulo timezone');
//   sendMessage();
// }, {
//   scheduled: true,
//   timezone: "America/Sao_Paulo"
// });

// const client = new Discord.Client();

// const sendMessage = () => {
//   try {
//     const guild = client.guilds.cache.get(guild_id);
//     const channel = client.channels.cache.get(channel_id);

//     channel.send('My Message');
//   } catch (e) {
//     console.error("Send message failed: " + e);
//   }
// }