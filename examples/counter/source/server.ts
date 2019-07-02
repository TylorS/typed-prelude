import { createDomEnv, render, withHooks } from '@typed/dom'
import { pathJoin } from '@typed/history'
import express from 'express'
import { Counters } from './Counters'

const beginning = `
  <!doctype html>
  <html>
    <head>
      <title>Typed SSR</title>
    </head>

  <body>

`

const ending = `
    <script src="/client.js"></script>
  </body>
</html>
`

const app = express()

app.use(express.static(`dist`))

app.use((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' }).write(beginning)

  const { document } = createDomEnv({
    serverUrl: req.protocol + '//' + pathJoin([req.headers.host || '/', req.url]),
  })

  const view = render(document.body, withHooks(Counters))

  res.write(view.outerHTML + ending)
  res.end()
})

app.listen(8080, () => {
  console.log('Listening on 8080')
})
