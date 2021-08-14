from discord.ext.commands.cog import Cog
from discord.ext.commands import command
from discord.ext import commands
from apscheduler.schedulers.asyncio import AsyncIOScheduler
import datetime as dt
from apscheduler.triggers.cron import CronTrigger

def create_datetime(day, month, year, hour, minute, second):
    return dt.datetime.combine(dt.date(year, month, day), dt.time(hour, minute, second))

#def create_timedelta_from_subtraction(datetime_left, datetime_right):
    #return datetime_left - datetime_right

def create_timedelta_from_time(weeks, days, hours, minutes, seconds):
    return dt.timedelta(days = days, seconds = seconds, minutes = minutes, hours = hours, weeks = weeks)

REMINDER_DICTIONARY = {
    "weekly_meeting": {
        "channel_id": 496363854218002438,
        "name": "Reunião Semanal",
        "data": "Entrem na reunião! Estamos começando agora!\nhttps://meet.google.com/ugc-cbwd-fwo",
        "cronometer": CronTrigger(day_of_week="fri", hour="17")
        #"date": create_datetime(20, 8, 2021, 17, 0, 0),
        #"redo": (True, create_timedelta_from_time(1, 0, 0, 0, 0))
    },
    "test": {
        "channel_id": 875853641037258762,
        "name": "teste da família",
        "data": "oi Martim eu to so testandokk",
        "cronometer": CronTrigger(second="30")
        #"cronometer": CronTrigger(minute="0,5,10,15,20,25,30,35,37,40,45,50,55")
        #"date": create_datetime(14, 8, 2021, 3, 5, 0),
        #"redo": (True, create_timedelta_from_time(0, 0, 0, 5, 0))
    }
    
}

'''
now = dt.datetime.now()
target_date = reminder_dictionary["test"]["date"]
subtracted = target_date - now #create_timedelta_from_subtraction(target_date, now)
time_left = subtracted.total_seconds()
print(f'{now = }\n{target_date = }\n{subtracted = }\n{time_left = }')
'''

class Reminder:
    def __init__(self, data_dictionary, send_message):
        self.scheduler = AsyncIOScheduler()
        self.data = data_dictionary
        self.send_message = send_message
        for index in self.data:
            self.new_schedule_date(self.data[index])
    
    async def remind(self, name, data, channel_id):
        await self.send_message(channel_id, f"{name}\n{data}")

    def start(self):
        self.scheduler.start()

    def new_schedule_date(self, data):
        self.scheduler.add_job(self.send_message, data["cronometer"], args={data["channel_id"], f'{data["name"]}\n{data["data"]}'})

'''
from apscheduler.schedulers.asyncio import AsyncIOScheduler
scheduler = AsyncIOScheduler()
'''

class Schedule_Cog(Cog, name = 'Schedule Cog'):
    def __init__(self, bot):
        self.bot = bot

    @command(name = 'schedule', aliases = ['sc', 'sched', 'horarios'])
    async def print_schedule(self, ctx, *, message):
        await ctx.message.delete()
        await ctx.send(message)