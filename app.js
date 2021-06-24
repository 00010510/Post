    const express = require('express')
const app = express()

app.set('view engine', 'pug')

app.use('/static', express.static('public'))

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/categories', (req, res) => {
    res.render('categories')
})
app.get('/about', (req, res) => {
    res.render('about')
})
app.get('/Login', (req, res) => {
    res.render('Login')
})
app.get('/Sign', (req, res) => {
    res.render('Sign')
})
app.get('/book1_fan', (req, res) => {
    res.render('book1_fan')
})

app.listen(5000, err =>{
    if(err) console.log(err)

    console.log('Running')
})
