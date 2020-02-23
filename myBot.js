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

  client.on("message", async message  => {
      if(message.channel.id=='430359947012866048'){
      const prefix = ";;";
      const args = message.content.slice(prefix.length).trim().split(/ +/g);
      const cmd = args.shift().toLowerCase();
      if(!message.content.startsWith(prefix)&&message.author.id!='680112001783169047'){
        message.reply('ห้องนี้ไว้ใส่เพลงนะไอเหี้ย')
      }
      }
    })
client.on("message", async message => {
  const prefix = "**";
  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith(prefix)) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();
  if (cmd === "ping") {
      // Send a message
      const msg = await message.channel.sendMessage(`🏓 Pinging....`);

      // Edit the message
      msg.edit(`🏓 Pong!\nLatency is ${Math.floor(msg.createdTimestap - message.createdTimestap)}ms\nAPI Latency is ${Math.round(client.ping)}ms`);
  }

  if (cmd === "เรียก") {
      if (message.deletable) message.delete();

      if (args.length == 0) return message.reply(`Nothing to say?`).then(m => m.delete(5000));
      if (args[0].toLowerCase() === "แก้ว") {
        await message.channel.sendMessage('เข้าดิสได้ละไอเหี้ยแก้ว <@284689915743305730>');
      }else if(args[0].toLowerCase() === "อัด") {
        await message.channel.sendMessage('เข้าดิสได้แล้วครับนายท่าน <@302355445719367680>');
      }else if(args[0].toLowerCase() === "เสด") {
        await message.channel.sendMessage('เข้าดิสได้แล้วโอนี่จาง <@220526836440891392>');
      }else if(args[0].toLowerCase() === "เป") {
        await message.channel.sendMessage('ไอหน้าหีรีบเข้ามาดิ๊ <@264768635204141056>');
      }
      
  }

  if (cmd === "เช็ค") {
    if (message.deletable) message.delete();

    if (args.length == 0) return message.reply(`Nothing to say?`).then(m => m.delete(5000));
    if (args[0].toLowerCase() === "ชื่อ") {
      await message.channel.sendMessage(message.author.username);
    }else if(args[0].toLowerCase() === "รูป") {
      await message.channel.sendMessage(message.author.username);
    }else if(args[0].toLowerCase() === "เสด") {
      await message.channel.sendMessage('เข้าดิสได้แล้วโอนี่จาง <@220526836440891392>');
    }
    
}
if (cmd === "สร้าง") {
  if (message.deletable) message.delete();

  if (args.length == 0) return message.reply(`Nothing to say?`).then(m => m.delete(5000));
    await message.channel.sendMessage(message.author.username);
    Function.createChar(message.author.username,args[0].toLowerCase(),args[1].toLowerCase())
}
});

client.on("message", async message => {
    console.log(`${message.author.username} said: ${message.content}`);
});

client.on('message', message => { 
  if (message.content === 'ทอย') {
    var sum = 0
  for(let i = 0;i < 2;i++){
    let output = Function.dice(1,8)
    let test = 0
   
  if(output == 1){
  message.reply('ว้ายได้ '+output+' เองไอควาย');
  test = 1
  }else if(output == 2){
  message.reply('ได้แค่ '+output+' กระจอกพอๆกับ1แหละ');
  test = 2
  }else if(output == 3){
  message.reply('ก็ยังดีที่ได้ '+output+' แต่ก็กระจอกอยู่ดี');
  test = 3
  }else if(output == 4){
  message.reply('ได้แค่ '+output+' ได้แค่ครึ่งเดียว?');
  test = 4
  }else if(output == 5){
  message.reply('โหดใช้ได้เลยนะได้ '+output+' เนี่ย');
  test = 5
  }else if(output == 6){
  message.reply('อ่าเริ่มจะยอมรับละก็ได้ตั้ง '+output+' นี่');
  test = 6
  }else if(output == 7){
  message.reply('มึงเริ่มเกินไปละได้ '+output+' เนี่ย');
  test = 7
  }else if(output == 8){
  message.reply('ควยเย็ดแม่โกงได้ตั้ง '+output);
  test = 8
  }
  sum = sum + test
  }
  message.reply('Sum of ลูกเต๋า '+sum);
  }
});

// Login the bot
client.login(NjgxMDg0MDA2NjQ5MDM2ODEw.XlJcdA.bO9Nzwuffi1ToIG7wtZp4NJ50JE);
