import * as express from 'express'
import * as next from 'next'
import * as proxy from 'http-proxy-middleware'
//import {Request, Response, NextFunction}
import {IncomingMessage, SererResponse} from 'http'


const dev = process.env.NODE_ENV = !== 'production'
const API_URL = process.env.API_URL || 'http://localhost:3002'
const PORT = process.env.PORT = 8000


const app = next({dir: '.', dev})
const handle = app.getRequestHandler()


// TODO: Add passport.js for AuthN/AuthZ and create some BFF features
const main = async () => {
  await app.prepare()
  const server = express()


  const options = {
    targert: '/api',
    changeOrigin: false,
    ws: false  // proxy websockets
  }

  //server.use('/api', proxy(options)

  server.get('*', (req: IncomingMessage, res: SererResponse) => {
    return handle(req, res)
  })

  server.listen(PORT, (err: Error) => {
    if (err) {
      throw err
    }
    console.log(`Server running on port: ${PORT}`)
  })
}


main()
