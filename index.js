require('dotenv').config();

const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

const prefix = "honk ";

client.on("ready", () => {
    console.log("HONK!");
    client.user.setPresence(
        {
            game: {
                name: "honk help", type: 0 
            }
        }
    );
});

client.login(process.env.TOKEN);