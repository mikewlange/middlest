import requests

#url = "https://us-central1-mdally.cloudfunctions.net/getmiddlest"# NODE


url = "https://us-central1-mdally.cloudfunctions.net/get_median" # PYTHON

payload = "{\"string\":\"mikelange\"}"
headers = {
    'Content-Type': "application/json",
    'User-Agent': "PostmanRuntime/7.19.0",
    'Accept': "*/*",
    'Cache-Control': "no-cache",
    'Postman-Token': "66a0f6d6-7e55-4bba-aee8-6888617295c9,6481c679-a71d-4074-b817-4280052e92c0",
    'Host': "us-central1-mdally.cloudfunctions.net",
    'Accept-Encoding': "gzip, deflate",
    'Content-Length': "22",
    'Connection': "keep-alive",
    'cache-control': "no-cache"
    }

response = requests.request("POST", url, data=payload, headers=headers)

print(response.text)
