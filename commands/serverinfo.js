const Discord = require("discord.js");
const server = require("../serverconfig.json");

module.exports.run = async (bot, message, args) => {
  const sicon = server.sicon;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Server Information")
    .setColor("#ffffff")
    .setThumbnail(sicon)
    .addField("Server Name", message.guild.name)
    .addField("Created On", message.guild.createdAt)
    .addField("You Joined", message.member.joinedAt)
    .addField("Total Members", message.guild.memberCount);

    message.channel.send(serverembed);
}

module.exports.help = {
  name:"serverinfo"
}
