const Discord = require ("discord.js");

exports.run = (client, message) => {

const EmbedFwhyCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("**▬▬▬▬▬▬[** ©️ **Bee6 Bot (V12)** ©️ **]▬▬▬▬▬▬**  \n> :floppy_disk: **Şuanda kullanılan prefix** `b!`")
.setThumbnail('https://cdn.discordapp.com/attachments/778643898272055337/794908648186314752/tenor.gif')
.setDescription(`

▬▬▬▬▬▬[ :bee: **Otorol Komutları** :bee: ]▬▬▬▬▬▬

> **» b!otorol-ayarla @rol #kanal :** Otorol Ayarlama.
> **» b!otorol-kapat :** Otorolü Kapatır.

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
    name: 'otorol',
    description: 'The Help Command',
    usage: 'otorol'
};