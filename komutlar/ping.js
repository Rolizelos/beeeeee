const Discord = require('discord.js');
exports.run = async (app, message, client) => {
  
  const kinda = new Discord.MessageEmbed()

  .setColor("BLACK")
  .setDescription('Ping Hesaplanıyor...')
  
   let start = Date.now(); 
   let mesaj = await message.channel.send(kinda)
   let diff = (Date.now() - start); 
   let API = (app.ws.ping).toFixed(2)
    
    setInterval(() => {
  
   const only = new Discord.MessageEmbed()
  
   .setDescription(`\nMesaj Gecikme Süresi ; **${diff}Ms** \n\nBot Gecikme Süresi ; **${API}Ms**`)
   .setColor('YELLOW')
   
    mesaj.edit(only);
   
    }, 5000)
  

 
 
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ms'],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Skorsky',
  usage: 'ping'
};