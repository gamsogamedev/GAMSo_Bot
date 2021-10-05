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
   
    /*
        Pegando commando como objeto, incluindo os possíveis apelidos do mesmo
    */
    const commandObject = client.commands.get(command) || client.commands.find(cmd => (cmd.aliases && cmd.aliases.includes(command));
    
    if(!commandObject) return;
    
    if(commandObject.adminOnly && !isAdmin(msg.member)) return msg.channel.send("Comando exclusivo da administração!");
    
    /*
        Pequena gambiarra abaixo, mas que se implementada corretamente funcionaria assim:
        - É possível passar uma quantidade "indefinida" de parâmetros para as funções 'execute' dos commandos usando um objeto
        - Como os objetos em JS são meio que por chave-valor, em cada comando você pode verificar se o campo do objeto que você precisa existe e usá-lo
        - Ex: no play, verifique se existe o campo "queue", e se existir, use
        
        Só talvez seja necessário pensar em uma forma de definir quais são realmente os parâmetros a serem passados em cada comando
        - Na linha abaixo, estamos sempre passando queue, o que claramente não é necessário
        - Uma forma de talvez resolver isso seria ter um campo no comando que nos dissesse qual argumento ele deseja?
    */
      
    const argObject = { queue };
    
    // Daria pra colocar essa linha abaixo em um try catch, mas pela forma que vocês tratam os erros, não sei se seria tão útil
    commandObject.execute(msg, command.slice(1), client, argObject);
    
});

client.login(TOKEN);
  
function isAdmin(member) {
    return member.permissions.has("ADMINISTRATOR");
}
