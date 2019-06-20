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



client.on("message", message => {


message.channel.startTyping();
 setTimeout(() => {
 message.channel.stopTyping();
 }, Math.random() * (1 - 3) + 1 * 1000);


});


const prefix = "+"
client.on('message', msg => {
      let params = msg.content.slice(prefix.length).trim().split(/ +/g);
  if(msg.author.client) return
  if(msg.content.startsWith(prefix + 'addbadwords')) {
    let words = db.get(`badwords.${msg.guild.id}.words`)
    if(words === null || words === undefined) {
      db.set(`badwords.${msg.guild.id}.words`, [])
    }
    if(!params[1]) return msg.channel.send(`**اكتب السبة ي حلو**`)
    let args = params.slice(1).join(' ')
    if(words.includes(args)) return msg.channel.send(`**السبة محفوظة من قبل**`)
    db.push(`badwords.${msg.guild.id}.words`, args)
    msg.channel.send(`**تم اضافة [${args}]**`.replace(args.slice(args.length - 2) , "##" ))
  }
})


client.on('message', msg => {
  if(msg.author.id === client.user.id) return
  let words = db.get(`badwords.${msg.guild.id}.words`)
  if(words === null || words === undefined) return
  if(words.some(w => msg.content.includes(w)) ) {
    msg.delete()
  }
})
client.on('message', msg => {
  if(msg.author.client) return
  if(msg.content.startsWith(prefix + 'badwordslist')) {
    let words = db.get(`badwords.${msg.guild.id}.words`)
    if(words === null || words === undefined) return msg.channel.send(`**القائمة فارغة**`)
    let list = "";
    let cnt = 0
    words.forEach(w => {
      cnt += 1
      list = `${list} \n${cnt} - ||${w}||`
    })
    let embed = new Discord.RichEmbed()
    .setTitle(`bad words list`)
    .setDescription(`${list}`)
    msg.channel.send(embed)
  }
})
client.on('message', msg => {
  if(msg.author.client) return
  if(msg.content.startsWith(prefix + 'badwordsreset')) {
    let words = db.get(`badwords.${msg.guild.id}.words`)
    if(words === null || words === undefined) return msg.channel.send(`**لا توجد كلمات لكي تحذفها**`)
    db.delete(`badwords.${msg.guild.id}.words`)
    msg.channel.send(`**تم حذف كل الكلمات بنجاح**`)
  }
})

client.log('token')

client.on('ready', () => {
client.user.setStatus("idle");
client.user.setGame(`+help | +inv ${client.guilds.size} Servers  `,"https://www.twitch.tv/dggamingbot")
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
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
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

client.on('guildCreate', guild => {
  var embed = new Discord.RichEmbed()
  .setColor(0x5500ff)
  .setDescription(`**شكرا جزيل الشكر لاضافة البوت**`)
      guild.owner.send(embed)
});





client.on('message' , message => {
var prefix = "+"

if (message.author.bot) return;
if (message.content.startsWith(prefix + "contact")) {
if (!message.channel.guild) return;



let args = message.content.split(" ").slice(1).join(" ");



client.users.get("444126346676011028").send(
    "\n" + "**" + "● السيرفر :" + "**" +
    "\n" + "**" + "» " + message.guild.name + "**" +
    "\n" + "**" + " ● المرسل : " + "**" +
    "\n" + "**" + "» " + message.author.tag + "**" +
    "\n" + "**" + " ● الرسالة : " + "**" +
    "\n" + "**" + args + "**")

let embed = new Discord.RichEmbed()
     .setAuthor(message.author.username, message.author.avatarURL)
     .setDescription('📬 تم ارسال الرسالة الى صاحب البوت بنجاح')
     .setThumbnail(message.author.avatarURL)
     .setFooter("By :<@444126346676011028>")
                                                

message.channel.send(embed);


}
    
});

client.on('message', message => {
    if (message.content.startsWith("+info")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .setTitle('``INFO DgPro`` ')
            .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('``servers``', [client.guilds.size], true)
            .addField('``channels``' , `[ ${client.channels.size} ]` , true)
            .addField('``Users``' ,`[ ${client.users.size} ]` , true)
            .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
            .addField('``My ID``' , `[ ${client.user.id} ]` , true)
			      .addField('``My Prefix``' , `[ + ]` , true)
			      .addField('``My Language``' , `[ Java Script ]` , true)
			      .setFooter('By | <@444126346676011028>')
    })
}
});

client.on('message', msg => {
  if (msg.content === 'السعودية') {      
    msg.react("🇸🇦")
    msg.channel.send("🇸🇦")
  }
});

client.on('message', msg => {
  if (msg.content === 'مصر') {      
    msg.react("🇪🇬")
    msg.channel.send("🇪🇬")
  }
});

client.on('message', msg => {
  if (msg.content === 'المغرب') {      
    msg.react("🇲🇦")
    msg.channel.send("🇲🇦")
  }
});

client.on('message', msg => {
  if (msg.content === 'العراق') {      
    msg.react("🇮🇶")
    msg.channel.send("🇮🇶")
  }
});

client.on('message', msg => {
  if (msg.content === 'الجزائر') {      
    msg.react("🇩🇿")
    msg.channel.send("🇩🇿")
  }
});

client.on('message', msg => {
  if (msg.content === 'الامارات') {      
    msg.react("🇦🇪")
    msg.channel.send("🇦🇪")
  }
});

client.on('message', msg => {
  if (msg.content === 'تونس') {      
    msg.react("🇹🇳")
    msg.channel.send("🇹🇳")
  }
});

client.on('message', msg => {
  if (msg.content === 'سوريا') {      
    msg.react("🇸🇾")
    msg.channel.send("🇸🇾")
  }
});

client.on('message', msg => {
  if (msg.content === 'ليبيا') {      
    msg.react("🇱🇾")
    msg.channel.send("🇱🇾")
  }
});

client.on('message', msg => {
  if (msg.content === 'قطر') {      
    msg.react("🇶🇦")
    msg.channel.send("🇶🇦")
  }
});

client.on('message', msg => {
  if (msg.content === 'الصومال') {      
    msg.react("🇸🇴")
    msg.channel.send("🇸🇴")
  }
});

client.on('message', msg => {
  if (msg.content === 'عمان') {      
    msg.react("🇴🇲")
    msg.channel.send("🇴🇲")
  }
});

client.on('message', msg => {
  if (msg.content === 'موريتانيا') {      
    msg.react("🇲🇷")
    msg.channel.send("🇲🇷")
  }
});



client.on('message', msg => {
  if (msg.content === 'البحرين') {      
    msg.react("🇧🇭")
    msg.channel.send("🇧🇭")
  }
});

client.on('message', msg => {
  if (msg.content === 'الاردن') {      
    msg.react("🇯🇴")
    msg.channel.send("🇯🇴")
  }
});


client.on("message", message => { 
     var prefix = "+";
    if (!message.content.startsWith(prefix)) return;
      let command = message.content.split(" ")[0];
      command = command.slice(prefix.length);
        if(command === "skin") {
                const args = message.content.split(" ").slice(1).join(" ")
        if (!args) return message.channel.send("** اكتب اسم سكنك . **");
        const image = new Discord.Attachment(`https://minotar.net/armor/body/${args}`, "skin.png");
    message.channel.send(image)
        }
    });


