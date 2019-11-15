var unirest = require("unirest");

var req = unirest("POST", "https://us-central1-mdally.cloudfunctions.net/getmiddlest");

req.headers({
  "cache-control": "no-cache",
  "Connection": "keep-alive",
  "Content-Length": "22",
  "Accept-Encoding": "gzip, deflate",
  "Host": "us-central1-mdally.cloudfunctions.net",
  "Postman-Token": "66a0f6d6-7e55-4bba-aee8-6888617295c9,0a34b287-d7df-4ee3-b7da-96dc68d6baf7",
  "Cache-Control": "no-cache",
  "Accept": "*/*",
  "User-Agent": "PostmanRuntime/7.19.0",
  "Content-Type": "application/json"
});

req.type("json");
req.send({
  "string": "mikelange"
});

req.end(function (res) {
  if (res.error) throw new Error(res.error);

  console.log(res.body);
});

