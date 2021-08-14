from discord.ext.commands.cog import Cog
from discord.ext.commands import command
from discord.ext import commands


class Teste_cog(Cog, name= 'Teste cog'):
    def __init__(self, bot):
        self.bot = bot

    @command(name = 'echo', aliases = ['say', 'rp'])
    @commands.is_owner()
    async def echo_message(self, ctx, *, message):
        await ctx.message.delete()
        await ctx.send(message)