client.on("message", async message => {
            if(!message.channel.guild) return;
            var prefix = "+";
        if(message.content.startsWith(prefix + 'invites')) {
        var nul = 0
        var guild = message.guild
        await guild.fetchInvites()
            .then(invites => {
             invites.forEach(invite => {
                if (invite.inviter === message.author) {
                     nul+=invite.uses
                    }
                });
            });
          if (nul > 0) {
              console.log(`\n${message.author.tag} has ${nul} invites in ${guild.name}\n`)
              var embed = new Discord.RichEmbed()
                  .setColor("#000000")
                    .addField(`${message.author.username}`, `لقد قمت بدعوة **${nul}** شخص`)
                          message.channel.send({ embed: embed });
                      return;
                    } else {
                       var embed = new Discord.RichEmbed()
                        .setColor("#000000")
                        .addField(`${message.author.username}`, `لم تقم بدعوة أي شخص لهذة السيرفر`)

                       message.channel.send({ embed: embed });
                        return;
                    }
        }
        if(message.content.startsWith(prefix + 'invite-codes')) {
let guild = message.guild
var codes = [""]
message.channel.send(":postbox: **لقد قمت بأرسال جميع روابط الدعوات التي قمت بأنشائها في الخاص**")
guild.fetchInvites()
.then(invites => {
invites.forEach(invite => {
if (invite.inviter === message.author) {
codes.push(`discord.gg/${invite.code}`)
}
})
}).then(m => {
if (codes.length < 0) {
    var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invite codes in ${message.guild.name}`, `You currently don't have any active invites! Please create an invite and start inviting, then you will be able to see your codes here!`)
message.author.send({ embed: embed });
return;
} else {
    var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invite codes in ${message.guild.name}`, `Invite Codes:\n${codes.join("\n")}`)
message.author.send({ embed: embed });
return;
}
})
}

});
		





      client.on('guildDelete', guild => {
        var embed = new Discord.RichEmbed()
        .setColor(0x5500ff)
        .setDescription(`**نتمى انكم استمتعتم ب البوت :wink:**`)
            guild.owner.send(embed)
      });


client.on('message', message => { 
let prefix = '+'
    if (message.content.startsWith(prefix + 'emojilist')) {

        const List = message.guild.emojis.map(e => e.toString()).join(" ");

        const EmojiList = new Discord.RichEmbed()
            .setTitle('➠ Emojis') 
            .setAuthor(message.guild.name, message.guild.iconURL) 
            .setColor('RANDOM') 
            .setDescription(List) 
            .setFooter(message.guild.name) 
        message.channel.send(EmojiList) 
    }
});


client.on('message' , async (message) => {
 if (message.content.startsWith(prefix + 'say')) {
  const args = message.content.substring(prefix.length).split(' ');

 message.delete();
args.shift() 
let msg = args.join(' ') 
message.channel.createWebhook(message.author.username, message.author.avatarURL) 
    .then(wb => {
        const user = new Discord.WebhookClient(wb.id, wb.token) 
        user.send(msg); 
        user.delete() 
    })
    .catch(console.error)
 }
});





client.on('message', function(message) {
	const myID = "444126346676011028";
    let args = message.content.split(" ").slice(1).join(" ");
    if(message.content.startsWith(prefix + "setname")) {
		        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setUsername(args);
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "setgamest")) {
		        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setGame(args , 'https://www.twitch.tv/dggamingbot');
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "setgamepl")) {
				        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setGame(args);
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "setgamelt")) {
				        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setActivity(args, {type:'7MD KING DISCORD'});
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "setgamewt")) {
				        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setActivity(args, {type:'WATCHING'});
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "setavatar")) {
				        if(message.author.id !== myID) return;
        client.user.setAvatar(args);
        message.channel.send(':white_check_mark: Done!').then(msg => {
                if(!args) return message.reply('اكتب الحالة اللي تريدها.');
           msg.delete(5000);
          message.delete(5000);
        });
    }
});





client.on('message', message => {
if (message.content.startsWith(prefix + 'ماين كرافت')) { 
    if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));

const type = require('./minecraft/minecraft.json'); 
const item = type[Math.floor(Math.random() * type.length)]; 
const filter = response => { 
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**لديك 15 ثانيه**').then(msg => {
    let embed = new Discord.RichEmbed()
    .setColor('#000000')
    .setFooter("ماينكرفت  | DgPro", 'https://cdn.discordapp.com/avatars/439427357175185408/3eb163b7656922ebc9e90653d50231f1.png?size=2048')
    .setDescription(`** ${item.type}**`)

    msg.channel.sendEmbed(embed).then(() => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
        .then((collected) => {
        message.channel.send(`${collected.first().author} ✅ **الاجابه صحيحه**`);

        console.log(`[Typing] ${collected.first().author} typed the word.`);
            let won = collected.first().author; 
            points[won.id].points++;
          })
          .catch(collected => { 
            message.channel.send(`:x: **لا يوجد احد كتب الاجابه الصحيحه**`);
            console.log(`[Typing] ماحد قال الاجابه `);
          })
        })
    })
}
});


client.on('message', message => {
if (message.content.startsWith(prefix + 'فكك')) { 
    if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));

const type = require('./fakk/fakk.json'); 
const item = type[Math.floor(Math.random() * type.length)]; 
const answer = item.answer 
const filter = response => { 
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**لديك 15 ثانيه لتفكك الكلمه **').then(msg => {
    let embed = new Discord.RichEmbed()
    .setColor('#000000')
    .setFooter("فكك  | DgPro", 'https://cdn.discordapp.com/avatars/439427357175185408/3eb163b7656922ebc9e90653d50231f1.png?size=2048')
    .setDescription(`**قم بكتابه الكلمه مفككه : ${item.type}**`)

    msg.channel.sendEmbed(embed).then(() => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
        .then((collected) => {
        message.channel.send(`${collected.first().author} ✅ **الاجابه صحيحه**`); 

        console.log(`[Typing] ${collected.first().author} typed the word.`);
            let won = collected.first().author; 
            points[won.id].points++;
          })
          .catch(collected => { 
            message.channel.send(`:x: **ماحد قال الاجابه الصحيحه**`);
            console.log(`[Typing] ماحد فكك الكلمه `);
          })
        })
    })
}
});








client.on('message', message => {

     if (message.author.bot) return;
    if (!message.channel.guild) return;
    if (message.content.startsWith(prefix + 'mb')) {
        if (!message.channel.guild) return;
        let embed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setThumbnail(message.author.avatarURL)
            .setFooter(message.author.username, message.author.avatarURL)

        .setDescription(`**:battery: حالة اعضاء السيرفر**
    
**:green_heart: Online**  **[ ${message.guild.members.filter(m=>m.presence.status == 'online').size} ]**
**:yellow_heart: Idle**       **[ ${message.guild.members.filter(m=>m.presence.status == 'idle').size} ]**  
**:heart: DND**     **[ ${message.guild.members.filter(m=>m.presence.status == 'dnd').size} ]**
**:black_heart: Offline** **[ ${message.guild.members.filter(m=>m.presence.status == 'offline').size} ]** `)

        message.channel.send()

        message.channel.sendEmbed(embed)
    }
}); / / / / // / / / 






	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	









    client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='+member')
      var IzRo = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL)
      .setTitle(':tulip:| Members info')
      .addBlankField(true)
      .addField('عدد اعضاء السيرفر',`${message.guild.memberCount}`)
      message.channel.send(IzRo);

    });





client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`:rose:  ولكم نورت السيرفر:rose: 
:crown:اسم العضو  ${member}:crown:  
انت العضو رقم ${member.guild.memberCount}  `) 
}).catch(console.error)
});


const child_process = require("child_process");
const adminprefix = "+";
const devs = ['444126346676011028'];

client.on('message', message => {
if(message.content === adminprefix + "restart") {
      if (!devs.includes(message.author.id)) return;
          message.channel.send(`⚠️ **الشخص الذي اعاد تشغيل البوت ${message.author.username}**`);
        console.log(`⚠️ جاري اعادة تشغيل البوت... ⚠️`);
        client.destroy();
        child_process.fork(__dirname + "bot.js");
        console.log(`تم اعادة تشغيل البوت`);
    }
  
  }); 




   
 client.on('guildCreate', guild => {
         const embed = new Discord.RichEmbed()
     .setColor("RED")
     .setTitle('Click Here To Add Bot .!')
     .setURL('https://discordapp.com/oauth2/authorize/?permissions=268443710&scope=bot&client_id=460106813711319050 ')
  .setDescription(`**
  New Server Add DgPro ✅
اسم السيرفر: ${guild.name}
صاحب السيرفر: ${guild.owner}**`);
client.channels.get("464035064511201289").sendEmbed(embed)
});

client.on('guildDelete', guild => {
         const embed = new Discord.RichEmbed()
     .setColor("GOLD")
     .setTitle('Click Here To Add Bot .!')
     .setURL(' https://discordapp.com/oauth2/authorize/?permissions=268443710&scope=bot&client_id=460106813711319050 ')
  .setDescription(`**
  Server Kicked DgPro :cry:
اسم السيرفر: ${guild.name}
صاحب السيرفر: ${guild.owner}**`);
client.channels.get("464035064511201289").sendEmbed(embed)
});
 



client.on('message', message => {
    if (message.content === "+server") {
        if (!message.channel.guild) return
        var verificationLevel = message.guild.verificationLevel;
        const verificationLevels = ['None','Low','Meduim','High','Extreme'];
        var Y1 = message.guild.createdAt.getFullYear() - 2000
        var M2 = message.guild.createdAt.getMonth()
        var D3 = message.guild.createdAt.getDate()
        const xNiTRoZ = new Discord.RichEmbed()
         .setAuthor(message.author.username , message.author.avatarURL)
         .setColor('RANDOM')
         .setTimestamp()
         .setTitle(message.guild.name,message.guild.iconURL)
         .addField(':id: اي دي السيرفر',`${message.guild.id}`,true)
         .addField(':date: أنشئت في',D3 + '.' + M2 + '.' + Y1,true)             
         .addField(':crown: اونر السيرفر',`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)             
         .addField(':busts_in_silhouette: الاعضاء ' + ` ${message.guild.memberCount} `,'Online '+`[ ${message.guild.members.filter(m=>m.presence.status == 'online','idle','dnd').size} ]`+ ','+'Offline '+`[ ${message.guild.members.filter(m=>m.presence.status == 'offline').size} ]`,true)
         .addField(':speech_balloon: قنوات' +' '+message.guild.channels.size+' ',`Text [ ${message.guild.channels.filter(m => m.type === 'text').size} ]`+', '+`Voice [ ${message.guild.channels.filter(m => m.type === 'voice').size} ]`,true)
         .addField(':earth_asia: الدوله',message.guild.region)
         .addField(':ribbon: ايموجي السيرفر',`${message.guild.emojis.size}`,true)
         .addField(':construction: مستوى التحقق',`${verificationLevels[message.guild.verificationLevel]}`,true)
         .addField(':closed_lock_with_key: الرتب  '+message.guild.roles.size+' ','<@444126346676011028>')
         message.channel.send({embed:xNiTRoZ});
     }
    });

client.on('message', message => {

    if (message.content.startsWith("رابط")) {        
  message.channel.createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 86400
    }).then(invite =>  
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription("**| :white_check_mark:  | :heart:  تم ��رسال الرابط على الخاص**  ")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
                .setAuthor(message.guild.name, message.guild.iconURL)
        .setDescription(`
**
---------------------
-[${message.guild.name}]  هذا هو رابط سيرفر
---------------------
 :kissing_closed_eyes:  -هذا الرابط صالح ل 100 مستخدم فقط
---------------------
 :smiley: -هذا الرابط صالح لمده 24 ساعه فقط
---------------------
**`)
      message.author.sendEmbed(Embed11)
    }
 
});

client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "inv") {
		 message.channel.send('**تم ارسال رابط البوت في الخاص**');
            
	
		 


 message.author.sendMessage(`
 **
رابط البوت
https://discordapp.com/oauth2/authorize/?permissions=268443710&scope=bot&client_id=460106813711319050
معلومات عن البوت :thinking:
صيانة دورية :stopwatch: :wrench: 
24 ساعة :point_up:
اضافات يومية :link: 
الدعم الفني للمساعدةة : https://discord.gg/4kgMsfk
**
`)
    }
});






