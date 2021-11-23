/*CMD
  command: ⚙️ Set Refer Bonus 🤴
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel
  answer: 📌*Send How Much You Want To Set*
  keyboard: 
  aliases: 
CMD*/

var admin = Bot.getProperty("admin")
if (user.telegramid == "" + admin + "") {
  Bot.sendMessage("✅ Done: Your New Refer Bonus is\n " + "`" + message + "`")
  Bot.setProperty("rebon", message, "integer")
} else {
  Bot.sendMessage("❌You are Not Admin")
}

