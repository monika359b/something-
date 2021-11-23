/*CMD
  command: Photo09
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Admin Panel
  answer: 
  keyboard: 
  aliases: 
CMD*/

var pto = options.photo
var caption = options.caption
Api.sendPhoto({
  photo: pto,
  caption: "*📣 Important Announced\n" + caption + "*"
})

