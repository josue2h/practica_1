require ('dotenv').config()
const http = require('http')

//const hostName = '127.0.0.1'

//const port = 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('hello word')
})

server.listen(process.env.DB_PORT, process.env.DB_HOST, () => {
  console.log(`listen server http://${process.env.DB_HOST}:${process.env.DB_PORT}`)
})