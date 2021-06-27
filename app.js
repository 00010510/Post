const express = require('express')
const app = express()

const fs = require ('fs')

app.set('view engine', 'pug')

app.use(express.static(__dirname + '/public'));
var path = require('path')

app.use(express.urlencoded({ extended: false }))

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

app.get('/blog', (req, res) => {
    res.render('blog')
})

app.post('/blog', (req, res) => {

    const title = req.body.title
    const text = req.body.text
    
    if(title.trim() === '' && text.trim() === '') {
        res.render('blog', { error: true })
    } else{
        fs.readFile('./data/notes.json', (err, data) => {
            if(err) throw err

            const blogs = JSON.parse(data)

            blogs.push({
                id: id(),
                title: title,
                text: text,
            })

            fs.writeFile('./data/notes.json', JSON.stringify(blogs), err => {
                if (err) throw err

                res.render('blog', {success: true})
           
            })
        }) 
    }
    

})



app.get('/blogs', (req, res) => {
    

    fs.readFile('./data/notes.json', (err, data) => {
        if (err) throw err

        const blogs = JSON.parse(data)
        
        res.render('blogs',{ blogs: blogs})
    })
 
})


app.get('/blogs/detail', (req, res) => {
    res.render( 'detail')
})

app.get('/book1_fan', (req, res) => {
    res.render('book1_fan')
})

    

app.listen(5000, err =>{
    if(err) console.log(err)

    console.log('Running')
});

function id () {
    
    return '_' + Math.random().toString(36).substr(2, 9);
};