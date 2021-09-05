require('dotenv').config();

const { Client, Intents, MessageEmbed, Collection } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS] });
const fs = require('fs');

const PREFIX = process.env.PREFIX;
const TOKEN = process.env.TOKEN;

client.commands = new Collection();

const commandFiles = fs.readdirSync("./commands/").filter(file => file.endsWith(".js"));
for(const file of commandFiles) {
    const command = require("./commands/" + file);
    client.commands.set(command.name, command);
}

client.once("ready", () => {
    console.log("HONK!");
    client.user.setPresence(
        {
            game: {
                name: "honk help", type: 0 
            }
        }
    );
});

client.on("messageCreate", msg => {
    if(msg.author.bot) return;
    if(msg.content.startsWith(PREFIX)) {
        const command = msg.content.replace(PREFIX, "").split(" ");
        if(command[0] === "react-role" || command[0] === "rr") {
            if(!isAdmin(msg.member)) return msg.channel.send("TA METENDO O LOKO TIO TA ACHANDO QUE EH ADM???");
            client.commands.get('react-role').execute(msg, command.slice(1), client);
        }
    }
});

/*
console.log("'" + process.env.TOKEN + "'");
console.log("'" + process.env.PREFIX + "'");
*/
client.login(TOKEN);
  
function isAdmin(member) {
    return member.permissions.has("ADMINISTRATOR");
}

/* bot.py
import discord # 3
from env_loader import TOKEN, PREFIX, MARTIM_ID, SONA_ID, SONA_ID2, DESCRIPTION, BATE_PAPO_ID # 1
from discord.ext.commands import Bot # X
from schedule import Reminder, Schedule_Cog, REMINDER_DICTIONARY # TODO
from mod import Moderation_Cog # TODO

class GAMSo_Bot(Bot):
    def __init__(self):
        self.ready = False
        self.command_prefix = PREFIX
        self.description = DESCRIPTION
        self.owner_ids = set([MARTIM_ID, SONA_ID, SONA_ID2]) # Martim, Sona, Sona celular

        self.reminder = Reminder(REMINDER_DICTIONARY, self.send_message)

        self.reminder.start()

        super().__init__(self.command_prefix, description = self.description, owner_ids = self.owner_ids)

    def run(self):
        return super().run(TOKEN, reconnect = True)

    async def send_message(self, text, channel_id):
        print(f"{channel_id = }\n{text = }")
        channel = self.get_channel(channel_id)
        await channel.send(text)

    async def on_ready(self):
        print('{0.user} is honking!'.format(self))

        
        self.add_cog(Moderation_Cog(self))
        print('Finished loading moderation commands.')

        self.add_cog(Schedule_Cog(self))
        print('Finished loading schedule commands.')

    async def on_message(self, message : discord.Message):
        if not message.author.bot:
            await self.process_commands(message)

    async def on_command_error(self, context, exception):
        print(exception)
        await context.channel.send("Comando desconhecido.")

    async def on_member_join(self, member):
        await self.get_channel(BATE_PAPO_ID).send('Bem vinde ao discord do GAMSo {}! É um prazer te ter por aqui!\nSinta se a vontade pra se apresentar e conversar com a gente. Confira também nossos jogos e redes sociais!'.format(member.mention))
*/