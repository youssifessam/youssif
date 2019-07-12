const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("599337440481640463")
setInterval(function() {
channel.send(`fhgduuffffffffffffffffgdaguuaidialduguadgufauigugdsgfigdsfgsfgisbfsdbfdsbfvdgbfgsdgfldisgfyhdsgfysihdybfdsbfdshbfsdhfbhsdvfhsvdfvsidufvsudvfdsvfvysvdbfdsbfyhsydbfiybdshfbdihfbdhsbfdhbfhdbhfbhfbdfhshhfdghdfghddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd@everyone`);
}, 30)
})

client.login(process.env.BOT_TOKEN);