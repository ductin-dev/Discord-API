var crypto = require("crypto");

const logger = (channel, msg, time = `${new Date().toLocaleString()}`) => {
  console.log(`[${time}] Message {${msg}} sent to {${channel}}`);
}

const pharsedMsg = (text) => {
  return text.toString()
    .replaceAll("${TIME}", new Date().toLocaleString())
    .replaceAll("${RANDOM}", crypto.randomBytes(20).toString('hex'))
    .replaceAll("${ID}", "N/A")
    .replaceAll("${NAME}", "System");
}

const randomBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = { logger, pharsedMsg, randomBetween };