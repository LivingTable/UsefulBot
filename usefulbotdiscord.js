const Discord = require('discord.js');
const client = new Discord.Client();

Bot.on('ready', function() {
    console.log("Je suis prêt!");
    Bot.user.setActivity('En phase de test.', { type: 'WATCHING' })
});

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
