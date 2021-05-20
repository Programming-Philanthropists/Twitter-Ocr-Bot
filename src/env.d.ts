declare global {
  namespace NodeJS {
    interface ProcessEnv {
      API_KEY: string,
      API_SECRET: string,
      ACCESS_TOKEN: string,
      ACCESS_TOKEN_SECRET: string
      USERNAME: string
    }
  }
}

// We need to export something to make this file visible to ts :) 
export { }