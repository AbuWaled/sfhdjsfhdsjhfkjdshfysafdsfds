const Discord = require('discord.js');

const client = new Discord.Client();

const fs = require("fs");

const prefix = "+";

const adminprefix = "+"; 

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log(' ID [ " ${user.id} "]')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

client.on('message', message => {	
              if(!message.channel.guild) return;	
    if(message.content.startsWith('+bc')) {	
    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));	
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );	
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);	
    let copy = "Turbo Bot";	
    let request = `Requested By ${message.author.username}`;	
    if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {	
    msg.react('✅')	
    .then(() => msg.react('❌'))	
    .then(() =>msg.react('✅'))	



     let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;	
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;	
       let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });	
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });	
    reaction1.on("collect", r => {	
    message.channel.send(`☑ |   ${message.guild.members.size} يتم ارسال البرودكاست الى عضو `).then(m => m.delete(5000));	
    message.guild.members.forEach(m => {	
    var bc = new	
       Discord.RichEmbed()	
       .setColor('RANDOM')	
       .setTitle('البرودكاست') .addField('السيرفر', message.guild.name) .addField('المرسل', message.author.username)	
       .addField('الرساله', args)	
       .setThumbnail(message.author.avatarURL)	
       .setFooter(copy, client.user.avatarURL);	
    m.send({ embed: bc })	
    msg.delete();	
    })	
    })	
    reaction2.on("collect", r => {	
    message.channel.send(`**تم ايقاف ارسال البرودكاست.**`).then(m => m.delete(5000));	
    msg.delete();	
    })	
    })	
    }	
    })


//bc online

client.on('message', message => {
    if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('+ownerbc')){
if (message.author.id !== '444126346676011028') return message.reply('** هذا الأمر قفط لصاحب البوت و شكراًً **')
if(!message.author.id === '444126346676011028') return;
message.channel.sendMessage('Now Sending |✅')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});


  client.on("message", message => {   // Alpha Codes Ghost
   
              if (message.content.startsWith(prefix + "obc")) {    // Alpha Codes Ghost
                           if (!message.member.hasPermission("ADMINISTRATOR"))  return;   // Alpha Codes Ghost
    let args = message.content.split(" ").slice(1);  // Alpha Codes Ghost
    var argresult = args.join(' '); 
    message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {  // Alpha Codes Ghost
   m.send(`${argresult}\n ${m}`);   // Alpha Codes Ghost
  })
   message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` :mailbox:  عدد المستلمين `); 
   message.delete(); 
  };     
  });

client.on('message', message => {
    var  user = message.mentions.users.first() || message.author;  // Alpha Codes Ghost
if (message.content.startsWith("#avatar")) {
message.channel.send(`This avatar For ${user} link : ${user.avatarURL}`);
}
});

client.on('ready',  () => {
    console.log('تم تشغيل :Broadcast  ');
    console.log(`Logged in as * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] Users! [ " ${client.users.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] channels! [ " ${client.channels.size} " ]`);
  });


  client.on("message", message => {
  
              if (message.content.startsWith(prefix + "offbc")) {
                           if (!message.member.hasPermission("ADMINISTRATOR"))  return;
    let args = message.content.split(" ").slice(1);
    var argresult = args.join(' '); 
    message.guild.members.filter(m => m.presence.status !== 'online').forEach(m => {
   m.send(`${argresult}\n ${m}`);
  })
   message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'Offline').size}\` :mailbox:  عدد المستلمين `); 
   message.delete(); 
  };     
  });



 








client.login(process.env.BOT);
