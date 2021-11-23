/*CMD
  command: Admin
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Admin Panel
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (request.data) {
  var message_id = request.message.message_id
  var chat_id = request.message.chat.id

  Api.deleteMessage({
    chat_id: chat_id,
    message_id: message_id
  })
}
var admin = Bot.getProperty("admin")
if (admin == undefined) {
  Bot.sendMessage("Please Set Admin First Use /SetAd")
} else {
  if (user.telegramid == "" + admin + "") {
    var button = [
      [
        { title: "🚨Main Setting", command: "/mains" },
        { title: "👲User Settings", command: "/users" }
      ],
      [{ title: "🔄Tranfer Admin Panel", command: "/SetAd" }],
      [
        { title: "🤖Bot Setting", command: "/bots" },
        { title: "💫Mass Setting", command: "/massse" }
      ]
    ]
    Bot.sendInlineKeyboard(
      button,
      "*🤗 Welcome To Admin Panel\n\nUsing Many Setting at Same Time Can\nHarm Your Bot*"
    )
  } else {
    Bot.sendMessage("❌You are Not Admin")
  }
}

