import openai
import requests
import requests
import shutil

from dotenv import dotenv_values
from datetime import datetime

CONFIG = dotenv_values('.env')

openai.api_key = CONFIG["KEY"]
openai.organization = CONFIG["ORG"]

def download(url: str = "") -> None:
    print(f"Downloading from {url}...")
    response = requests.get(url, stream = True)
    if response.status_code == 200:
        with open(f"img/{datetime.now().timestamp()}.png", "wb") as fh:
            response.raw.decode_content = True
            shutil.copyfileobj(response.raw, fh)

def generate_prompt(**kwargs) -> str:
    response = openai.Image.create(
        prompt = kwargs["prompt"],
        n = 1,
        size = "1024x1024"
    )
    return response['data'][0]['url']

def make_edit(**kwargs) -> str:
    response = openai.Image.create_edit(
        image = open(kwargs["src_img"], "rb"),
        mask = open("mask.png", "rb"),
        prompt = kwargs["prompt"],
        n = 1,
        size = "1024x1024"
    )
    return response['data'][0]['url']

def make_variation(**kwargs) -> str:
    response = openai.Image.create_variation(
        image = open(kwargs["src_img"], "rb"),
        n = 1,
        size = "1024x1024"
    )
    return response['data'][0]['url']

def main():
    # Actions
    actions = {
        1: generate_prompt,
        2: make_edit,
        3: make_variation
    }
    # Menu
    print("DALLE-2 Image generation", end = "\n\n")
    print("1. Generate from prompt")
    print("2. Generate an edit")
    print("3. Generate a variation", end = "\n\n")
    print("Q. At any time to quit")

    # Action
    src_img = ""
    prompt = ""
    try:
        action = int(input("Choose from menu above: "))
    except:
        exit()
    if action < 3:
        prompt = input("Enter prompt: ")
    if action >= 2:
        src_img = input("Enter path to source image: ")
    if prompt.lower() == "q" or src_img.lower() == "q":
        exit()
#    try:
    result = actions[action](prompt = prompt, src_img = src_img)
    download(url = result)
    #except:
    #    print("[ERROR] Something went wrong...")

if __name__ == "__main__":
    main()
