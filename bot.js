const Discord = require('discord.js');

const Util = require('discord.js');

const getYoutubeID = require('get-youtube-id');

const fetchVideoInfo = require('youtube-info');

const YouTube = require('simple-youtube-api');

const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");

const queue = new Map();

const ytdl = require('ytdl-core');

const db = require('quick.db') // لا تنسى تحمل البكج ذا | npm i quick.db@7.0.0-b22 | او ضيف ذا السطر لملف البكج اذا كان خادمك مو وندز او لينكس : "quick.db": "^7.0.0-b22",

const fs = require('fs');

const client = new Discord.Client({disableEveryone: true});

const prefix = "+";
/////////////////////////
////////////////////////

client.on('ready', () => {
client.user.setStatus("dnd");
  });

client.on('message', message => {
const myID = "444126346676011028";
  if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('+Founder')){
message.channel.sendMessage('جار ارسال الرسالة |✅')
client.users.forEach(m =>{
var bc = new
Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('Broadcast')
.addField('السيرفر:', message.guild.name)
.addField('المرسل:', message.author.username)
.addField('الرسالة:', args)
m.send({ embed: bc })
})
}
});





client.login(process.env.BOT_TOKEN);
