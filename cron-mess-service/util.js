var crypto = require("crypto");

const logger = (msg, time = `${new Date().toLocaleDateString()}-${new Date().toLocaleTimeString()}`) => {
  console.log(`[${time}] Message sent to --${msg}!--`);
}

const pharsedMsg = (text) => {
  return text.toString()
    .replaceAll("${TIME}", new Date().toLocaleTimeString())
    .replaceAll("${RANDOM}", crypto.randomBytes(20).toString('hex'))
    .replaceAll("${ID}", "N/A")
    .replaceAll("${NAME}", "System");
}

const randomBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = { logger, pharsedMsg, randomBetween };