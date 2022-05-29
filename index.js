const express = require("express");
const app = express()
app.get("/", (req, res) => res.send("ok"))
app.listen(3000, () => console.log("server on"));


const mineflayer = require('mineflayer');
const bot = mineflayer.createBot({
  host: 'Play.HiraNetwork.Com',
  username: 'nickname'
})

setTimeout(function() {
    bot.chat("/login your_password")
},5000) // send 5 second later /login 
setTimeout(function(){
  bot.chat("/skyblock");
},8000) // send 8 second later /skyblock
setTimeout(function(){
  bot.chat("/is go");
},10000) // send 10 second later /is go
bot.on("chat", (messsage) => {
  console.log(messsage) // send console a server messages
})
