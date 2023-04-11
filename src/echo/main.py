import openai
from dotenv import dotenv_values

CONFIG = dotenv_values(".env")

openai.api_key = CONFIG["KEY"]
openai.organization = CONFIG["ORG"]

data = open("./audio/traveler.mp3" , "rb")

transcript = openai.Audio.transcribe("whisper-1", data)
print(transcript["text"])

# outputs are saved in [results file](./output.md)