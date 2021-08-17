from os import getenv
from dotenv import load_dotenv

load_dotenv()

TOKEN = getenv('TOKEN')

PREFIX = getenv("PREFIX")
MARTIM_ID = int(getenv("MARTIM_ID"))
SONA_ID = int(getenv("SONA_ID"))
SONA_ID2 = int(getenv("SONA_ID2"))

DESCRIPTION = getenv("DESCRIPTION")

DEV_CHANNEL_ID = int(getenv("DEV_CHANNEL_ID"))
BATE_PAPO_ID = int(getenv("BATE_PAPO_ID"))