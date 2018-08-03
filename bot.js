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

client.login(process.env.NDc0NzY5NzkyNDg2ODY2OTU0.DkVX1A.eHicR6_jFfQwcvVRvurotL9TiDo);
