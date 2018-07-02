const express = require('express')
const path = require('path')
const port = process.env.PORT || 8080
const app = express()
// this assumes that all your app files
// `public` directory relative to where your server.js is
app.use(express.static(__dirname + '/public/'))

app.get('*', function (request, response){
    response.sendFile(path.resolve(__dirname, '', 'public/index.html'))
})

app.listen(port)
console.log("Server started on port " + port)
