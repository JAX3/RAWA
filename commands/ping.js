
const Discord = require("discord.js");//require discord.js from the module folder
const config = require("../serverconfig.json")//requireing the serverconfig file
module.exports.run = async (client, message, args) => {
  var time = 4000;//time 4 seconds 
      let pingEmbed = new Discord.RichEmbed()
      .setTitle("Pong")
      .setColor(config.red)//embed colour.
      .setDescription(`Pong! ⏱: ${Math.round(client.ping)}ms`)//displaying the client's ping ms
      .setThumbnail('⏱')
      
      message.channel.send(pingEmbed).then(m => m.delete(time));//message send/delete
}

module.exports.help = {
  name:"ping"//command name 
}
