/*CMD
  command: /setDailyBonus
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel
  answer: 📌*Send How Much You Want To Set*
  keyboard: 
  aliases: ⚙️Set Daily Bonus
CMD*/

var admin = Bot.getProperty("admin")
if (user.telegramid == "" + admin + "") {
  Bot.sendMessage("✅ Done: Your New Daily Bonus is\n " + "`" + message + "`")
  Bot.setProperty("dbon", message, "integer")
} else {
  Bot.sendMessage("❌You are Not Admin")
}

