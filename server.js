const { createServer } = require('https')
const { parse } = require('url')
const next = require('next')
const fs = require('fs')
const path = require('path')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const httpsOptions = {
  key: fs.readFileSync(path.join(__dirname, '192.168.1.199+3-key.pem')),
  cert: fs.readFileSync(path.join(__dirname, '192.168.1.199+3.pem')),
}

app.prepare().then(() => {
  createServer(httpsOptions, (req, res) => {
    const parsedUrl = parse(req.url, true)
    handle(req, res, parsedUrl)
  }).listen(3000, '0.0.0.0', (err) => {
    if (err) throw err
    console.log('> Ready on https://192.168.1.199:3000')
  })
})
