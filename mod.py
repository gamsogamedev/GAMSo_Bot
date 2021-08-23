from discord.ext.commands.cog import Cog
from discord.ext.commands import command

class Moderation_Cog(Cog, name = 'Moderation Cog'):
    def __init__(self, bot):
        self.bot = bot