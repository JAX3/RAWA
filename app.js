const fs = require("fs");
const Discord = require('discord.js');
const client = new Discord.Client({disableEveryone: true});
const config = require ("./config.json");
client.login(config.token);
let cooldown = new Set();
let cdseconds = 5;

client.commands = new Discord.Collection();
//command handler.
fs.readdir("./commands/", (err, files) => {

	if(err) console.log(err);
	let jsfile = files.filter(f => f.split(".").pop() === "js");
	if(jsfile.length <= 0){
	  console.log("Couldn't find commands.");
	  return;
	}
  
	jsfile.forEach((f, i) =>{
	  let props = require(`./commands/${f}`);
	  console.log(`${f} loaded!`);
	  
	  client.commands.set(props.help.name, props);
	});
	});
	

//on ready stuff.
client.on("ready",async() => {

	client.user.setUsername("RAWI");
	client.user.setPresence({ game: { name:" RAWA Bot",type: "WATCHING"}  });


	

});

// welcome new user
	client.on('guildMemberAdd',async (member) => {
		let  channel =  client.channels.get(config.welcome);
		
		channel.send(`Welcome ${member}!, Please Read the <#438395434524999680> first, and have fun.<:Smiley:480000983263608843>`);
		console.log(`${member.user.username} has joined`);
	
	  }); 


//roles need to adjust once i get the roles.
client.on('message', async message =>{
if(message.content.toLocaleLowerCase().startsWith(config.prefix+'role'))
{
	var args = message.content.toLocaleLowerCase().split(" ");
	console.log(args);
	if(args[1] ==='beta')
	{
		addrole('Beta tester',message);
		
}

else if (args[1] === 'guru')
{
	addrole('Community guru	',message);
	
}
	else if (args[1] === 'verified')
{
	addrole('Verified',message);
	
}

}});



function addrole(roleName,  message)
{
	var role = message.guild.roles.find('name', roleName);


	message.member.addRole(role.id);
	message.channel.send('Do',+ config.prefix + ('roles \n for the role list.'));
	message.reply( roleName + ` Added`);
	console.log("role found");
	return;
}



//important stuff
 
client.on('message', (message)=>{
	if(!message.content.startsWith(config.prefix)) return;
	if(cooldown.has(message.author.id)){
	  message.delete();
	  return message.reply("You have to wait 5 seconds between commands.")
	}
	if(!message.member.hasPermission("ADMINISTRATOR")){
	  cooldown.add(message.author.id);
	}
  
  
	let messageArray = message.content.split(" ");
	let cmd = messageArray[0];
	let args = messageArray.slice(1);
  
	let commandfile = client.commands.get(cmd.slice(config.prefix.length));
	if(commandfile) commandfile.run(client,message,args);
  
	setTimeout(() => {
	  cooldown.delete(message.author.id)
	}, cdseconds * 1000)
  
  });
  


	//censoring stuff
	client.on('message',(message)=>{
		var sender = message.author;//works
		var msg = message.content.toLowerCase();
		let prof = require('./profanity.json');
	
		
		if(sender.id === '482266770422628375'){
			return;
		
		}
		if(prof.censor.some(word => msg.includes(word))){
	
		
					message.delete();
					console.log(msg)

						message.reply("Please dont use that type of language in here.")
		
				

			


		}});



