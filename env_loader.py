from os import getenv
from dotenv import load_dotenv

load_dotenv()

TOKEN = getenv('TOKEN')

PREFIX = getenv("PREFIX")
MARTIM_ID = getenv("MARTIM_ID")
SONA_ID = getenv("SONA_ID")
SONA_ID2 = getenv("SONA_ID2")

DESCRIPTION = getenv("DESCRIPTION")

DEV_CHANNEL_ID = int(getenv("DEV_CHANNEL_ID"))