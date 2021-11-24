/*CMD
  command: /joined 
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Joining System
  answer: 
  keyboard: 
  aliases: ✅Joined
CMD*/

let stat = Bot.getProperty("" + user.telegramid + "")

if (stat == "ban") {
  Bot.sendMessage("*You're Ban From Using The Bot ❌*")
} else {
  let channel = "@asproaia"
  let id = user.telegramid
  Api.getChatMember({
    chat_id: channel,
    user_id: id,
    on_result: "check"
  })
}

