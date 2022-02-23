const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const nunjucks = require('nunjucks')

const router = require('./routers/index')
app.use(express.static('assets'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.set('view engine', 'html')
nunjucks.configure('views',{express:app})

app.use('/',router)
app.listen(3000,()=>{
    console.log('server on')
})