// modules:

const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const http = require('http')
const app = express()
const server = http.createServer(app)

// web routes:

const route = require('./routes/main')

// express setup:

app.set('view engine', 'ejs')
app.set('views', __dirname + '/webApp')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.json())
app.use(express.static('public'))

// webApp routing:

app.use('/',route)

// server host:

server.listen(process.env.PORT || 3000, e => {
    console.log(`Server running: Success.`)
})

server.on('error', error => {
console.error('Server running: Failed, \n Error: ' + error)
})