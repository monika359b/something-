/*CMD
  command: /setwallet
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Set Wallet
  answer: 
  keyboard: 
  aliases: ⚙️ set wallet ⚙️
CMD*/

let stat = Bot.getProperty("" + user.telegramid + "")

if (stat == "ban") {
  Bot.sendMessage("*You're Ban*")
} else {
  let wallet = User.getProperty("wallet")
  var button = [[{ title: "💼 Set / Change TRX Wallet", command: "/wallet" }]]
  Bot.sendInlineKeyboard(
    button,
    "*💡 Your currently set TRX wallet is:* \n `" +
      wallet +
      "`\n\n💹It will be used for *all future withdrawals.*"
  )
}