client.on('message', message => {
var prefix = "+"
    if (message.content.startsWith(prefix + 'clear')) {
      if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(`ليس لديك برمشن[*MANAGE_MESSAGES*] `).catch(console.error);
  message.delete()
  if(!message.channel.guild) return;
  let args = message.content.split(" ").slice(1);
  
  const messagecount = parseInt(args.join(' '));
  
  message.channel.fetchMessages({
  
  limit: messagecount
  
  }).then(messages => message.channel.bulkDelete(messages));
  message.channel.sendMessage("", {embed: {
    title: "`` ✅ تــم مسح الشات ``",
    color: 0x06DF00,
    footer: {
    
    }
    }}).then(msg => {msg.delete(3000)});
  };
  
  });

 
 
client.on('message', message => {
    if (message.content.startsWith("+avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});


   const sql = require("sqlite");
client.on("message", async message => {
    if (message.content.startsWith(prefix + "انجاز")) {
         var ids = [
            "20",
            "1",
            "13",
            "18",
            "17",
            "9",
            "31",
            "22",
            "23",
            "2",
            "11",
            "19",
            "24",
            "25",
            "12",
            "33"
            ]
            const randomizer = Math.floor(Math.random()*ids.length);
            const args = message.content.split(" ").slice(1).join(" ")
    if (!args) return message.channel.send("**اكتب وش تبي يكون بلانجاز**");
    const image = new Discord.Attachment(`https://www.minecraftskinstealer.com/achievement/a.php?i=${ids[randomizer]}&h=Achievement Get!&t=${args}`, "achievement.png");
message.channel.send(image)
	}
});











    client.on('message', message => {
   if(message.content.startsWith(prefix + 'support')) {
            if(!message.channel.guild) return;
        let embed = new Discord.RichEmbed()
        .setAuthor(` ${message.author.username} `, message.author.avatarURL)      
        .setTitle(`:small_orange_diamond:Click Here `)
        .setURL(`https://discord.gg/4kgMsfk`)
        .setThumbnail("https://images-ext-2.discordapp.net/external/dgcnt05ZbaN52KTCKjEYt5MtV7JqJz2Yxn8GCPFeOjw/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/410835593451405312/c7735abad2cab67cf68bd854685914ca.png?width=80&height=80")
        .addField(':small_blue_diamond:By', "<@" + message.author.id + ">")        
     message.channel.sendEmbed(embed);
       }
     
   });

client.on('message' , message => {
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "ping")) {
 message.channel.send('pong').then((msg) => {
var PinG = `${Date.now() - msg.createdTimestamp}`
var ApL = `${Math.round(client.ping)}`
      msg.edit(`\`\`\`javascript\nTime taken: ${PinG} ms.\nDiscord API: ${ApL} ms.\`\`\``);
 })
  }  
 });





	
	client.on("message", message => {
    var args = message.content.split(' ').slice(1); 
    var msg = message.content.toLowerCase();
    if( !message.guild ) return;
    if( !msg.startsWith( prefix + 'role' ) ) return;
    if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(' **_ليس لديك صلاحيات_**');
    if( msg.toLowerCase().startsWith( prefix + 'roleremove' ) ){
        if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد سحب منه الرتبة**' );
        if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );
        var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
        var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
        if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );if( message.mentions.members.first() ){
            message.mentions.members.first().removeRole( role1 );
            return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم سحب من **');
        }
        if( args[0].toLowerCase() == "all" ){
            message.guild.members.forEach(m=>m.removeRole( role1 ))
            return    message.reply('**:white_check_mark: [ '+role1.name+' ] تم ��حب من الكل رتبة**');
        } else if( args[0].toLowerCase() == "bots" ){
            message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
            return    message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البوت رتبة**');
        } else if( args[0].toLowerCase() == "humans" ){
            message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
            return    message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البشريين رتبة**');
        }     
    } else {
        if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد اعطائها الرتبة**' );
        if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );
        var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
        var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
        if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );if( message.mentions.members.first() ){
            message.mentions.members.first().addRole( role1 );
            return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم اعطاء **');
        }
        if( args[0].toLowerCase() == "all" ){
            message.guild.members.forEach(m=>m.addRole( role1 ))
            return    message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الكل رتبة**');
        } else if( args[0].toLowerCase() == "bots" ){
            message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
            return    message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البوتات رتبة**');
        } else if( args[0].toLowerCase() == "humans" ){
            message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
            return    message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البشريين رتبة**');
        } 
    } 
});//////
	
	
	client.on("message", message => {

  if (!message.channel.guild) return;
    if (message.author.bot) return;
    let command = message.content.split(" ")[0];
    if (message.content.startsWith(prefix + 'mute')) {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
        let user = message.mentions.users.first();
        let modlog = client.channels.find('name', 'mute-log');
        let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
        if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").catch(console.error);
        if (message.mentions.users.size < 1) return message.reply('** يجب عليك منشنت شخص اولاً**').catch(console.error);

        const embed = new Discord.RichEmbed()
            .setColor(0x00AE86)
            .setTimestamp()
            .addField('الأستعمال:', 'اسكت/احكي')
            .addField('تم ميوت:', `${user.username}#${user.discriminator} (${user.id})`)
            .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)

        if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);

        if (message.guild.member(user).roles.has(muteRole.id)) {
            return message.reply("**:white_check_mark: .. تم اعطاء العضو ميوت**").catch(console.error);
        } else {
            message.guild.member(user).addRole(muteRole).then(() => {
                return message.reply("**:white_check_mark: .. تم اعطاء العضو ميوت كتابي**").catch(console.error);
            });
        }

    };

});
client.on("message", message => {

    if (message.author.bot) return;

    let command = message.content.split(" ")[0];

    if (message.content.startsWith(prefix + 'unmute')) {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
        let user = message.mentions.users.first();
        let modlog = client.channels.find('name', 'mute-log');
        let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
        if (!muteRole) return message.reply("** لا يوجد لديك رتبه الميوت 'Muted' **").catch(console.error);
        if (message.mentions.users.size < 1) return message.reply('** يجب عليك منشنت شخص اولاً**').catch(console.error);
        const embed = new Discord.RichEmbed()
            .setColor(0x00AE86)
            .setTimestamp()
            .addField('الأستعمال:', 'اسكت/احكي')
            .addField('تم فك الميوت عن:', `${user.username}#${user.discriminator} (${user.id})`)
            .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)

        if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);

        if (message.guild.member(user).removeRole(muteRole.id)) {
            return message.reply("**:white_check_mark: .. تم فك الميوت عن الشخص **").catch(console.error);
        } else {
            message.guild.member(user).removeRole(muteRole).then(() => {
                return message.reply("**:white_check_mark: .. تم فك الميوت عن الشخص **").catch(console.error);
            });
        }

    };
});
	




