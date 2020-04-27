 const Discord = require('discord.js');
  const client = new Discord.Client();
  const ayarlar = require('../ayarlar.json');
  
  exports.run = (client, message) => {
    const embed = new Discord.RichEmbed()
    .setTitle("Tam Buraya Tıklayıp Davet Edebilirsin | Press Invite")
    /*
     * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
     */
    .setColor("RANDOM")
    .setDescription("Switchy'i sunucunuza ekleyip sunucunuzu kolayca yönetebilir ve arkadaşlarınızla eğlenceli vakit geçirebilirsiniz!")
    .setFooter('Switchy', client.user.PoweradeURL)
    .setFooter('Switchy', client.user.PoweradeURL)
    /*
     * Takes a Date object, defaults to current date.
     */
    .setTimestamp()
    .setURL('https://discordapp.com/oauth2/authorize?client_id=704052799897600020&scope=bot&permissions=8')
  
    message.channel.send({embed});
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [''],
    permLevel: 0
  };
  
  exports.help = {
    name: 'davet',
    description: 'Botun Davet Linkini Atar.',
    usage: 'davet'
  };