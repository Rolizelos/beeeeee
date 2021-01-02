const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
const pythonic = require('quick.db')
const prefix = ayarlar.prefix


exports.run = async(client, message, args) => {

   let toplam1  = pythonic.fetch(`ban.${message.author.id}`)
   
   if(toplam1 === undefined) toplam1 = '0'
  if(toplam1 === null) toplam1 = '0'
 
  
  
  
  
  
  
  
  
  
const embed = new Discord.MessageEmbed()
.setTitle("Bee6 Moderasyon")
.addField(`${prefix}ban`, 'Belirtilen kullanıcıya ban atar')
.addField(`${prefix}istatistik`, 'İstatistiklere bakar')
.addField(`${prefix}jail`, 'Belirtilen kullanıcıyı jaile atar')
.addField(`${prefix}kick`, 'Belirtilen kullanıcıyı kickler')
.addField(`${prefix}mute`, 'Belirtilen kullanıcıyı susturur')
.addField(`${prefix}sıfırla`, 'İstatistikleri sıfırlar')
.addField(`${prefix}unban`, 'Sunucuda banlı olan kişinin banını açar')
.addField(`${prefix}unmute`, 'Susturulmuş olan kişinin susturulmasını açar')
.addField(`${prefix}yardım`, 'Yardım menüsü')
.setFooter(`Bee6 bot - ${toplam1} kişiye ban atmışsın`)

message.channel.send(embed)

}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["moderasyon"],
  permLevel: 0,
}

exports.help = {
  name: "moderasyon"
}; 