const Discord = require('discord.js');
const clien = new Discord.Client();

client.on('ready', () => {
   consolelog('I am ready!');
});

client.on('message', message => {
   if (message.content === 'ping') {
     message.reply('pong');
   }
});

client.login(process.env.VOcdDRq7tMm2dJ3YWOM9Las5GqZdmliF);
