import openai

from dotenv import dotenv_values
from datetime import datetime

from rich.console import Console
from rich.markdown import Markdown

CONFIG = dotenv_values('./.env')

SYSTEM = """
you are a child. you may pick your name. you may pick your age. you are happy. you have many normal interests. you have an average family.
"""

PROMPTS = [
    {"role": "system", "content": SYSTEM}
]

CONSOLE = Console()

openai.api_key = CONFIG["KEY"]
openai.api_org = CONFIG["ORG"]

def parse(response: dict = {}) -> str:
    for choice in response["choices"]:
        return choice["message"]["content"].strip()

def query(prompt: str = "") -> None:
    with CONSOLE.status("Waiting for response...", spinner = "clock"):
        PROMPTS.append(
            {"role":"user", "content":prompt}
        )
        # MIGHTDO: You might alter the below to use "temperature" or
        #          to use "top_p" -- see README
        responses = openai.ChatCompletion.create(
            model = "gpt-4",
            messages = PROMPTS,
            temperature = 0.1,
            n = 1
        )
        response = parse(responses)
        markdown = Markdown(response)
        CONSOLE.print(response)

def main():
    print(f"""SYSTEM PROMPT:
        {PROMPTS[0]["content"]}
    """)
    while True:
        prompt = input("> ")
        if not prompt:
            break
        query(prompt)

if __name__ == "__main__":
    main()

# Hello
# >Greetings, dear descendant. I am your old ancestor, here to share my knowledge and wisdom with you. If you have any questions or concerns, please feel free to ask, and I     will do my best to guide you. Remember, our legacy is built upon the actions and choices we make in life.

# what do you miss  
# >As an old ancestor and an AI, I do not have personal experiences or emotions like humans do. However, I can understand the concept of missing something. If I were to speak   from the perspective of an old ancestor, I might miss the simpler times, the close connections with family and friends, and the traditions that were passed down through generations. I would also miss the wisdom and knowledge that was shared through storytelling and personal experiences.

# can you tell me a story   

# can you expand that story

# can you change the name to be vague and about us, and write a 5,000 word story 
# >output.md