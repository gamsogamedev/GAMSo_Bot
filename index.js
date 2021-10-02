require('dotenv').config();

const { Client, Intents, MessageEmbed, Collection } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_VOICE_STATES] });
const fs = require('fs');

const PREFIX = process.env.PREFIX;
const TOKEN = process.env.TOKEN;
const DEV_CHANNEL_ID = process.env.DEV_CHANNEL_ID;

const queue = new Map();

client.commands = new Collection();

const commandFiles = fs.readdirSync("./commands/").filter(file => file.endsWith(".js"));
for(const file of commandFiles) {
    const command = require("./commands/" + file);
    client.commands.set(command.name, command);
}

client.once("ready", () => {
    console.log("HONK!");
    client.user.setActivity('gamejams!', { type: 'COMPETING' });
});

client.on("error", (err, command) => {
    dumpChannel = client.channels.cache.get(DEV_CHANNEL_ID);
    dumpChannel.send(`Erro no comando ${command}:\n${err.message}`);
    throw err;
});

client.on("messageCreate", msg => {
    if(msg.author.bot) return;
    if(!msg.content.startsWith(PREFIX)) return;

    const command = msg.content.replace(PREFIX, "").split(" ");

    if(command[0] === "react-role" || command[0] === "rr") {
        if(!isAdmin(msg.member)) return msg.channel.send("Comando exclusivo da administração!");
        client.commands.get('react-role').execute(msg, command.slice(1), client);
    } else if(command[0] === "play" || command[0] === "p") {
        client.commands.get('play-music').execute(msg, command.slice(1), client, queue);
    }
});

client.login(TOKEN);
  
function isAdmin(member) {
    return member.permissions.has("ADMINISTRATOR");
}