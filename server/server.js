
dotenv = require('dotenv').config()

const express = require('express')
    , cors = require('cors')
    , bodyParser = require('body-parser')
    , app = new express()

ReactDOMServer.renderToString(<Handler />);
const helmet = Helmet.renderStatic();

app.use(bodyParser.json())
app.use(cors())

// This is for the NPM RUN BUILD
app.use(express.static(__dirname + '/../public'))

// Port
app.listen(4250, _ => {
    console.log(`Everything is running on PORT 4250`)
})