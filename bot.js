const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setStatus('dnd') // Can be 'available', 'idle', 'dnd', or 'invisible'
    client.user.setPresence({
        game: {
            name: 'you. o.0',
            type: 3
        }
    });
});

client.on('message', message => {
    let messagecontent = message.content.toLowerCase();
    
    if (messagecontent === '!platform-commands') {
    	message.reply("Type '!PC-Player+' if your a PC player, '!XBox-Player+' if your a XBox player, '!PS4-Player+' if your a PS4 player, and '!Switch-Player+' if your a switch player. To remove your role type '!*platform*_Player-'");
    }
    
    if (messagecontent === '!pc-player+') {
        
             
        let Role = message.guild.roles.find("name", "PC");
       return message.reply("Role")
        message.author.addRole(Role).catch();


        


    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
