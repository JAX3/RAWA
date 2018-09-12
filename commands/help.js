
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
    const embed = new Discord.RichEmbed()
    .setTitle("General Comands")
    .setThumbnail(bot.user.displayAvatarURL)
    .setColor(0xFFFFFF)
    .setDescription("!ping, !help, !joined, !info, !roles.")
    .setTimestamp()
    message.channel.send({embed});	
}

module.exports.help = {
  name:"help"
}