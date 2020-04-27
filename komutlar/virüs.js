const Discord = require("discord.js")
const { NovelCovid } = require('novelcovid');
const track = new NovelCovid();


exports.run = async (client, message, args) => {
   track.all().then(data => {
    const embed = new Discord.RichEmbed()
      .addField("Toplam Vaka [:microbe:]", data.cases)
      .addField("Toplam Ölen [:skull:]", data.deaths)
      .addField("Toplam İyileşen [:syringe:] ", data.recovered)
      .setFooter("Switchy | Bu rakamlar dünya üzerindeki genel rakamlardır.")
    message.channel.send(embed);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
name: 'koronabilgi'
};