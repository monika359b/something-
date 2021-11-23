/*CMD
  command: check
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Joining System
  answer: 
  keyboard: 
  aliases: 
CMD*/

var user = options.result.status
User.setProperty("status", user, "string")
if ((user == "member") | (user == "administrator") | (user == "creator")) {
  Bot.runCommand("/menu") //type Bot.runCommand("/join2") if u need to add 2 or more channel in check 
  User.addToGroup("user")
}

if (user == "left") {
  Bot.sendMessage("*❌ Must join all channel*")
}

