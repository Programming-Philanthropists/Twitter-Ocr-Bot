// import { TwitterClient } from "twitter-api-client";
import * as Twit from "twit";

// export const twitterClient = new TwitterClient({
//   apiKey: process.env.API_KEY,
//   apiSecret: process.env.API_SECRET,
//   accessToken: process.env.ACCESS_TOKEN,
//   accessTokenSecret: process.env.ACCESS_TOKEN_SECRET
// })

export const client = new Twit({
  consumer_key: process.env.API_KEY!,
  consumer_secret: process.env.API_SECRET!,
  access_token: process.env.ACCESS_TOKEN!,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET!
})