client.on('message', message => {

    if (message.content.startsWith(prefix + "mct")) {
                        if(!message.channel.guild) return message.reply(' هذا الامر فقط في السيرفرات');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("**تم تقفيل الروم**")
           });
             }
//MohamedTarek#0849
    if (message.content.startsWith(prefix + "unmct")) {
    if(!message.channel.guild) return message.reply(' هذا الامر فقط في السيرفرات');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("**تم فتح الروم**")
           });
             }



});

var moment = require("moment");
client.on('message', message => {
  var prefix = '+';
  
  if (message.content.startsWith(prefix + "user")) {
  if(!message.channel.guild) return message.reply(`هذا الأمر فقط ل السيرفرات ❌`);
   message.guild.fetchInvites().then(invs => {
      let member = client.guilds.get(message.guild.id).members.get(message.author.id);
      let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      var moment = require('moment');
      var args = message.content.split(" ").slice(1);
let user = message.mentions.users.first();
var men = message.mentions.users.first();
 var heg;
 if(men) {
     heg = men
 } else {
     heg = message.author
 }
var mentionned = message.mentions.members.first();
  var h;
 if(mentionned) {
     h = mentionned
 } else {
     h = message.member
 }
moment.locale('ar-TN');
      var id = new  Discord.RichEmbed()
    .setColor("!0a0909")
    .setAuthor(message.author.username, message.author.avatarURL) 
.addField('تاريخ صنع الحساب:', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true) 
.addField('وقت دخولك السيرفر:', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``, true)
.setFooter("DgPro")  
    message.channel.sendEmbed(id);
})
}       
});



   client.on("message", message => {    
    if(!message.channel.guild) return;
if(message.author.bot) return;
if(message.content === "+ser-av"){ 
    const embed = new Discord.RichEmbed()

.setTitle(`صورة ** ${message.guild.name} **`)
.setAuthor(message.author.username, message.guild.iconrURL)
.setColor('RANDOM')
.setImage(message.guild.iconURL)

message.channel.send({embed});
}
});



	
client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});









const bannedwords = [
    "خرا",
    "ابن كلب",
    "كس امك",
    "يلعن ابوك",
    "كل زق"

  ];

client.on('message',  message => {
  if(bannedwords.some(word => message.content.includes(word))) {
    message.delete()
    message.reply(" احترم نفسك , يمنع الشتم في خادمنا او سوف تتعرض الي  ميوت ").then(msg => {msg.delete(5000)});;
  };
});





    client.on('message', message => {
		var prefix = "+"
  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**انت لا تملك الصلاحيات المطلوبه**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**ليس لدي صلاحية الحظر**");
  let user = message.mentions.users.first();
  
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**يجب ان تكون رتبة البوت اعلي من رتبه الشخص المراد تبنيدة**");


  message.guild.member(user).ban(7, user);

message.channel.send(`**:white_check_mark: ${user.tag} banned from the server ! :airplane: **  `)

}
});



  
client.on("message",function(message) {
	var prefix = "+"
    if(message.content.startsWith(prefix + 'uptime')) {
        let uptime = client.uptime;

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let notCompleted = true;

    while (notCompleted) {

        if (uptime >= 8.64e+7) {

            days++;
            uptime -= 8.64e+7;

        } else if (uptime >= 3.6e+6) {

            hours++;
            uptime -= 3.6e+6;

        } else if (uptime >= 60000) {

            minutes++;
            uptime -= 60000;

        } else if (uptime >= 1000) {
            seconds++;
            uptime -= 1000;

        }

        if (uptime < 1000)  notCompleted = false;

    }
    
let v1 = new Discord.RichEmbed()
  v1.setTimestamp(new Date())
  v1.setColor("RED")
  v1.setDescription('***__ Collecting Data __***')
  v1.setFooter("#DgPro") 
let norelden = new Discord.RichEmbed()
.setColor('#9b59b6')
.setTimestamp(new Date())
.setThumbnail(client.user.avatarURL)
.addField("UpTime :",`**[** **Days:** \`${days}\` **Hours:** \`${hours}\` **Minutes:** \`${minutes}\` **Seconds:** \`${seconds}\` **]**`,true)
.setFooter("DgPro");
  message.channel.send({embed:v1}).then(m => m.edit({embed:norelden}),5000);
}
});


 

