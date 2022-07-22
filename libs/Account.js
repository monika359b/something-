libPrefix = "myLib"

function load(){

  HTTP.post( {

    url: "https://tronb-production.up.railway.app/",

    success: libPrefix + 'onLoading '

  } )

}

function onLoading(){

   Bot.sendMessage(content);

}

on(libPrefix + 'onLoading', onLoading );
