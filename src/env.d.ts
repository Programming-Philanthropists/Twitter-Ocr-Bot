declare global {
  namespace NodeJS {
    interface ProcessEnv {
      CONSUMER_KEY: string,
      CONSUMER_SECRET: string,
      ACCESS_TOKEN: string,
      ACCESS_TOKEN_SECRET: string
    }
  }
}

// We need to export something to make this file visible to ts :) 
export { }