client.on('message', message => {
var prefix = "+"
        if(message.content.startsWith(prefix + 'hypixel')) {
            let args = message.content.split(' ').slice(1).join(' ');
            if (!args) return message.channel.send("**رجأء ضع اسمك في ماين كرافت. ❌**");
            var link = (`https://hypixel.net/player/${args}`);
            message.channel.send(link);
        }
    });


  




    



  client.on("message", function(message) {
 if(message.author.bot) return;
 if(message.channel.type === "dm") return;
let messageArray = message.content.split(" ");
let command = messageArray[0];
let args = message.content.split(" ").slice(2);
let toSend = message.mentions.users.first();
        
         var currentTime = new Date(),
          hours = currentTime.getHours() ,
          minutes = currentTime.getMinutes(),
          Year = currentTime.getFullYear() - 2000,
          Month = currentTime.getMonth() + 1,
          Day = currentTime.getDate();
          var suffix = 'AM';
          if (hours >= 12) {
             suffix = 'PM';
              hours = hours - 12;
         }
          if (hours == 0) {
              hours = 12;
          }
let xFive = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setThumbnail(message.author.avatarURL)
    .setFooter("SenioR TeaM. || "+"- "+Month+"."+Year+"."+Day+" -"+hours+":"+minutes+" "+suffix)
    .addField("Message","**"+args+"**")
if(command === `${prefix}message`) {
    if(toSend.bot) return message.reply("**# You cannot send a message to a bot!** :sparkler:");
    if(args < 1) return message.reply("**# Please , Specify a valid arguments!** :sparkler:");
    toSend.send({embed:xFive});
    message.reply("** :white_check_mark: , Sent a Message to **<@"+toSend.id+">")
 }
});
  










client.on('message', message => {
    var prefix = "+"
    if (message.content === prefix + "date") {
        var currentTime = new Date(),
            السنة = currentTime.getFullYear(),
            الشهر = currentTime.getMonth() + 1,
            اليوم = currentTime.getDate();
        message.channel.sendMessage( "التاريخ : " + اليوم + "-" + الشهر + "-" +السنة)
    }
});





client.on('message', message => {
	if(message.channel.type === "dm") return;
      if(message.content.startsWith ("+زواج")) {
      if(!message.channel.guild) return message.reply('** This command only for servers **')
      var proposed = message.mentions.members.first()
     
      if(!message.mentions.members.first()) return message.reply('لازم تطلب ايد وحدة').catch(console.error);
      if(message.mentions.users.size > 1) return message.reply('ولد ما يصحلك الا حرمة وحدة كل مرة').catch(console.error);
       if(proposed === message.author) return message.reply(`**خنثى ؟ **`);
        if(proposed === client.user) return message.reply(`** تبي تتزوجني؟ **`);
              message.channel.send(`**${proposed} 
 بدك تقبلي عرض الزواج من ${message.author}
 العرض لمدة 10 ثانية 
 اكتب موافقة او لا** `)

const filter = m => m.content.startsWith("موافقة");
message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{ 
    message.channel.send(`**${message.author} و ${proposed} الف الف مبروك الله يرزقكم الذرية الصالحة**`);
})
   .catch(collected => message.channel.send(`**السكوت علامة الرضا نقول مبروك ؟**`))
   
   const filte = m => m.content.startsWith("لا");
message.channel.awaitMessages(filte, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{ 
   message.channel.send(`**${message.author} تم رفض عرضك**`);
})
        
  
             
    
  }
});


client.on('message', message => {
	if(message.channel.type === "dm") return;
            if (message.content.startsWith("قوانين")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     :one: ' ,' **ممنوع السب** ')
.addField('     :two:  ' ,' **لا تسوي سبام ** ')
.addField('     :three: ' ,' **لا تزعج الاخرين** ')
.addField('    :four:' ,' **ممنوع الاعلانات** ')
.addField('    :five:' ,' **احترم الاخرين** ')
.addField('    :six: ' ,' **لا تنشر في الشات او بل خاص** ')
.addField('    :seven:' ,' **لا تنشر روابط!** ')
.addField('    :eight:' ,' **لا تسوي سبام ايموجي** ')
.addField('    :nine: ' ,' **لا تطلب رتبه الاداره !** ')
.setColor('RANDOM')
  message.channel.sendEmbed(embed);
    }
});


  




client.on('message' , async (message) => {
       if(message.content.startsWith(`<@${client.user.id}>`)) {
              
 let responses = [
        'احد ناداني؟',
        'سوي +help',
        'لا تزعجني',
        'ايش تبي ',
        'هلا',
        'كيفك',
        'سم؟',
        'تمنشن بوت ياغبي؟'
    ]
    
    let fetched = responses[Math.floor(Math.random() * responses.length)];
   message.reply(fetched)
       }
  
});












