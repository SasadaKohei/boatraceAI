# coding: UTF-8

import requests
from bs4 import BeautifulSoup
import json


def scraping():
    # url
    url = 'https://kyotei.sakura.ne.jp/kekka_all.php'

    # get html
    html = requests.get(url)

    # set BeautifulSoup
    soup = BeautifulSoup(html.text, "lxml")
    for script in soup(["style"]):
        script.decompose()

    text = soup.get_text()
    lines = [line.strip() for line in text.splitlines()]
    text = "\n".join(line for line in lines if line)

    open_venue_list = []

    # 本日の開催レース情報
    if "01#" in text:
        # print("桐生")
        # open_venue_list.append("桐生")
        open_venue_list.append(0)

    if "02#" in text:
        # print("戸田")
        # open_venue_list.append("戸田")
        open_venue_list.append(1)

    if "03#" in text:
        # print("江戸川")
        # open_venue_list.append("江戸川")
        open_venue_list.append(3)

    if "04#" in text:
        # print("平和島")
        # open_venue_list.append("平和島")
        open_venue_list.append(4)

    if "05#" in text:
        # print("多摩川")
        # open_venue_list.append("多摩川")
        open_venue_list.append(5)

    if "06#" in text:
        # print("浜名湖")
        # open_venue_list.append("浜名湖")
        open_venue_list.append(6)

    if "07#" in text:
        # print("蒲郡")
        # open_venue_list.append("蒲郡")
        open_venue_list.append(7)

    if "08#" in text:
        # print("常滑")
        # open_venue_list.append("常滑")
        open_venue_list.append(8)

    if "09#" in text:
        # print("津")
        # open_venue_list.append("津")
        open_venue_list.append(9)

    if "10#" in text:
        # print("三国")
        # open_venue_list.append("三国")
        open_venue_list.append(10)

    if "11#" in text:
        # print("びわこ")
        # open_venue_list.append("びわこ")
        open_venue_list.append(11)

    if "12#" in text:
        # print("住之江")
        # open_venue_list.append("住之江")
        open_venue_list.append(12)

    if "13#" in text:
        # print("尼崎")
        # open_venue_list.append("尼崎")
        open_venue_list.append(13)

    if "14#" in text:
        # print("鳴門")
        # open_venue_list.append("鳴門")
        open_venue_list.append(14)

    if "15#" in text:
        # print("丸亀")
        # open_venue_list.append("丸亀")
        open_venue_list.append(15)

    if "16#" in text:
        # print("児島")
        # open_venue_list.append("児島")
        open_venue_list.append(16)

    if "17#" in text:
        # print("宮島")
        # open_venue_list.append("宮島")
        open_venue_list.append(17)

    if "18#" in text:
        # print("徳山")
        # open_venue_list.append("徳山")
        open_venue_list.append(18)

    if "19#" in text:
        # print("下関")
        # open_venue_list.append("下関")
        open_venue_list.append(19)

    if "20#" in text:
        # print("若松")
        # open_venue_list.append("若松")
        open_venue_list.append(20)

    if "21#" in text:
        # print("芦屋")
        # open_venue_list.append("芦屋")
        open_venue_list.append(21)

    if "22#" in text:
        # print("福岡")
        # open_venue_list.append("福岡")
        open_venue_list.append(22)

    if "23#" in text:
        # print("唐津")
        # open_venue_list.append("唐津")
        open_venue_list.append(23)

    if "24#" in text:
        # print("大村")
        # open_venue_list.append("大村")
        open_venue_list.append(24)
        
    json_list = json.dumps(open_venue_list, ensure_ascii=False)

    return json_list
    # return open_venue_list

if __name__ == '__main__':
    scraping()