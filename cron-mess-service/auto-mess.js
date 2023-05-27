const lib = require('./util.js');
const { channels } = require('./config.json');

const sendToChannels = (target_channels, msg, bot) => {
  if (target_channels.length == 0) {
    channels.forEach((channel) => {
      bot.createMessage(channel.id, lib.pharsedMsg(msg.msg));
      lib.logger(channel.des, msg.des);
    })
  } else {
    channels.forEach((channel) => {
      if (target_channels.map((target) => target.id).includes(channel.id)) {
        bot.createMessage(channel.id, lib.pharsedMsg(msg.msg));
        lib.logger(channel.des, msg.des);
      }
    })
  }
}

const messageService = (channels, msg, bot) => {
  try {
    sendToChannels(channels, msg, bot);
  } catch (e) {
    console.error("Send message failed: " + e);
  }
}

module.exports = { messageService };

