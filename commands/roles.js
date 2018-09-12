
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
    const embed = new Discord.RichEmbed()
    .setTitle("Role Commands.")
    .setThumbnail(bot.user.displayAvatarURL)
    .setDescription("/role + game title.")
    .setColor(0xFFFFFF)
    .addField("beta , guru, verified")
    .setTimestamp()
    message.channel.send({embed});	
}

module.exports.help = {
  name:"roles"
}