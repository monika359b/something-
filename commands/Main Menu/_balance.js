/*CMD
  command: /balance
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Main Menu
  answer: 
  keyboard: 
  aliases: 💵 Balance 💵
CMD*/

let stat = Bot.getProperty("" + user.telegramid + "")

if (stat == "ban") {
  Bot.sendMessage("*You're Ban*")
} else {
  var balance = Libs.ResourcesLib.userRes("balance")
  var lib = Libs.ReferralLib
  var refList = lib.currentUser.refList.get()
  let cur = Bot.getProperty("cur")
  Bot.sendInlineKeyboard(
    [[{ title: "🙇‍♀️ Back", command: "back" }]],
    "*👤 User : " +
      user.first_name +
      "\n\n💰 Balance : " +
      balance.value().toFixed(2) +
      " " +
      cur +
      "\n\n🤴Refer And Earn More*"
  )
}

