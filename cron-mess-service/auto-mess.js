const lib = require('./util.js');
const { channels, msgs } = require('./config.json');

const sendToChannels = (msg, bot, targetChannelIndexes) => {
  if (!targetChannelIndexes || targetChannelIndexes.isEmpty()) {
    channels.forEach((channel) => {
      bot.createMessage(channel.id, lib.pharsedMsg(msg));
      lib.logger(channel.des);
    })
  } else {
    channels.forEach((channel, index) => {
      if (indexs.includes(index)) {
        bot.createMessage(channel.id, lib.pharsedMsg(msg));
        lib.logger(channel.des);
      }
    })
  }
}

const messageService = (bot) => {
  try {
    sendToChannels([2], msgs[1].msg, bot);
  } catch (e) {
    console.error("Send message failed: " + e);
  }
}

module.exports = { messageService };