client.on('message', message => {
            if (message.content.startsWith(prefix + "bot")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField(' السيرفرات🌐',`『${client.guilds.size}』  `)
.addField(' الاعضاء👥 ',` 『${client.users.size}』 `)
.addField('الرومات📚 ',`『${client.channels.size}』`) 
.addField(' البنق:rocket: ',`『${Date.now() - message.createdTimestamp}』`) 
.addField('مصمم  + صاحب البوت ',`<@444126346676011028>`)
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
            if (message.content.startsWith(prefix + "rooms")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('الرومات📚 ',`[${client.channels.size}]`) 
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
    }
}); //By


const Za7f = [
   "**صورة وجهك او رجلك او خشمك او يدك**.",
   "**اصدر اي صوت يطلبه منك الاعبين**.",
   "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
   "**روح الى اي قروب عندك في الواتس اب و اكتب اي شيء يطلبه منك الاعبين  الحد الاقصى 3 رسائل**.",
   "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
   "**سمعنا صوتك و غن اي اغنية من اختيار الاعبين الي معك**.",
   "**ذي المرة لك لا تعيدها**.",
   "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
   "**صور اي شيء يطلبه منك الاعبين**.",
   "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
   "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
   "**سو مشهد تمثيلي عن مصرية بتولد**.",
   "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
   "**ذي المرة لك لا تعيدها**.",
   "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
   "**روح عند اي احد بالخاص و قول له انك تحبه و الخ**.",
   "**اكتب في الشات اي شيء يطلبه منك الاعبين في الخاص**.",
   "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
   "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
   "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
   "**غير اسمك الى اسم من اختيار الاعبين الي معك**.",
   "**اتصل على امك و قول لها انك تحبها :heart:**.",
   "**لا يوجد سؤال لك سامحتك :slight_smile:**.",
   "**قل لواحد ماتعرفه عطني كف**.",
   "**منشن الجميع وقل انا اكرهكم**.",
   "**اتصل لاخوك و قول له انك سويت حادث و الخ....**.",
   "**روح المطبخ و اكسر صحن او كوب**.",
   "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
   "**قول لاي بنت موجود في الروم كلمة حلوه**.",
   "**تكلم باللغة الانجليزية الين يجي دورك مرة ثانية لازم تتكلم اذا ما تكلمت تنفذ عقاب ثاني**.",
   "**لا تتكلم ولا كلمة الين يجي دورك مرة ثانية و اذا تكلمت يجيك باند لمدة يوم كامل من السيرفر**.",
   "**قول قصيدة **.",
   "**تكلم باللهجة السودانية الين يجي دورك مرة ثانية**.",
   "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
   "**اول واحد تشوفه عطه كف**.",
   "**سو مشهد تمثيلي عن اي شيء يطلبه منك الاعبين**.",
   "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
   "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
   "**روح اكل ملح + ليمون اذا مافيه اكل اي شيء من اختيار الي معك**.",
   "**تاخذ عقابين**.",
   "**قول اسم امك افتخر بأسم امك**.",
   "**ارمي اي شيء قدامك على اي احد موجود او على نفسك**.",
   "**اذا انت ولد اكسر اغلى او احسن عطور عندك اذا انتي بنت اكسري الروج حقك او الميك اب حقك**.",
   "**اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه**.",
   "**تتصل على الوالده  و تقول لها خطفت شخص**.",
   "** تتصل على الوالده  و تقول لها تزوجت با سر**.",
   "**تصل على الوالده  و تقول لها  احب وحده**.",
     "**تتصل على شرطي تقول له عندكم مطافي**.",
     "**خلاص سامحتك**.",
     "** تصيح في الشارع انا  مجنوون**.",
     "** تروح عند شخص تقول له احبك**.",
 
]

client.on('message', message => {
if (message.content.startsWith(prefix + 'عقاب')) {
    if(!message.channel.guild) return message.reply('** This command only for servers**');
 var embed = new Discord.RichEmbed()
 .setColor('RANDOM')
  .setThumbnail(message.author.avatarURL) 
.addField('لعبة عقاب .. DgPro-Gaming . <@444126346676011028> .' ,
 `${Za7f[Math.floor(Math.random() * Za7f.length)]}`)
 message.channel.sendEmbed(embed);
 console.log('Game: عقاب , Send By: ' + message.author.username)
   }
    
});

var rebel = ["https://f.top4top.net/p_682it2tg6.png","https://e.top4top.net/p_682a1cus5.png","https://d.top4top.net/p_682pycol4.png","https://c.top4top.net/p_682vqehy3.png","https://b.top4top.net/p_682mlf9d2.png","https://a.top4top.net/p_6827dule1.png","https://b.top4top.net/p_682g1meb10.png","https://a.top4top.net/p_682jgp4v9.png","https://f.top4top.net/p_682d4joq8.png","https://e.top4top.net/p_6828o0e47.png","https://d.top4top.net/p_6824x7sy6.png","https://c.top4top.net/p_682gzo2l5.png","https://b.top4top.net/p_68295qg04.png","https://a.top4top.net/p_682zrz6h3.png","https://f.top4top.net/p_6828vkzc2.png","https://e.top4top.net/p_682i8tb11.png"]
   client.on('message', message => {

       var args = message.content.split(" ").slice(1);
   if(message.content.startsWith(prefix + 'لو خيروك')) {
        var cat = new Discord.RichEmbed()
.setImage(rebel[Math.floor(Math.random() * rebel.length)])
message.channel.sendEmbed(cat);
   }
});


const secreT = [
 "**الحياة بكل ما فيها تقف دائمًا على حد الوسطية بين اتزان المعنى وضده من حب وكره وحق وباطل وعدل وظلم**.",
 "**كى تعيش عليك ان تتقن فن التجاهل باحتراف**.",
 "**لا تحزن على من اشعرك بان طيبتك غباء امام وقاحته**.",
 "**هناك من يحلم بالنجاح وهناك من يستيقظ باكرا لتحقيقه**.",
 "**ان تعالج ألمك بنفسك تلك هى القوة**.", 
 "**الجميع يسمع ما تقول والاصدقاء ينصتون لما تقول وافضل الاصدقاء ينصتون لما اخفاه سكوتك**.", 
 "**انتهى زمن الفروسية ، لم تنقرض الخيول بل انقرض الفرسان**.", 
 "**ان تكون اخرسا عاقلا خير من ان تكون نطوقا جهولا**.", 
 "**المناقشات العقيمة لا تنجب افكارا**.", 
 "**نحن نكتب ما لا نستطيع ان نقول وما نريد ان يكون**.", 
 "**نحن نكتب ما لا نستطيع ان نقول وما نريد ان يكون**.", 
]

client.on('message', message => {

   if(message.content.startsWith(prefix + 'خواطر')) {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
 var embed = new Discord.RichEmbed()
 .setColor('RANDOM')

  .setThumbnail(message.author.avatarURL) 
.addField('لعبه خواطر ..DgPro-Gaming .<@444126346676011028>.' ,
 `${secreT[Math.floor(Math.random() * secreT.length)]}`)
 message.channel.sendEmbed(embed);
 console.log('Game: خواطر , Send By: ' + message.author.username)
   }
    
});

const Love = [  "**احبك / عدد قطرات المـــطر والشجر وامواج البحر والنجوم الي تتزاحم مبهورة في جمال القمر**.",  "**ساعزفك وساجعلك لحنا تغني عليه جميع قصائد العشــق**.",  "**احبك موت... لاتسألني ما الدليل ارأيت رصاصه تسأل القتيل؟**.",  "**ربما يبيع الانسان شيئا قد شراه لاكن لا يبيع قلبا قد هواه**.",  "**و ما عجبي موت المحبين في الهوى ........... و لكن بقاء العاشقين عجيب**.",   "**حلفت / لاحشـــد جيوش الحب واحتلك مسكين ربي بلاك بعـــاشق ارهـــابي**.",   "**العيــن تعشق صورتك ... والقلب يجري فيه دمك وكل مااسمع صوتك ...شفايفي تقول احبك**.",   "**ياحظ المكان فيك..ياحظ من هم حواليك ...ياحظ الناس تشوفك ... وانا مشتاق اليك**.",   "**لو كنت د��عة داخل عيوني بغمض عليك وصدقي ما راح افتح...ولو كان الثمن عيون��**.",   "**سهل اموت عشانك لكن الصعب اعيش بدونك سهل احبك لكن صعب انساك**.",   "**أخشى ان انظر لعيناك وأنا فى شوق ولهيب لرؤياك**.",   "**أتمنى ان اكون دمعة تولد بعينيك واعيش على خديك واموت عند شفتيك**.",   "**أحياناً أرى الحياة لا تساوى إبتسامة لكن دائماً إبتسامتك هى كيانى**.",   "**من السهل أن ينسى الانسان نفسه .. لكن من الصعب ان ينسى نفساً سكنت نفسه !**.",   "**نفسى أكون نجمة سماك .. هم��ة شفاك .. شمعة مساك .. بس تبقى معايا وانا معاك**.",   "**أهنئ قلبى بحبك وصبر عينى فى بعدك وأقول إنك نور عينى يجعل روحى فدى قلبك**.", ]

client.on('message', message => {
   if(message.content.startsWith(prefix + 'حب')) {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
 var embed = new Discord.RichEmbed()
 .setColor('RANDOM')
  .setThumbnail(message.author.avatarURL) 
.addField('لعبة حب ..DgPro-Gaming .<@444126346676011028>.' ,
 `${Love[Math.floor(Math.random() * Love.length)]}`)
 message.channel.sendEmbed(embed);
 console.log('Game: حب , Send By: ' + message.author.username)
   }
   
});









client.on('message', message => {
              if(!message.channel.guild) return;
    if(message.content.startsWith('+bc')) {
    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
    let copy = "DgPro-BC";
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
    message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
    msg.delete();
    })
    })
    }
    })
	
	

