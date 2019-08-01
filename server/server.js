const express = require('express')
    , config = require('./config')

const app = express()
    , PORT = config.PORT

app.use(express.static(__dirname + '/../build'))

app.listen(PORT, ()=>console.log(`Server running on port ${PORT}`))