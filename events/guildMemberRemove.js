module.exports = member => {
  let guild = member.guild;
  member.send('Görüşmek üzere, seni tekrar bekliyoruz!');
  guild.defaultChannel.sendMessage(`${member.user.username} gitti.`);
};
