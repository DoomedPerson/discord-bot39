const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    let messagecontent = message.content.toLowerCase();
    
    if (messagecontent === '!platform-commands') {
    	message.reply("Type '!PC-Player+' if your a PC player, '!XBox-Player+' if your a XBox player, '!PS4-Player+' if your a PS4 player, and '!Switch-Player+' if your a switch player. To remove your role type '!*platform*_Player-'");
  	}
    if (messagecontent === '!pc-player+') {
            
 return message.reply("role");
            
            var Role = message.author.guild.roles.find('name', 'PC');
           
            if (Role) {
                message.reply('here');
                if (!message.author.roles.has(Role)) {
                    message.reply('there');
                    message.author.addRole(Role);
                }
            }
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
