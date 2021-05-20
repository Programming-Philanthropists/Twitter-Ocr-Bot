// import { twitterClient } from "../client";
import { Tweet } from "../types/tweet";
import { replyToTweet } from "../utils/twitterUtils";

export const handleStream = async (tweet: Tweet) => {
  // This is just a placeholder code. Real code needs to be written.
  const replied = await replyToTweet(tweet, "Yes Bro. If you see this, The api is working fine!")
  console.log(replied)
}