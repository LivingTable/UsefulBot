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

//Global Chat

client.on('message', message => {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
      if(command === "chat")
      sayMessage = args.join(" ");
          
      message.delete().catch(O_o=>{});
      //L'envoi du message (ajoutez une ligne en changeant l'id pour ajouter un autre salon à cibler) 
      client.channels.get(`608355997387456513`).send(sayMessage)
  }
}); 

client.login(process.env.BOT_TOKEN);//Héhé
