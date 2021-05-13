// Loading ENV
import { config } from 'dotenv'
config()

import { client } from "./client";


const Stream = client.stream("statuses/filter", { track: '#covid', lang: "en" })

Stream.on("tweet", function (tweet) {
  console.log(tweet)
})