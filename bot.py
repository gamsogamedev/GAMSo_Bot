import discord
from env_loader import TOKEN, PREFIX, MARTIM_ID, SONA_ID, SONA_ID2, DESCRIPTION, DEV_CHANNEL_ID
from discord import Embed, File
from discord.ext import commands
from discord.ext.commands import Bot
#from discord.ext.commands import CommandNotFound
from discord.ext.commands import command
from discord.ext.commands import Cog
from apscheduler.schedulers.asyncio import AsyncIOScheduler

scheduler = AsyncIOScheduler()

class GAMSo_Bot(Bot, Cog):

    def __init__(self):

        self.ready = False
        self.command_prefix = PREFIX

        self.description = DESCRIPTION
        self.owner_ids = set([MARTIM_ID, SONA_ID, SONA_ID2]) # Martim, Sona, Sona celular

        super().__init__(command_prefix = self.command_prefix, description = self.description, owner_ids = self.owner_ids)

    def run(self):

        print("tamo on")

        return super().run(TOKEN, reconnect = True)

    async def on_ready(self):
        print('{0.user} is honking!'.format(self))

    async def process_commands(self, message):
        ctx = await self.get_context(message)
        print(ctx.command)
        await self.invoke(ctx)

    async def on_message(self, message : discord.Message):
        if not message.author.bot:
            await self.process_commands(message)

        if (self.user == message.author) or (message.channel.id != DEV_CHANNEL_ID):
            return
        elif message.content.startswith(PREFIX):
            content = message.content[(len(PREFIX) - 1):].split(" ")[1:]
            command, args = content[0], content[1:]
            print(content)
            if command == "schedule":
                if args[0] == "-p":
                    #print_schedule()
                    await message.channel.send("-p chamado")
                elif args[0] == "-e":
                    #edit_schedule(args[1:])
                    await message.channel.send("-e chamado")
        elif "honk" in message.content.lower():
            await message.channel.send("Honk!")

botzasso = GAMSo_Bot()

@botzasso.command(name = 'echo')
async def _echo(ctx, message: str):
    await ctx.message.delete()
    await ctx.send(message)

botzasso.run()