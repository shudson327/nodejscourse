const express = require ('express');


// express app
const app = express();

//listen for requests
app.listen(3000);

//sending index.html
app.get('/', (req, res) => {
    // res.send('<p>home page</p>');
    res.sendFile('./views/index.html', { root: __dirname});
});

//sending about.html
app.get('/about', (req, res) => {
    // res.send('<p>About page</p>');
    res.sendFile('./views/about.html', { root: __dirname});

});

//redirect to about page
app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

//sending to 404.html
app.use((req,res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname });
})