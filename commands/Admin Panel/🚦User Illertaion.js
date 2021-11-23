/*CMD
  command: 🚦User Illertaion
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Admin Panel
  answer: 
  keyboard: 
  aliases: 
CMD*/

var admin = Bot.getProperty("admin")
if (user.telegramid == "" + admin + "") {
  var mmmme = ""

  var key = [[{ title: "", command: "Admin" }]]
  Bot.sendInlineKeyboard(key, "")
  Bot.sendMessage(
    "*Your Account Used Illetration Are - Used " +
      mmmme +
      iteration_quota.progress +
      " / 25000*"
  )
} else {
  Bot.sendMessage("❌Your Are Not admin")
}

