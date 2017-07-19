const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const productRoutes = require('./routes/productRoutes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


/**
 * Block access to /private
 */
app.use((req: any, res: any, next: any) => {
    if(req.url.indexOf('/private') != -1){
        res.status(403);
        res.end('Access Denied.......');
    }
    next();
});

/**
 * Setup CORS headers
 */
app.use((req: any, res: any, next: any) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

/**
 * Redirect to Node website
 */
app.get('/nodejs', (req: any, res: any) => {
    res.redirect('http://www.nodejs.org');
});


/**
 * Base Url
 */
app.get('/', (req: any, res: any) => {
    res.send('Hello, Node');
});

/**
 * Products Api
 */
app.use('/product', productRoutes);

app.listen(8085, () => {
    console.log('Running on 8085');
});

module.exports = app;