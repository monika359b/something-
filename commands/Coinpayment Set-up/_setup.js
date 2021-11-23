/*CMD
  command: /setup
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Coinpayment Set-up
  answer: 
  keyboard: 
  aliases: 
CMD*/

Libs.CoinPayments.setPrivateKey("xxx")
//Go To Coinpayment Then Login Then Click On Three Lines Then Click on Api Keys Then Get
//Then Again Click On Three Lines Ggen Account Settings Then Merchant Settings Then Enter Anything In IPN Secret And Update Settings
Libs.CoinPayments.setPublicKey("xxx")
//Get From Coinpayment
Libs.CoinPayments.setBBApiKey("xxx")
//Go To Main page of Bots Bussiness Click on Three Lines Then Click On Profile Then You Got
Bot.sendMessage("✅ Done Your Account Is Setupped")

