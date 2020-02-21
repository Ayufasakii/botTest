const { Client,RichEmbed } = require("discord.js");
const  config  = require("./config.json");
const Function = require('./function.js');
// Declares our bot,
// the disableEveryone prevents the client to ping @everyone
const client = new Client({
    disableEveryone: true
});
// When the bot's online, what's in these brackets will be executed
client.on("ready", () => {
    console.log(`Hi, ${client.user.username} is now online!`);

    // Set the user presence
    client.user.setPresence({
        status: "online",
        game: {
            name: "me getting developed",
            type: "WATCHING"
        }
    }); 
})

client.on("message", async message => {
  const prefix = "**";

  // If the author's a bot, return
  // If the message was not sent in a server, return
  // If the message doesn't start with the prefix, return
  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith(prefix)) return;

  // Arguments and command variable
  // cmd is the first word in the message, aka the command
  // args is an array of words after the command
  // !say hello I am a bot
  // cmd == say (because the prefix is sliced off)
  // args == ["hello", "I", "am", "a", "bot"]
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd === "ping") {
      // Send a message
      const msg = await message.channel.sendMessage(`🏓 Pinging....`);

      // Edit the message
      msg.edit(`🏓 Pong!\nLatency is ${Math.floor(msg.createdTimestap - message.createdTimestap)}ms\nAPI Latency is ${Math.round(client.ping)}ms`);
  }

  if (cmd === "เรียก") {
      // Check if you can delete the message
      if (message.deletable) message.delete();

      if (args.length == 0) return message.reply(`Nothing to say?`).then(m => m.delete(5000));
      
      // Role color

      // If the first argument is embed, send an embed,
      // otherwise, send a normal message
      if (args[0].toLowerCase() === "แก้ว") {
        await message.channel.sendMessage('เข้าดิสได้ละไอเหี้ยแก้ว <@284689915743305730>');
      }else if(args[0].toLowerCase() === "อัด") {
        await message.channel.sendMessage('เข้าดิสได้แล้วครับนายท่าน <@302355445719367680>');
      }else if(args[0].toLowerCase() === "เสด") {
        await message.channel.sendMessage('เข้าดิสได้แล้วโอนี่จาง <@220526836440891392>');
      }
      
  }
});
// When a message comes in, what's in these brackets will be executed
client.on("message", async message => {
    console.log(`${message.author.username} said: ${message.content}`);
});
client.on('message', message => { 
  if (message.content === 'ทอย') {
    
  for(let i = 0;i < 2;i++){
    let output = Function.dice(1,8)
  if(output == 1){
    message.reply('ว้ายได้ '+output+' เองไอควาย');
  }else if(output == 2){
  message.reply('ได้แค่ '+output+' กระจอกพอๆกับ1แหละ');
  }else if(output == 3){
  message.reply('ก็ยังดีที่ได้ '+output+' แต่ก็กระจอกอยู่ดี');
  }else if(output == 4){
  message.reply('ได้แค่ '+output+' ได้แค่ครึ่งเดียว?');
  }else if(output == 5){
  message.reply('โหดใช้ได้เลยนะได้ '+output+' เนี่ย');
  }else if(output == 6){
  message.reply('อ่าเริ่มจะยอมรับละก็ได้ตั้ง '+output+' นี่');
  }else if(output == 7){
  message.reply('มึงเริ่มเกินไปละได้ '+output+' เนี่ย');
  }else if(output == 8){
  message.reply('ควยเย็ดแม่โกงได้ตั้ง '+output);
  }
  }
  }
});
// Login the bot
client.login(config.TOKEN);