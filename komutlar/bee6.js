const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message) => {

message.channel.send("Bee6").then(message => {

    var FwhyCode = [
 
      "Buyrun Efendim, Ben Her Zaman Burdayım. :wink:",
      "Ne Oldi Uşağum, Söyle Da.",
      "Efendim Kankacım",
      "Hayırdır, Noldu?",
      "``b!yardım`` Yaz Bi Hele",
      "BeeÜstü Karşında :D",
      "Kelebek Gibi Uçarım Arı Gibi, ee Neyse Zaten Arı Değil Miyim? \n Söylememe Hiç Gerek Yoktu  :person_facepalming: \n qqweqwewq"

    ];

    var FwhyCode = FwhyCode[Math.floor(Math.random() * FwhyCode.length)];

    message.edit(`${FwhyCode}`);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["BEE6", "Bee6", "BEe6", "BeE6"],
  permLevel: 0
};

exports.help = {
  name: "bee6",
  description: "Espri yapar.",
  usage: "bee6"
};