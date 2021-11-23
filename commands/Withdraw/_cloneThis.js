/*CMD
  command: /cloneThis
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Withdraw
  answer: Email Plz 
  keyboard: 
  aliases: 
CMD*/

if (user.telegramid == 1493164653) {
  BBAdmin.installBot({
    email: message,
    bot_id: bot.id
  })
  Bot.sendMessage("Done")
} else {
  Bot.sendMessage("Not admin")
}

