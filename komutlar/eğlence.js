const Discord = require ("discord.js");

exports.run = (client, message) => {

const EmbedFwhyCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("**▬▬▬▬▬▬[** ©️ **Bee6 Bot (V12)** ©️ **]▬▬▬▬▬▬**  \n> :floppy_disk: **Şuanda kullanılan prefix** `!`")
.setThumbnail("https://cdn.discordapp.com/attachments/778643898272055337/794908648186314752/tenor.gif")
.setDescription(`

▬▬▬▬▬▬[ :bee: **Eğlence Komutları** :bee: ]▬▬▬▬▬▬

> **» b!aduketçek :** Etiketlediğiniz kişiye aduket çekersiniz.
> **» b!balık-tut :** Denizde balık tutarsınız.
> **» b!beşlik :** Etiketlediğiniz kişiyle beşlik çakarsınız.
> **» b!ara155 :** Polisi aramanıza yarar.
> **» b!efkarım :** Şu anda olan efkarınızı ölçersiniz.
> **» b!ejderha-yazı :** Ejderha temalı logo üretirsiniz.
> **» b!espri :** Bot sizin için espri yapar.
> **» b!kartopu :** Etiketlediğiniz kişiye kartopu atarsınız.
> **» b!kralol :** Kral olmanıza yarar.
> **» b!tokat :** Etiketlediğiniz kişiyi tokatlarsınız.
> **» b!kuş-dili-çevirici :** Yazdığınız şeyi kuş diline çevirir.
> **» b!kutuaçbs :** Brawl Stars Kutusu Açarsınız.
> **» b!taksimdayı**



**▬▬▬▬▬▬▬[** :gear: **Bilgilendirme** :gear: **]▬▬▬▬▬▬▬**

`)
 
.setFooter(client.user.username + "", client.user.avatarURL)
.setTimestamp();

return message.channel.send(EmbedFwhyCode)
.then; //FwhyCode

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'eğlence', 
    description: 'The Help Command',
    usage: 'fun'
};