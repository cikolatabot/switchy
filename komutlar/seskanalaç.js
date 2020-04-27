const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let kanal = args.slice(0).join(' ');
    let guild = message.guild;
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply('Bunun için gerekli iznin yok');
    if (kanal.length < 1) return message.reply('Lütfen oluşturacağım kanalın adını yaz.');
  message.delete();
  guild.createChannel(kanal, 'voice');
  message.channel.send("Ses Kanalı Oluşturuldu");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ses-kanal-aç'],
  permLevel: 3
};

exports.help = {
  name: 'seskanalaç',
  description: 'Bir ses kanalı açar',
  usage: 'seskanalaç'
};