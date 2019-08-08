const Discord = require('discord.js');
const client = new Discord.Client();
var bossla = 0;
var bossvie = 100
const prefix = "/";

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

client.on("message", (message) => {
  if (message.content.startsWith("/help")) {
    message.channel.send("```fix\n/cookie + mention: Give a cookie!\n/rps (rock, paper, scissors): Play rps!\n/boss and /attack: Fight the boss!```");
    client.channels.get("494896830300291072").send(message.author.username + " a utilisé la commande /help")
  }
});

client.on('ready', () => {
console.log("Je suis connecté!")
  client.user.setUsername('UsefulBot')
  client.user.setStatus('dnd') 
  client.user.setPresence({ game: { name: 'In Test | /help', type: 0 }});
});

//Useless things

client.on("message", (message) => {
  let member = message.mentions.members.first()
  if (message.content.startsWith("/cookie " + member)) {
   message.channel.send("**" + member.user.username + " receive a cookie from " + message.author.username + "!** <:cookiebot:494913218259582979>");
  }
});

//Chat Global

client.on('message', message => {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
      if(command === "chat") {
      //Prend le texte saisi
      //Je sais pas comment expliquer mdr mais ça merde si tu le mets pas
      const sayMessage = args.join(" ");
      const usefulEmbed = new Discord.RichEmbed()
	.setColor('#484848')
	.setAuthor(message.author.username + ' depuis ' + message.guild.name, message.author.avatarURL)
	.setDescription(sayMessage)
	.setFooter('UsefulChat', 'https://media.discordapp.net/attachments/608472872972845076/608472935702986775/ef1bf607332e504a9354aa16a79a055c.jpg');
      message.delete().catch(O_o=>{});
      //Suppression
      //Liste des salons ciblés
      client.channels.get("608386006688989204").send(usefulEmbed);
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
  const args = message.content.slice(prefix.length).trim().split(/+/g); //Ajouter un espace au dernier truc si ça marche pas
  const command = args.shift().toLowerCase();
  const usefulPoll = args.join(" ");
  const usefulEmbed = new Discord.RichEmbed()
	.setColor('#484848')
	.setAuthor('Sondage de ' + message.author.username, message.author.avatarURL)
        .addBlankField()
        .addField(usefulPoll, 'Répondez avec <:usefulyes:608484799505760272> ou <:usefulno:608484799216222218>!')
        .addBlankField()
        .addBlankField()
	.setFooter('UsefulPoll', 'https://media.discordapp.net/attachments/608472872972845076/608472935702986775/ef1bf607332e504a9354aa16a79a055c.jpg');
      //Prend le texte saisi
  if(command === "poll") 
     message.delete().catch(O_o=>{});
     message.channel.send(usefulEmbed).then(sentEmbed => {
                      sentEmbed.react("608484799505760272")
                      sentEmbed.react("608484799216222218")
      });
	      
}); 



client.on("message", (message) => {
  if (message.content.startsWith("/poll ")) {
    if(!message.content.includes("")){
        message.delete();
  }
  }
});

//    message.react('608484799505760272');
//    message.react('608484799216222218');
client.login(process.env.BOT_TOKEN); //Héhé
