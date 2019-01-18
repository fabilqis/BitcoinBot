process.env["NTBA_FIX_319"] = 1;

require("dotenv").config();

const Telegram = require("node-telegram-bot-api");
const Reply = require("./getAPI");

const token = process.env.TELEGRAM_TOKEN;
const CoinBot = new Telegram(token, {
  polling: true
});

CoinBot.on("message", function (talk) {
  var talkId = talk.chat.id;
  var message = talk.text;

  Reply.reply(message, (err, res) => {
    if (!err) {
      CoinBot.sendMessage(talkId, res);
    }
  });
});

console.log("Service is running...");