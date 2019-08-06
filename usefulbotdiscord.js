const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
console.log("Je suis connecté!")
  client.user.setUsername('UsefulBot')
  client.user.setStatus('dnd') 
  client.user.setPresence({ game: { name: 'Being Useful | /help', type: 0 }});
});

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
