/*CMD
  command: ⚙️Set Currency 💵
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel
  answer: 📌*Send Your Currency Name*
  keyboard: 
  aliases: 
CMD*/

var admin = Bot.getProperty("admin")
if (user.telegramid == "" + admin + "") {
  Bot.sendMessage("✅ Done: Your New Currency is\n " + "`" + message + "`")
  Bot.setProperty("cur", message, "string")
} else {
  Bot.sendMessage("❌You are Not Admin")
}

