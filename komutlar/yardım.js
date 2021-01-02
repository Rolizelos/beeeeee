const Discord = require ("discord.js");

exports.run = (client, message) => {

const EmbedFwhyCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("**▬▬▬▬▬▬[** ©️ **Bee6 Bot (V12)** ©️ **]▬▬▬▬▬▬**  \n\n> :floppy_disk: `b!istatistik` **Botun istatistik bilgilerini açar.** \n> :floppy_disk: **Şuanda kullanılan prefix** `b!`")
.setThumbnail('https://cdn.discordapp.com/attachments/778643898272055337/794908648186314752/tenor.gif')
.setDescription(`

▬▬▬▬▬▬[ :bee: **Bot Komutları** :bee: ]▬▬▬▬▬▬

> **» b!kayıt-yardım :** Kayıt Komutlarını Gösterir.
> **» b!eğlence :** Eğlence Komutlarını Gösterir.
> **» b!otorol :** Otorol Kullanımı.
> **» b!... :** ...


**▬▬▬▬▬▬▬[** :gear: **Bilgilendirme** :gear: **]▬▬▬▬▬▬▬**
Bu komut ${message.author.username} tarafından istendi! 

`)
 
.setFooter(client.user.username + "", client.user.avatarURL)
.setTimestamp();

return message.channel.send(EmbedFwhyCode)
.then;

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'yardım', 
    description: 'The Help Command',
    usage: 'yardım'
};