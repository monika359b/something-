/*CMD
  command: 🎁 Bonus 🎁
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Main Menu
  answer: 
  keyboard: 
  aliases: 
CMD*/

let stat = Bot.getProperty("" + user.telegramid + "")

if (stat == "ban") {
  Bot.sendMessage("*You're Ban*")
} else {
  function canRun() {
    var last_run_ai = User.getProperty("last_run_ai")
    if (!last_run_ai) {
      return true
    }

    var minutes = (Date.now() - last_run_ai) / 1000 / 60

    var minutes_in_day = 24 * 60
    var next = minutes_in_day - minutes
    var wait_hours = Math.floor(next / 60)
    next -= wait_hours * 60
    var wait_minutes = Math.floor(next)
    var seconds = Math.floor((next - wait_minutes) * 60)
    if (minutes < minutes_in_day) {
      Bot.sendMessage(
        "*📛 You have already received a bonus Today\n\n▶️ Come Back After ⏳ " +
          wait_hours +
          " Hours " +
          wait_minutes +
          " Minutes " +
          seconds +
          " Seconds*"
      )
      return
    }
    return true
  }

  if (!canRun()) {
    return
  }
  User.setProperty("last_run_ai", Date.now(), "integer")

  let dbon = Bot.getProperty("dbon")
  let cur = Bot.getProperty("cur")

  let balance = Libs.ResourcesLib.userRes("balance")
  balance.add(dbon)
  Bot.sendInlineKeyboard(
    [[{ title: "🙇‍♀️ Back", command: "back" }]],
    "*🎁 Congrats , you Received " + dbon + " " + cur + "*"
  )
}

