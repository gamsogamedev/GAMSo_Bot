import discord
from env_loader import TOKEN, PREFIX, MARTIM_ID, SONA_ID, SONA_ID2, DESCRIPTION, BATE_PAPO_ID
from discord.ext.commands import Bot
from schedule import Reminder, Schedule_Cog, REMINDER_DICTIONARY

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