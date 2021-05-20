import { TwitterClient } from "twitter-api-client";
import * as Twit from "twit";

/**
 * We will use `twitter-api-client` and `twit` simultaneouly.
 * Since `twutter-api-client` provide type safe way to interact with twitter apis.
 * but it doesn't provide options for stream apis.
 */

export const twitterClient = new TwitterClient({
  apiKey: process.env.API_KEY!,
  apiSecret: process.env.API_SECRET!,
  accessToken: process.env.ACCESS_TOKEN!,
  accessTokenSecret: process.env.ACCESS_TOKEN_SECRET!
})

export const twitClient = new Twit({
  consumer_key: process.env.API_KEY!,
  consumer_secret: process.env.API_SECRET!,
  access_token: process.env.ACCESS_TOKEN!,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET!
})