const Sra7a = [
    'صراحه  |  صوتك حلوة؟',
    'صراحه  |  التقيت الناس مع وجوهين؟',
    'صراحه  |  شيء وكنت تحقق اللسان؟',
    'صراحه  |  أنا شخص ضعيف عندما؟',
    'صراحه  |  هل ترغب في إظهار بك ومرفق لشخص أو رؤية هذا الضعف؟',
    'صراحه  |  يدل على أن الكذب مرات تكون ضررية شي؟',
    'صراحه  |  أشعر بالوحدة على الرغم من أنني تحيط بك كثيرا؟',
    'صراحه  |  كيفية الكشف عن من يكمن عليك؟',
    'صراحه  |  إذا حاول شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟',
    'صراحه  |  أشجع شيء حلو في حياتك؟',
    'صراحه  |  طريقة جيدة يقنع حتى لو كانت الفكرة خاطئة" توافق؟',
    'صراحه  |  كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟',
    'صراحه  |  التغيير العادي عندما يكون الشخص الذي يحبه؟',
    'صراحه  |  المواقف الصعبة تضعف لك ولا ترفع؟',
    'صراحه  |  نظرة و يفسد الصداقة؟',
    'صراحه  |  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟',
    'صراحه  |  شخص معك بالحلوه والمُره؟',
    'صراحه  |  ‏هل تحب إظهار حبك وتعلقك بالشخص أم ترى ذلك ضعف؟',
    'صراحه  |  تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟',
    'صراحه  |  وش تتمنى الناس تعرف عليك؟',
    'صراحه  |  ابيع المجرة عشان؟',
    'صراحه  |  أحيانا احس ان الناس ، كمل؟',
    'صراحه  |  مع مين ودك تنام اليوم؟',
    'صراحه  |  صدفة العمر الحلوة هي اني؟',
    'صراحه  |  الكُره العظيم دايم يجي بعد حُب قوي " تتفق؟',
    'صراحه  |  صفة تحبها في نفسك؟',
    'صراحه  |  ‏الفقر فقر العقول ليس الجيوب " ، تتفق؟',
    'صراحه  |  تصلي صلواتك الخمس كلها؟',
    'صراحه  |  ‏تجامل أحد على راحتك؟',
    'صراحه  |  اشجع شيء سويتة بحياتك؟',
    'صراحه  |  وش ناوي تسوي اليوم؟',
    'صراحه  |  وش شعورك لما تشوف المطر؟',
    'صراحه  |  غيرتك هاديه ولا تسوي مشاكل؟',
    'صراحه  |  ما اكثر شي ندمن عليه؟',
    'صراحه  |  اي الدول تتمنى ان تزورها؟',
    'صراحه  |  متى اخر مره بكيت؟',
    'صراحه  |  تقيم حظك ؟ من عشره؟',
    'صراحه  |  هل تعتقد ان حظك سيئ؟',
    'صراحه  |  شـخــص تتمنــي الإنتقــام منـــه؟',
    'صراحه  |  كلمة تود سماعها كل يوم؟',
    'صراحه  |  **هل تُتقن عملك أم تشعر بالممل؟',
    'صراحه  |  هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟',
    'صراحه  |  تى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟',
    'صراحه  |  ما هو اسوأ خبر سمعته بحياتك؟',
    '‏صراحه | هل جرحت شخص تحبه من قبل ؟',
    'صراحه  |  ما هي العادة التي تُحب أن تبتعد عنها؟',
    '‏صراحه | هل تحب عائلتك ام تكرههم؟',
    '‏صرا��ه  |  من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟',
    '‏صراحه  |  هل خجلت من نفسك من قبل؟',
    '‏صراحه  |  ما هو ا الحلم  الذي لم تستطيع ان تحققه؟',
    '‏صراحه  |  ما هو الشخص الذي تحلم به كل ليلة؟',
    '‏صراحه  |  هل تعرضت إلى موقف مُحرج جعلك تكره صاحبهُ؟',
     '‏صراحه  |  هل قمت بالبكاء أمام من تُحب؟',
    '‏صراحه  |  ماذا تختار حبيبك أم صديقك؟',
    '‏صراحه  | هل حياتك سعيدة أم حزينة؟',
    'صراحه  |  ما هي أجمل سنة عشتها بحياتك؟',
    '‏صراحه  |  ما هو عمرك الحقيقي؟',
    'صراحه  |  ما اكثر شي ندمن عليه؟',
    'صراحه  |  ما هي أمنياتك المُستقبلية؟‏',
]
  client.on('message', message => {
if (message.content.startsWith(prefix + 'صراحة')) {
    if(!message.channel.guild) return message.reply('** This command only for servers **');
 var client= new Discord.RichEmbed()
 .setTitle("لعبة صراحة ..DgPro-Gaming .<@444126346676011028>.")
 .setColor('RANDOM')
 .setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
 .setImage("https://cdn.discordapp.com/attachments/371269161470525444/384103927060234242/125.png")
                 .setTimestamp()

  message.channel.sendEmbed(client);
  message.react("??")
}
});



client.on('message', message => {
     if(message.content.startsWith(prefix + "هكر")) {
 let args = message.content.split(" ").slice(1);

    var user = message.mentions.users.first();
    var reason = args.slice(1).join(' ');
    const embed = new Discord.RichEmbed()
        .setColor(0xFFB200)
        .setTimestamp();

    if (!user) {
        embed.addField("Hacker", `تبي تهكر من؟`)
            .setFooter(`DgPro`);
        return message.channel.send({embed});
    } if (!reason) {
        embed.addField("Hacker", `اكتب سبب تهكيره`)
        return message.channel.send({embed});
    } 
    embed.addField("Hacker", `تم بنجاح ${user.tag}!`)
        .setFooter(`DgPro`);
    message.channel.send({embed});
    const embed1 = new Discord.RichEmbed()
        .setColor(0xFFB200)
        .setTimestamp()
        .addField("DgPro", `تم تهكيرك يا نوب`)
        .addField("سبب تهكيرك", `**${reason}**`)
        .setFooter(`من ${message.author.tag}.`);
    user.send({embed: embed1});
}
});





   client.on('message', message => {
     if (message.content === "+help") {
      const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setDescription('**اهلا وسهلا بكم تم ارسال  الاومر في الخاص**')
  message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
            if (message.content.startsWith("اسلام عليكم")) {
     let embed = new Discord.RichEmbed()
.addField('  :wave:  ,وعليكم السلام ورحمة الله وبركاته')
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
    }
});



client.on("message", message => {
 if (message.content === "+help") {
  const embed = new Discord.RichEmbed() 
      .setColor("#ffff00")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`
**
صاحب البوت :<@444126346676011028>
اسم البوت :<@460106813711319050>
**
█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
█░░╦─╦╔╗╦─╔╗╔╗╔╦╗╔╗░░█
█░░║║║╠─║─║─║║║║║╠─░░█
█░░╚╩╝╚╝╚╝╚╝╚╝╩─╩╚╝░░█
█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█
        **__اوامر ادارية__**
**
『+kick /لطرد العضو :outbox_tray:』
『+ban / لحظر العضو :no_entry:』
『+bc /برودكاست:mega:』
『+mute / لاسكات العضو:mute:』
『+unmute /  لفك الميوت عن العضو :loud_sound:』
『+mct / لقفل الشات :no_entry:』
『+unmct / لفتح الشات:on:』
『+role @someone [role]』
『+roleremove @someone [role]』
『+roleremove all , bots , humans [role]』
『+role all , bots , humans [role]』
『+bans / لرؤية عدد الاشخاص الذين تم تبنيدهم من السيرفر』
『+moveall / لسحب الكل الى رومك الصوتي』
『+move / لسحب شخص محدد الى الروم الخاص بك』
『+ccolors / لصنع الوان بعدد محدد』
『+vonline / لصنع روم فويس اونلاين يظهر الاشخاص الي بالرومات الصوتية』
**
`)


message.author.sendEmbed(embed)

}
}); 

