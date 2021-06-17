require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
// const path = require('path')
const productModel = require('C:/Users/Adel/Desktop/Repos/MoonlightShopWebApp/models/productSchema.js');

const databaseName = 'moonlightshop_db'
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@moonlightshopcluster-m0.ty7sx.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// async function test() {
//     try {

//     }
//     finally {
//         mongoose.connection.close();
//     }
//     test().catch(console.dir);
// }
// const MongoClient = require('mongodb').MongoClient;
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


const app = express();
//   app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set('view engine', 'ejs');


//Routes

app.use('/static', express.static('public'));

app.listen(process.env.PORT, (req, res) => {
    console.log('Listening on 3000');
});

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/products', (req, res) => {
    productModel.find({}, (err, items) => {
        if (err) {
            console.log(err);
            res.status(500).send('An error occurred', err);
        }
        else {
            res.render('products', { items: items });
        }
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

//upload handler
const storage = multer.memoryStorage()
const upload = multer({ storage: storage });

// get request img page

app.get('/imagesPage', (req, res) => {
    productModel.find({}, (err, items) => {
        if (err) {
            console.log(err);
            res.status(500).send('An error occurred', err);
        }
        else {
            res.render('imagesPage', { items: items });
        }
    });
});

// post request of img to db

app.post('/imagesPage', upload.single('image'), (req, res, next) => {
    var obj = {
        name: req.body.name,
        desc: req.body.desc,
        img: {
            data: req.file.buffer,
            contentType: 'image/png'
        }
    };
    productModel.create(obj, (err, item) => {
        if (err) {
            console.log(err);
        }
        else {
            // item.save();
            res.redirect('imagesPage');
        }
    });
});