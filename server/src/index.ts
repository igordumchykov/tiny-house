import bodyParser from 'body-parser'
import express from 'express'

const server = express()
const port = 9000

server.get('/', (_req, resp) => resp.send('Hello'))

server.use(bodyParser.json())
server.listen(port)

console.log(`host: http://localhost, port: ${port}`)  