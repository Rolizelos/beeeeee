const Discord = require('discord.js')

exports.run = async (client, message, args, level) => {
  message.delete(3000)
  try {
    
    const embed = new Discord.RichEmbed()
    .setTitle(`Bee6 bot Sayaç komut desteği`)
    .setFooter(message.author.username)
    .setColor('RANDOM')
    .setImage('')
    .setTimestamp()
    .setFooter(message.author.username , message.author.avatarURL)
    .setFooter("Sayaç komutunu kullanabilmek için. Yönetici rolüne sahip olmanız gerekmektedir. Ardından b!sayaç-ayarla *istediğiniz sayı* #sayaç yazarak aktif edebilirsiniz.")

    return message.channel.send({embed});
    
    message.channel.send();
  } catch (err) {
    message.channel.send('❌ Daha Sonra Tekrar Deneyin!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: ['sayac'],
  guildOnly: false,
  permLevel: 0
};

exports.help = {
  name: 'sayaç',
  description: 'Bottaki Komut Sayısını Gösterir.',
  usage: 'sayaç'
};