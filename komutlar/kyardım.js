const Discord = require ("discord.js");

exports.run = (client, message) => {

const EmbedFwhyCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("**▬▬▬▬▬▬[** ©️ **Bee6 Bot (V12)** ©️ **]▬▬▬▬▬▬** \n> :floppy_disk: **Şuanda kullanılan prefix** `b!`")
.setThumbnail('https://cdn.discordapp.com/attachments/778643898272055337/794908648186314752/tenor.gif')
.setDescription(`

▬▬▬▬▬▬[ :bee: **Kayıt Komutları** :bee: ]▬▬▬▬▬▬

> **:prince:»b!erkek-rol @rol** Erkek Rolünü Ayarlar
> **:x:»b!erkek-rol sıfırla** Erkek Rolünü Sıfırlar
> **»b!kız-rol @rol** Kız Rolünü Ayarlar
> **:x:»b!kız-rol sıfırla** Kız Rolünü Sıfırlar
> **»b!alınacak-rol @rol** Kayıt Olunca Alınacak Rolü Ayarlar
> **:x:»b!alınacak-rol sıfırla** Kayıt Olunca Alınacak Rolü Sıfırlar
> **»b!kayıt-kanal #kanal** Kayıt Kanalını Ayarlar
> **:x:»b!kayıt-kanal sıfırla **Kayıt Kanalını Sıfırlar
> **»b!kayıtçı-rol @rol **Kayıtçı Rolünü Ayarlar
> **:x:»b!kayıtçı-rol sıfırla** Kayıtçı Rolünü Sıfırlar
> **»b!kayıtçı-ver @kullanıcı **Belirttiğiniz Kullanıya Kayıtçı Rolü Verir
> **»b!kayıtçı-al @kullanıcı **Belirttiğiniz Kullanıcıdan Kayıtçı Rolünü Alır
> **»b!erkek @kullanıcı isim yaş** Erkek Olarak Kayıt Edersiniz
> **»b!kız @kullanıcı isim yaş** Kız Olarak Kayıt Edersiniz

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
    aliases: ["kyardım", "ky", "khelp", "registerhelp", "rh"], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'kayıt-yardım', 
    description: 'The Help Command',
    usage: 'yardım'
};