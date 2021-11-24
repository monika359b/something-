/*CMD
  command: /withdraw
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Withdraw
  answer: 
  keyboard: 
  aliases: ↗️Withdraw↗️
CMD*/

let stat = Bot.getProperty("" + user.telegramid + "")

if (stat == "ban") {
  Bot.sendMessage("*You're Ban*")
} else {
  var wallet = User.getProperty("wallet")
  if (wallet == undefined) {
    var button = [[{ title: "💼Set/Change Wallet", command: "/wallet" }]]
    Bot.sendInlineKeyboard(
      button,
      "*💡 Your currently set TRX wallet is:* not set\n\nIt will be used for all future withdrawals."
    )
  } else {
    Bot.runCommand("/trxwithdraw")
  }
}

