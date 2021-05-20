import { twitterClient } from "../client"
import { Tweet } from "../types/tweet"

/**
 * Utility Function to reply to a tweet.
 * @param tweet Tweet to reply
 * @param reply Text to reply
 */
export const replyToTweet = (tweet: Tweet, reply: string) => {
  return twitterClient.tweets.statusesUpdate({
    status: `@${tweet.user.screen_name} ${reply}`,
    in_reply_to_status_id: tweet.id_str,
  })
}