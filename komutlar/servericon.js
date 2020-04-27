const Discord = require('discord.js');


exports.run = function(client, message) {

    const embed = new Discord.RichEmbed()
        .setDescription("**Switchy | Sunucu Resmi**")
        .setImage(message.guild.iconURL)

    message.channel.send(embed);

};

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'sunucuresim', 
  description: 'Serverin iconunu gösterir',
  usage: 'sunucuresim'
};
