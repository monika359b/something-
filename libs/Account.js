libPrefix = "myLib"

function load(){

  HTTP.post( {

    url: "http://example.com",

    success: libPrefix + 'onLoading '

  } )

}

function onLoading(){

   Bot.sendMessage(content);

}

on(libPrefix + 'onLoading', onLoading );
