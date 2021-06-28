const express = require('express')
const app = express()

const fs = require ('fs')

app.set('view engine', 'pug')

app.use(express.static(__dirname + '/public'));

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

app.get('/Create_blog', (req, res) => {
    res.render('Create_blog')
})

app.post('/Create_blog', (req, res) => {
     
    const title = req.body.title
    const text = req.body.text
    
    if (title.trim() === '' && text.trim() === ''){
        res.render('/Create_blog', {error: true})
    } else {
        fs.readFile('./data/notes.json', (err, data) =>{
            if (err) throw err
            
            const blogs = JSON.parse(data)

            blogs.push({
                id: id (),
                title: title,
                text: text,
            })
         

            fs.writeFile('./data/notes.json', JSON.stringify(blogs), err =>{
                if(err) throw err

                res.render('Create_blog', {success: true})
            })
        })
    }
})


app.get('/blogs', (req, res) => {
    fs.readFile('./data/notes.json', (err, data) =>{
        if(err) throw err
        
        const blogs = JSON.parse(data)
        res.render('blogs',{ blogs: blogs})
    })
})
      
   



app.get('/blogs/:id', (req, res) => {
        const id = req.params.id
        fs.readFile('./data/notes.json', (err, data) =>{
            if(err) throw err
            
            const blogs = JSON.parse(data)

            const blog = blogs.filter(blog => blog.id ==id)[0]

            res.render( 'detail', {blog: blog})
        })

     

})

app.get('/book1_fan', (req, res) => {
    res.render('book1_fan')
})
app.get('/book2_fan', (req, res) => {
    res.render('book2_fan')
})
app.get('/book3_fan', (req, res) => {
    res.render('book3_fan')
})
app.get('/book4_fan', (req, res) => {
    res.render('book4_fan')
})
app.get('/book5_fan', (req, res) => {
    res.render('book5_fan')
})
app.get('/book6_fan', (req, res) => {
    res.render('book6_fan')
})
app.get('/book7_fan', (req, res) => {
    res.render('book7_fan')
})
app.get('/book8_fan', (req, res) => {
    res.render('book8_fan')
})
app.get('/book9_fan', (req, res) => {
    res.render('book9_fan')
})
app.get('/book10_fan', (req, res) => {
    res.render('book10_fan')
})
app.get('/book1_cl', (req, res) => {
    res.render('book1_cl')
})
app.get('/book2_cl', (req, res) => {
    res.render('book2_cl')
})
app.get('/book3_cl', (req, res) => {
    res.render('book3_cl')
})
app.get('/book4_cl', (req, res) => {
    res.render('book4_cl')
})
app.get('/book5_cl', (req, res) => {
    res.render('book5_cl')
})
app.get('/book6_cl', (req, res) => {
    res.render('book6_cl')
})
app.get('/book7_cl', (req, res) => {
    res.render('book7_cl')
})
app.get('/book8_cl', (req, res) => {
    res.render('book8_cl')
})
app.get('/book9_cl', (req, res) => {
    res.render('book9_cl')
})
app.get('/book10_cl', (req, res) => {
    res.render('book10_cl')
})


app.listen(5000, err =>{
    if(err) console.log(err)

    console.log('Running')
});

function id () {
    return '_' + Math.random().toString(36).substr(2, 9);
 };