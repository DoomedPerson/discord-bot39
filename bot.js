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
    if (messagecontent === "!pc-player+") {
        message.reply("i get here")
        let newstring = substr(messagecontent, 0, 5)
        if (newstring === "!pc") {
            message.reply("i get here")
            
            let platform = "PC"
            let Role = message.guild.roles.find('name', platform)
            
            if (!Role) return message.reply("Uh Oh, an unknown error has occurred. Please try again")
            
            if (Role) {
                if (!message.author.roles.has(Role.id)) {
                    message.author.addRole(Role.id);
                }
            }
        }
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
