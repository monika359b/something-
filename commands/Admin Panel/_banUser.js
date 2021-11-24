/*CMD
  command: /banUser
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel
  answer: _🛠Enter User id?_
  keyboard: 
  aliases: 🔒Ban User
CMD*/

var admin = Bot.getProperty("admin")
if (user.telegramid == "" + admin + "") {
  Bot.setProperty("" + data.message + "", "ban", "string")
  Bot.sendMessage("User Has Been Ban")
} else {
  Bot.sendMessage("You Are Not the admin❌")
}

