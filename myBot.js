const Function = require('./function.js');
const Discord = require('discord.js'); //เรียก discord.js มาใช้
const adminSibling = new Discord.Client(); //ประกาศ client ขึ้นมา
//event นี้ทำงานเมื่อ login สำเร็จ
adminSibling.on('ready', () => {
  console.log('Ready!');
});
//รอรับ event message เวลามีข้อความโผล่มาในแชท function นี้ก็จะทำงาน
adminSibling.on('message', message => { 
  if (message.content === 'ฉันรักเอมิเลีย') {
    message.reply('ถึงยังไงเรมก็รักสุบารุค่ะ');
  }
});
adminSibling.on('message', message => { 
  if (message.content === 'สวัสดีพี่น้องของข้า') {
    message.reply('ควยไรไอเด็กเบียว');
  }
});
adminSibling.on('message', message => { 
  if (message.content === 'สวัสดี') {
    message.reply('ว่าไงไอสัสเจ้านายเหี้ยๆของข้า');
  }
});
adminSibling.on('message', message => { 
  if (message.content === 'test') {
    message.channel.send('โอเค');
  }
});
adminSibling.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member}`);
});

adminSibling.on('message', message => { 
  if (message.content === 'ทอย') {
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
});

adminSibling.login('NjgwMTEyMDAxNzgzMTY5MDQ3.Xk7Jxg.7u86QN4T_HCzMhxbj_X4SzsbGFQ');