// Loading ENV
import { config } from 'dotenv'
config()

import { twitClient } from "./client";
import { handleStream } from './Handlers/handleStream';

// TODO: Update username when decided!!!
const Stream = twitClient.stream("statuses/filter", { track: ["piyushsthr"] })

// Stream
Stream.on("tweet", handleStream)
