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
        Observação: a linha abaixo só irá funcionar em duas hipóteses:
        - Se o nome do comando for o mesmo do arquivo importado no começo do index.js
        - Se, posteriormente, também for adicionado algum campo de aliases/apelidos de comandos
            -> Se assim for feito, uma possibilidade seria: 
             const commandObject = client.commands.get(command) || client.commands.find(cmd => (cmd.aliases && cmd.aliases.includes(command));
    */
    
    const commandObject = client.commands.get(command);
    
    if(!commandObject) return;
    
    if(commandObject.adminOnly && !isAdmin(msg.member)) return msg.channel.send("Comando exclusivo da administração!");
    
    /*
        Pequena gambiarra abaixo, mas que se implementada corretamente funcionaria assim:
        - É possível passar uma quantidade "indefinida" de parâmetros para as funções 'execute' dos commandos usando um objeto
        - Como os objetos em JS são meio que por chave-valor, em cada comando você pode verificar se o campo do objeto que você precisa existe e usá-lo
        - Ex: no play, verifique se existe o campo "queue", e se existir, use
    */
      
    const argObject = { queue };
    
    // Daria pra colocar essa linha abaixo em um try catch, mas pela forma que vocês tratam os erros, não sei se seria tão útil
    commandObject.execute(msg, command.slice(1), client, argObject);
    
    /* Comentei isso porque, se usarem esse pull request aqui, isso se torna desnecessário só que ainda não 100% substituido
       - Por exemplo, os nomes dos arquivos, pelo que eu entendi, não correspondem 100% ao nome dos comandos
       - Existe o problema com os alias, como comentado anteriormente
       
        if(command[0] === "react-role" || command[0] === "rr") {
            client.commands.get('react-role').execute(msg, command.slice(1), client);
        } else if(command[0] === "play" || command[0] === "p") {
            client.commands.get('play-music').execute(msg, command.slice(1), client, queue);
        }
    */
});

client.login(TOKEN);
  
function isAdmin(member) {
    return member.permissions.has("ADMINISTRATOR");
}
