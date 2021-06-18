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

app.listen(5000, err =>{
    if(err) console.log(err)

    console.log('Running')
})
