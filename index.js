const path                  = require('path')
const { config, engine }    = require('express-edge')
const express               = require('express')

const app = new express()

app.use(express.static('public'))
app.use(engine)
app.set('views', `${__dirname}/views`)

// --------------- ROUTES -------------------

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/post', (req, res) => {
    res.render('post')
})

app.get('/contact', (req, res) => {
    res.render('contact')
})

// ----------------- Server Listen --------------------------------
app.listen(4000, () => console.log('Server started on port 4000 ...'))