const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
const db = require('quick.db')
exports.run = async(client, message, args) => {
    if(!message.member.roles.cache.get('kullanck rol id')) return message.channel.send('Bu komut için yetkin yetersiz.')

    let kişi = message.mentions.users.first()
    
    if(!kişi) {
        db.delete(`ban.${message.author.id}`)
        db.delete(`kick.${message.author.id}`)
        db.delete(`jail.${message.author.id}`)
        db.delete(`mute.${message.author.id}`)
        db.delete(`toplam.${message.author.id}`)
        message.channel.send('Kendi istatistiklerini sıfırladın.')
    }
    if(kişi) {
        db.delete(`ban.${message.author.id}`)
        db.delete(`kick.${message.author.id}`)
        db.delete(`jail.${message.author.id}`)
        db.delete(`mute.${message.author.id}`)
        db.delete(`toplam.${message.author.id}`)
        message.channel.send('Etiketlenen kullanıcının istatistiklerini sıfırladın.')
    }

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['s-temizle'],
  permLevel: 0
};

exports.help = {
  name: 'sıfırla',
  description: 'statları sıfırlar',
  usage: 'sıfırla'
};