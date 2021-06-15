const express = require('express');
const app = express();
//  // app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

// app.use((req, res) => {
// })

app.use('/static', express.static('public'))

app.listen(3000, (req, res) => {
    console.log('Listening on 3000');
})

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/products', (req, res) => {
    res.render('products');
})

app.get('/about', (req, res) => {
    res.render('about');
})

app.get('/contact', (req, res) => {
    res.render('contact');
})
