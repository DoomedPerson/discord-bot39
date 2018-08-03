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

client.login(process.env.NDc0NzY5NzkyNDg2ODY2OTU0.DkVV4Q.soTX-bc_qXRxj2_v6wTjhnKXOjg);
