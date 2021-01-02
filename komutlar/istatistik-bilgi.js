const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
const db = require('quick.db')
exports.run = async(client, message, args) => {
  if(!message.member.roles.cache.get('kullancak rol id') && !message.member.permissions.has('ADMINISTRATOR')) return message.channel.send('Bu komut için yetkin yetersiz.')

  let kişi = message.mentions.users.first()

  let jail = db.fetch(`jail.${message.author.id}`)
  let ban = db.fetch(`ban.${message.author.id}`)
  let kick = db.fetch(`kick.${message.author.id}`)
  let mute = db.fetch(`mute.${message.author.id}`)
  let toplam  = db.fetch(`toplam.${message.author.id}`)
  
  if(jail === null) jail = '0'
  if(jail === undefined) jail = '0'
  if(ban === null) ban = '0'
  if(ban === undefined) ban = '0'
  if(kick === null) kick = '0'
  if(kick === undefined) kick = '0'
  if(mute === null) mute = '0'
  if(mute === undefined) mute = '0'
  if(toplam === null) toplam = '0'
  if(toplam === undefined) toplam = '0'

  if(!kişi) {
      const stat = new Discord.MessageEmbed()
      .setTitle(`${client.user.username} - İstatistik`)
      .setAuthor(message.author.username, message.author.avatarURL ({dynamic: true}))
      .setDescription(`<@${message.author.id}> İstatistiklerin;
      
    - Toplam: **${toplam}**
    
    - Toplam Ban Sayın: **${ban}**
    
    - Toplam Kick Sayın: **${kick}**
    
    - Toplam Jail Sayın: **${jail}**
    
    - Toplam Mute Sayın: **${mute}**`)
    .setFooter(':bee:Bee6:bee:')
    .setTimestamp()
    message.channel.send(stat)
  }
      
  let jail1 = db.fetch(`jail.${kişi.id}`)
  let ban1 = db.fetch(`ban.${kişi.id}`)
  let kick1 = db.fetch(`kick.${kişi.id}`)
  let mute1 = db.fetch(`mute.${kişi.id}`)
  let toplam1  = db.fetch(`toplam.${kişi.id}`)
  
  if(jail1 === null) jail1 = '0'
  if(jail1 === undefined) jail1 = '0'
  if(ban1 === null) ban1 = '0'
  if(ban1 === undefined) ban1 = '0'
  if(kick1 === null) kick1 = '0'
  if(kick1 === undefined) kick1 = '0'
  if(mute1 === null) mute1 = '0'
  if(mute1 === undefined) mute1 = '0'
  if(toplam1 === null) toplam1 = '0'
  if(toplam1 === undefined) toplam1 = '0'

  if(kişi) {
      const stat1 = new Discord.MessageEmbed()
      .setTitle(`${client.user.username} - İstatistik`)
      .setAuthor(message.author.username, message.author.avatarURL ({dynamic: true}))
      .setDescription(`<@${kişi.id}> İstatistikleri;
      
    - Toplam: **${toplam1}**
    
    - Toplam Ban Sayın: **${ban1}**
    
    - Toplam Kick Sayın: **${kick1}**
    
    - Toplam Jail Sayın: **${jail1}**
    
    - Toplam Mute Sayın: **${mute1}**`)
    .setFooter(':bee:Bee6:bee:')
    .setTimestamp()
    message.channel.send(stat1)
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['istatistik'],
  permLevel: 0
};

exports.help = {
  name: 'stat',
  description: 'statlarına bakar',
  usage: 'stat'
};