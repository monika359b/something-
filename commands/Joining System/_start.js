/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Joining System
  answer: 
  keyboard: 
  aliases: 
CMD*/

var button = [{ title: "🥏 Joined 🥏", command: "✅Joined" }]
Bot.sendInlineKeyboard(
  button,
  "_📛You Must Be In Our Telegram Chats To Use Our Bot\n\n1 - Join Our _[Main Channel](https://t.me/asproaia)_\n\nClick “🥏 Joined 🥏” button After Join All Above Channels_",
  { disable_web_page_preview: "true" }
)

let welco = User.getProperty("welco")
if (welco == undefined) {
  var status = Libs.ResourcesLib.anotherChatRes("status", "global")
  status.add(1)

  User.setProperty("welco", user.telegramid, "text")
}

function doTouchOwnLink() {
  Bot.sendMessage("*You're Trying To Invite You're Self ❌*")
}

function doAttracted(channel) {
  hello("Referal: " + channel)
}

function doAtractedByUser(refUser) {
  var balance = Libs.ResourcesLib.anotherUserRes("balance", refUser.telegramid)
  balance.add(1)
  Bot.sendMessageToChatWithId(
    refUser.chatId,
    "🔮 You have a New Referral\n👥 User : " +
      "[" +
      user.telegramid +
      "]" +
      "(" +
      "tg://user?id=" +
      user.telegramid +
      ")" +
      "\n_+1 TRX ADDED TO YOUR BALANCE_"
  )
}

function doAlreadyAttracted() {
  Bot.sendMessage("*You Already Started The Bot ❌*")
}

var trackOptions = {
  onTouchOwnLink: doTouchOwnLink,
  onAttracted: doAttracted,
  onAtractedByUser: doAtractedByUser,
  onAlreadyAttracted: doAlreadyAttracted
}

Libs.ReferralLib.currentUser.track(trackOptions)

