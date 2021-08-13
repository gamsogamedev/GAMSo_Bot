from env_loader import TOKEN
from discord import Embed, File
from discord.ext import commands
from discord.ext.commands import Bot, CommandNotFound
from apscheduler.schedulers.asyncio import AsyncIOScheduler

PREFIX = "honk "
OWNER_IDS = ["143109930134536192", "440569289670656010", "866520555436245032"] # Martim, Sona, Sona celular

scheduler = AsyncIOScheduler()

class GAMSo_Bot(Bot):
    async def on_ready(self):
        print('{0.user} is honking!'.format(self))

    async def on_message(self, message):
        if self.user == message.author:
            return
        if message.channel.id != 875853641037258762:
            return
        if message.content.startswith(PREFIX):
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

    '''
    @commands(name = 'echo', aliases = ['say', 'rp'])
    @commands.is_owner()
    async def echo_message(self, ctx, *, message):
        await ctx.message.delete()
        await ctx.send(message)
    '''
client = GAMSo_Bot(PREFIX)
client.run(TOKEN)