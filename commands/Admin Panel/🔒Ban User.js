/*CMD
  command: 🔒Ban User
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel
  answer: _🛠Enter User id?_
  keyboard: 
  aliases: 
CMD*/

var admin = Bot.getProperty("admin")
if (user.telegramid == "" + admin + "") {
  Bot.setProperty("" + data.message + "", "ban", "string")
  Bot.sendMessage("User Has Been Ban")
} else {
  Bot.sendMessage("You Are Not the admin❌")
}

