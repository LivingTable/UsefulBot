const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
var bossla = 0;
var bossvie = 1000;
const prefix = "/";
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
for(let i = 0; i < 11; i++) {
  myEmitter.on('event', _ => console.log(i));
}

myEmitter.emit('event');

var paper = [
  "<:rpsrock:495279201855864832>** Rock! Win! **<:rpsrock:495279201855864832>",
  "<:rpsscissors:495279191294476288>** Scissors! Lose... **<:rpsscissors:495279191294476288>",
  "<:rpspaper:495279179806539776>** Paper! Tie. **<:rpspaper:495279179806539776>"
]

var anime = [
  "JoJo",
  "JoJo",
  "JoJo",
  "JoJo",
  "JoJo"
]

var scissors = [
  "<:rpsrock:495279201855864832>** Rock! Lose... **<:rpsrock:495279201855864832>",
  "<:rpsscissors:495279191294476288>** Scissors! Tie. **<:rpsscissors:495279191294476288>",
  "<:rpspaper:495279179806539776>** Paper! Win! **<:rpspaper:495279179806539776>"
]

var rock = [
  "<:rpsrock:495279201855864832>** Rock! Tie. **<:rpsrock:495279201855864832>",
  "<:rpsscissors:495279191294476288>** Scissors! Win! **<:rpsscissors:495279191294476288>",
  "<:rpspaper:495279179806539776>** Paper! Lose... **<:rpspaper:495279179806539776>"
]

//Games

client.on("message", (message) => {
  if (message.content.startsWith("/rps paper")) {
    var randomAnswers = paper[Math.floor(Math.random() * paper.length)];
    message.channel.send(randomAnswers);
    client.channels.get("494896830300291072").send(message.author.username + " a utilisé la commande /rps")
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("/rps scissors")) {
    var randomAnswers = scissors[Math.floor(Math.random() * scissors.length)];
    message.channel.send(randomAnswers);
    client.channels.get("494896830300291072").send(message.author.username + " a utilisé la commande /rps")
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("/rps rock")) {
    var randomAnswers = rock[Math.floor(Math.random() * rock.length)];
    message.channel.send(randomAnswers);
    client.channels.get("494896830300291072").send(message.author.username + " a utilisé la commande /rps")
  }
});

//Some Logs Things

client.on("guildCreate", guild => {
client.channels.get("494896830300291072").send("Le bot a rejoint " + guild.name + ", geré par " + guild.owner.user.username)
});

client.on('ready', () => {
console.log("Je suis connecté!")
  client.user.setUsername('UsefulBot')
  client.user.setStatus('dnd') 
  client.user.setPresence({ game: { name: 'Experimenting | /help', type: 0 }});
});

//Money system

client.on("message", (message) => {
  const ID = message.author.id;
  if (message.content.startsWith("/balance")) {
   message.channel.send("**You have: " + " UsefulCoins!**");
  }
});

client.on("message", (message) => {
  const ID = message.author.id;
  if (message.content.startsWith("/create")) {
   message.channel.send("**Created money account!**");
  }
});

client.on("message", (message) => {
  const ID = message.author.id;
  if (message.content.startsWith("/give")) {
  money[ID] += 50;
  fs.writeFileSync('./money.json', JSON.stringify(money[ID],{encoding:'utf8',flag:'w'}));
  message.channel.send("**Added 50 UsefulCoins to your account!**");
  }
});

//Useless things

client.on('message', message => {
  if (message.content.startsWith("/help")) {
  const args = message.content.slice(prefix.length).trim().split(/ +/g); 
  const command = args.shift().toLowerCase();     
  const sayMessage = args.join(" ");
  const usefulEmbed = new Discord.RichEmbed()
 	   .setColor('#484848')
	   .setAuthor('Help')
           .setDescription('Need help?')
           .addField('**Basic commands**', '-')
           .addField('**/chat + [message]**:', 'Sends a message to the UsefulChat, a global chat.')
           .addBlankField()
           .addField('**Money commands**', '-')
           .addField('**/create**:', 'Creates your own money account.')
           .addField('**/balance**:', 'Checks your money account (use /create before using it for the first time).')
           .addBlankField()
	   .setFooter('UsefulBot', 'https://media.discordapp.net/attachments/608472872972845076/608472935702986775/ef1bf607332e504a9354aa16a79a055c.jpg');
     message.delete().catch(O_o=>{});
     message.channel.send(usefulEmbed)
  }
}); 

//Chat Global

client.on('message', message => {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
      if(command === "chat") {
      //Prend le texte saisi
      //Je sais pas comment expliquer mdr mais ça merde si tu le mets pas
      const Author = message.author.username
      const sayMessage = args.join(" ");
      const usefulEmbed = new Discord.RichEmbed()
	.setColor('#484848')
	.setAuthor(Author + ' depuis ' + message.guild.name, message.author.avatarURL)
        .setDescription(sayMessage)
	.setFooter('UsefulChat', 'https://media.discordapp.net/attachments/608472872972845076/608472935702986775/ef1bf607332e504a9354aa16a79a055c.jpg');
      message.delete().catch(O_o=>{});
      //Suppression
      //Liste des salons ciblés
      client.channels.get('609197786851704832').send(usefulEmbed);
      client.channels.get('609201802306650112').send(usefulEmbed);
  }
}); 

//Commandes Modération

client.on('message', message => {
  if (!message.guild) return;
    if (message.author.id == 376387562161438730) {
      if (message.content.startsWith('/ban ')) {
        const user = message.mentions.users.first();
        if (user) {
          const member = message.guild.member(user);
          if (member) {
            member.ban({
              reason: `Banned using UsefulBot's banning command.`,
            }).then(() => {
              message.reply(`**${user.tag} is banned using UsefulBot's banning command.**`);
            }).catch(err => {
              message.reply(`**Can't ban this guy.**`);
            });
          } else {
            message.reply('**What?**');
          }
          } else {
            message.reply('**Who do you want to ban?**');
      }
    }
  }      
});

client.on('message', message => {
  if (message.content.startsWith("/poll ")) {
  const args = message.content.slice(prefix.length).trim().split(/ +/g); 
  const command = args.shift().toLowerCase();     
  const sayMessage = args.join(" ");
  const usefulEmbed = new Discord.RichEmbed()
 	   .setColor('#484848')
	   .setAuthor('Sondage de ' + message.author.username, message.author.avatarURL)
           .setDescription(sayMessage)
           .addField('------------', 'Répondez avec <:usefulyes:608484799505760272> ou <:usefulno:608484799216222218>!')
           .addBlankField()
           .addBlankField()
	   .setFooter('UsefulPoll', 'https://media.discordapp.net/attachments/608472872972845076/608472935702986775/ef1bf607332e504a9354aa16a79a055c.jpg');
     message.delete().catch(O_o=>{});
     message.channel.send(usefulEmbed).then(sentEmbed => {
     sentEmbed.react("608484799505760272")
     sentEmbed.react("608484799216222218")
     }) 
  }
}); 

client.on("serverNewMember", (server, user) => {
     client.sendMessage(user, "**Bienvenue sur " + server.name + "!**");
});

//    message.react('608484799505760272');
//    message.react('608484799216222218');
client.login(process.env.BOT_TOKEN); //Héhé