client.on("message", message => {
 if (message.content === "+help") {
  const embed = new Discord.RichEmbed() 
      .setColor("#ffff00")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`
        ***__:earth_africa: اوامر عامه:earth_africa: __***
**
『+id / معلومات عن حسابك:bust_in_silhouette:』
『+rooms / يعرض لك الرومات وعددها』
『+server / معلومات عن السيرفر:bar_chart:』
『+ser-av / يعرض صوره السيرفر :camera:』
『+avatar / يعرض صورتك او صوره شخص:camera:』
『+date / يعرض لك التاريخ:calendar:』
『+ping / يعرض لك سرعه اتصال البوت:rocket:』
『+support / سيرفر الدعم القني و المساعده』
『+inv / اضافه البوت:sparkles:』
『+member / عدد الاعضاء :busts_in_silhouette:』
『+bot / لكي ترا البوت في كم سيرفر + كم عضو + روم:robot:』
『+contact/ لارسال رسالة لصاحب البوت』
『+emojilist / يعرض لك ايموجي السيرفر :yum:』
『+info / لكي ترا معلومات عن البوت :robot:』
『+say / لجعل البوت يصنع بوت باسمك + بصورتك ويكرر كلامك ويحذف البوتات خلال ثواني:robot:』
『+user / لعرض معلومات حسابك او حساب شخص اخر :mens: 』
『+report / لعمل ابلاغ على شخص "يجب عمل روم ب اسم 
report":x: 』
『+sug / لعمل اقتراح للسيرفر " ملاحظة يجب عمل روم ب اسم
suggests 』
**
`)


message.author.sendEmbed(embed)

}
}); 

client.on("message", message => {
 if (message.content === "+help") {
  const embed = new Discord.RichEmbed() 
      .setColor("#ffff00")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`
        **__:musical_note: الاغاني:musical_note:__**
**
『+p / لتشغيل الاغنية :musical_note:』
『+s / لتخطي الاغنية:musical_note:』
『+stop / لايقاف الاغنية:musical_note:』
『+vol / لاخفاض او رفع الصوت:musical_note:』
『+np / لعرض اسم الاغنية:musical_note:』
『+q / لعرض الاغانية التي في قيد الانتظار:musical_note:』
『+pa / لايقاف الاغنية مؤقتاّ:musical_note:』
『+r / لاعادة تشغيل الاغنية مرة اخرى بعد انتهائها:musical_note:』
**
`)


message.author.sendEmbed(embed)

}
}); 


client.on("message", message => {
 if (message.content === "+help") {
  const embed = new Discord.RichEmbed() 
      .setColor("#ffff00")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`
      **:kaaba: اوامر بوت القرآن الكريم :kaaba:**
**
:regional_indicator_a: القرآن كاملاً ماهر المعيقلي
:regional_indicator_b: سورة البقرة كاملة للشيخ مشاري العفاسي
:regional_indicator_c: سورة الكهف كاملة بصوت مشارى بن راشد العفاسي
:stop_button: لإيقاف القرآن الكريم
:regional_indicator_d: القرآن كاملاً عبدالباسط عبدالصمد
:regional_indicator_e: القرآن كاملاً ياسر الدوسري
:regional_indicator_f: سورة الواقعه بصوت الشيخ مشاري بن راشد العفاسي
**
`)


message.author.sendEmbed(embed)

}
}); 

client.on("message", message => {
 if (message.content === "+help") {
  const embed = new Discord.RichEmbed() 
      .setColor("#ffff00")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`
        **__:video_game:الالعاب:video_game:__**
 **       
『:video_game:+انجاز:video_game:』
『:video_game:+هكر:video_game:』
『:video_game:+زواج:video_game:』
『:video_game:+فكك:video_game:』
『:video_game:+حب:video_game:』
『:video_game:+لو خيروك:video_game:』
『:video_game:+خواطر:video_game:』
『:video_game:+عقاب:video_game:』
**
   
        
`)


message.author.sendEmbed(embed)

}
}); 

client.on("message", message => {
 if (message.content === "+help") {
  const embed = new Discord.RichEmbed() 
      .setColor("#ffff00")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`
             **__معلومات عن البوت__**
**
『مطور وصاحب البوت : <@444126346676011028> 』
『لغة البوت : JS 』
『البوت شغال 24 ساعة على خادم: Heroku 』
『رابط سيرفر سبورتر البوت : https://discordapp.com/invite/4kgMsfk 』
『رابط لاضافة البوت : https://discordapp.com/oauth2/authorize/?permissions=268443710&scope=bot&client_id=460106813711319050 』
**
`)


message.author.sendEmbed(embed)

}
}); 

   client.on('message', message => {
     if (message.content === "هلا") {
      const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setDescription(' **يا هلا ومرحبتين** ')
  message.channel.sendEmbed(embed);
    }
});




   client.on('message', message => {
     if (message.content === "برب") {
      const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setDescription(' **تيت يا غالي لا تطول علينا** ')
  message.channel.sendEmbed(embed);
    }
});








   client.on('message', message => {
     if (message.content === "باك") {
      const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setDescription(' **ولكم يا حب نورت ام السيرفر :heart_eyes:** ')
  message.channel.sendEmbed(embed);
    }
});



   client.on('message', message => {
     if (message.content === "سلام عليكم") {
      const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setDescription(' **وعليكم السلام ورحمة الله وبركاته :heartpulse:** ')
  message.channel.sendEmbed(embed);
    }
});

   client.on('message', message => {
     if (message.content === "السلام عليكم") {
      const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setDescription(' **وعليكم السلام ورحمة الله وبركاته :heartpulse:** ')
  message.channel.sendEmbed(embed);
    }
});



	  client.on('message', message => { 
  if (message.content === "+id") {
  let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)  
.setAuthor(message.author.username)
.setDescription("**معلومات عن الحــساب**")
            .setFooter(`<@444126346676011028>`)
.setColor("#9B59B6")
.addField("**اســـم الحســاب**", `${message.author.username}`)
.addField('**تاق الحساب الخاص**', message.author.discriminator)
.addField("**الرقـــم الشـــخصي**", message.author.id)
.addField('**بــــوت**', message.author.bot)
.addField("**تاريخ التسجيل**", message.author.createdAt)

message.channel.sendEmbed(embed);
 }
});





client.login(process.env.BOT_TOKEN);
