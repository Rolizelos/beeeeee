const Discord = require('discord.js');
const db = require('quick.db')
const ayar = require('../ayarlar.json')

exports.run = async(client, message, args) => {
    if(!message.member.roles.cache.get(ayar.KickYetkilisi) && !message.member.permissions.has('ADMINISTRATOR')) return message.channel.send('Bu komutu kullanmak için yetkin yok.')

///////////////////////////////////////////////////////////////////////
    let member = message.mentions.users.first()
    if(!member) return message.channel.send('Bir kullanıcı belirt.') /// Swenlor <3 Pythonic
    let swenlor = message.guild.member(member) /// Swenlor <3 Pythonic
    let sebep = args.slice(1).join(' ') /// Swenlor <3 Pythonic
    if(!sebep) sebep = 'Belirtilmedi' /// Swenlor <3 Pythonic
    await swenlor.kick(sebep) /// Swenlor <3 Pythonic
    message.channel.send(`${swenlor.user.tag} Sunucudan atıldı. Gerekli bilgiler loga sunuldu.`) /// Swenlor <3 Pythonic
    db.add(`kick.${message.author.id}`, 1) /// Swenlor <3 Pythonic
    db.add(`toplam.${message.author.id}`, 1) /// Swenlor <3 Pythonic 
///////////////////////////////////////////////////////////////////////
    client.channels.cache.get(ayar.KickKanal).send(
        new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL ({dynamic: true})) /// Swenlor <3 Pythonic
        .setTitle(`${client.user.username} - Ban Sistemi`)
        .setDescripiton(`**<@${member.id}> / ${member.id}** Sunucudan atılmıştır.
        
  - Kick Atan Yetkili: <@${message.author.id}> / **${message.author.id}**

  - Kick Atılan Kişi: <@${member.id}> / **${member.id}**
  
  - Kick Sebep: ${sebep}`)
    );
    
} 


exports.conf = {
enabled: true,
guildOnly: true,
aliases: ["at"],
permLevel: 0,
  }
  
exports.help = {
name: "kick"
};