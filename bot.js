const Discord = require('discord.js');
const clien = new Discord.Client();

client.on('ready', () => {
   client.user.setStatus("Online");
   consolelog('I am ready!');
});

client.on('message', message => {
   if (message.content === 'ping') {
     message.reply('pong');
   }
});

client.login(process.env.BOT_TOKEN);
