const Discord = require('discord.js')
const ayar = require('../ayarlar.json')
const db = require('quick.db')
const ms = require('ms')

exports.run = async(client, message, args) => {
    if(!message.member.roles.cache.get(ayar.JailYetkilisi) && !message.member.permissions.has('ADMINISTRATOR')) return message.channel.send('Bu komut için yetkin yetersiz.')

    ////////////////////////////////////////////////////////
    let member = message.mentions.users.first()
    let kişi = message.guild.member(member)
    if(!member) return message.channel.send('Bir kişi etiketle.')
    if(kişi.roles.highest.position >= message.member.roles.highest.position) return message.channel.send('Kullanıcı Sizden Üstte veya Aynı Pozisyonda.')

    let zamann = args[1]
    .replace('sn', 's')
    .replace('dk', 'm')
    .replace('sa', 'h')
    .replace('gün', 'd');
    ///////////////////////////////////////////////////////////
    var vakit = zamann
        .replace("m", " dakika")
        .replace("s", " saniye")
        .replace("h", " saat")
        .replace("d", " d");
    // DB KISMINA GELELİİM
    db.add(`jail.${message.author.id}`, 1)
    db.add(`toplam.${message.author.id}`, 1)
    ///////////////////////////////////////////////////////////
    let zaman = args[2]
    if(!args[2]) return message.channel.send('Bir zaman gir.')
    let sebep = args.slice(2).join(' ')
    if(!sebep) sebep = 'Belirtilmedi'
    ///////////////////////////////////////////////////////////
    
    const jailmesaj = new Discord.MessageEmbed()
    .setTitle(`${client.user.username} - Jail`)
    .setAuthor(message.author.username, message.author.avatarURL ({dynamic: true}))
    .setDescription(`<@${member.id}>, adlı kullanıcı jaile atıldı.
   
   - Jail Atan Yetkili: <@${message.author.id}> / **${message.author.id}**
   
   - Jail Süresi: **${vakit}**
   
   - Jaile Atılan Kullanıcı: <@${member.id}> / **${member.id}**
   
   - Jaile Atılma Sebebi: **${sebep}**`)
   .setFooter(`:bee:`)

   const jailbitti = new Discord.MessageEmbed()
   .setTitle(`${client.user.username} - Jail`)
   .setAuthor(message.author.username, message.author.avatarURL ({dynamic: true}))
   .setDescription(`<@${member.id}>, adlı kullanıcının jail süresi sona erdiği için jailden çıkarıldı.
   
   - Jail Atan Yetkili: <@${message.author.id}> / **${message.author.id}**
   
   - Jail Süresi: **${vakit}**
   
   - Jaile Atılan Kullanıcı: <@${member.id}> / **${member.id}**`)
   /////////////////////////////////////////////////////////////////////////////
   kişi.roles.add(ayar.JailRol);
    kişi.roles.cache.forEach(r => {
kişi.roles.remove(r.id)
db.set(`${message.guild.id}.jail.${kişi.id}.roles.${r.id}`, r.id )})
    client.channels.cache.get(ayar.JailKanal).send(jailmesaj)
    setTimeout(async () =>{
    kişi.roles.remove(ayar.JailRol)
    client.channels.cache.get(ayar.JailKanal).send(jailbitti)
  }, ms(zamann));
            setTimeout(async () =>{
message.guild.roles.cache.forEach(async r => {
const i = await db.fetch(`${message.guild.id}.jail.${kişi.id}.roles.${r.id}` )
if(i != r.id)  return ;
if(i){kişi.roles.add(i)}
db.delete(`${message.guild.id}.jail.${kişi.id}.roles.${r.id}`)
})
              }, ms(zamann));
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['hapishane'],
  permLevel: 0
};

exports.help = {
  name: 'jail',
  description: 'Jaile atar.',
  usage: 'jail'
};