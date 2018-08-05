const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setStatus('available') // Can be 'available', 'idle', 'dnd', or 'invisible'
    client.user.setPresence({
        game: {
            name: 'you. o.0',
            type: 3
        }
    });
});

client.on('message', message => {
    let member = message.member
    let messagecontent = message.content.toLowerCase();
    
    if (messagecontent === '!platform-commands') {
    	message.reply("Type '!PC-Player+' if your a PC player, '!XBox-Player+' if your a XBox player, '!PS4-Player+' if your a PS4 player, and '!Switch-Player+' if your a switch player. To remove your role type '!*platform*_Player-'");
    }
    
    if (messagecontent === '!pc-player+') {
        
        var Role = member.guild.roles.find("name", "PC");
        
        member.addRole(Role)
        
        message.reply("PC role added. (Not a PC player? Type !PC-Player-)")

    }
    
    if (messagecontent === '!pc-player-') {
        
        var Role = member.guild.roles.find("name", "PC");
        
        member.removeRole(Role)
        
        message.reply("PC role removed.")

    }
    
    if (messagecontent === '!xbox-player+') {
        
        var Role = member.guild.roles.find("name", "XBox");
        
        member.addRole(Role)
        
        message.reply("XBox role added. (Not a XBox player? Type !XBox-Player-)")

    }
    
    if (messagecontent === '!xbox-player-') {
        
        var Role = member.guild.roles.find("name", "PC");
        
        member.removeRole(Role)
        
        message.reply("XBox role removed.")

    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
