/*CMD
  command: /cutBalance
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel
  answer: _🛠Enter User id?_
  keyboard: 
  aliases: ➖Cut Balance 💵
CMD*/

var admin = Bot.getProperty("admin")
if (user.telegramid == "" + admin + "") {
  let msg = message
  User.setProperty("id", msg, "integer")
  Bot.runCommand("/CutBal")
} else {
  if (user.telegramid == "" + admin + "") {
    let msg = message
    User.setProperty("id", msg, "integer")
    Bot.runCommand("/CutBal")
  } else {
    return
  }
}

