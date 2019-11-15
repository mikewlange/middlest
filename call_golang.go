package main

import (
	"fmt"
	"strings"
	"net/http"
	"io/ioutil"
)

func main() {

// To test both just comment the other out. 
	 //service_python := "https://us-central1-mdally.cloudfunctions.net/getmiddlest" // node

   service_python := "https://us-central1-mdally.cloudfunctions.net/get_median"  // python

	payload := strings.NewReader("{\"string\":\"mikelange\"}")

	req, _ := http.NewRequest("POST", service_python, payload)

	req.Header.Add("Content-Type", "application/json")
	req.Header.Add("User-Agent", "PostmanRuntime/7.19.0")
	req.Header.Add("Accept", "*/*")
	req.Header.Add("Cache-Control", "no-cache")
	req.Header.Add("Host", "us-central1-mdally.cloudfunctions.net")
	req.Header.Add("Accept-Encoding", "gzip, deflate")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := ioutil.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
