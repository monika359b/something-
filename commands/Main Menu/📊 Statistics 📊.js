/*CMD
  command: 📊 Statistics 📊
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Main Menu
  answer: 
  keyboard: 
  aliases: 
CMD*/

let cur = Bot.getProperty("cur")
var stat = Bot.getProperty("" + user.telegramid + "")

if (stat == "ban") {
  Bot.sendMessage("*You're Ban*")
} else {
  var userPayment = Libs.ResourcesLib.anotherChatRes("userpayment", "global")
  var status = Libs.ResourcesLib.anotherChatRes("status", "global")
    .value()
    .toFixed(0)

  var stat =
    "*📊 Total members : " +
    status +
    " Users\n\n➕ Total successful Withdraw : " +
    userPayment.value().toFixed(0) +
    " " +
    cur +
    "\n\n👑 Support Us 👑*"

  Bot.sendInlineKeyboard([[{ title: "🙇‍♀️ Back", command: "back" }]], stat)
}

