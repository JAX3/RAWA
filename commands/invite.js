const Discord = require("discord.js");

const server = require("../serverconfig.json");


const green = server.green;
const sicon = server.sicon;
const  invite = server.invite;
const twittr = server.twittr;
const website = server.website;



module.exports.run = async (bot, message, args) => {

let serverInvite = new Discord.RichEmbed()
.setTitle("Server Invite")
.setThumbnail(sicon)
.setColor(green)
.setField("Server Invite link",invite)
.setField("Twitter",twittr )
.setField("Website",website)

.setFooter("This invite has infinite uses.")
message.author.send(serverInvite);
}

   
module.exports.help = {
    name: 'invite'
};
