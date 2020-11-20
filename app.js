const express = require ('express');
const morgan = require ('morgan')

// express app
const app = express();

//listen for requests
app.listen(3000);

app.use(morgan('dev'));

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      ];
  res.render('index', { title: 'Home', blogs});

});

// middleware
// app.use((req, res, next) => {
//     console.log('new request made:');
//     console.log('host: ', req.hostname);
//     console.log('path: ', req.path);
//     console.log('method: ', req.method);
//     next();
// });

// app.use((req, res, next) => {
//     console.log('in the next middleware');
//      next();
// });


app.get('/about', (req, res) => {
    res.render('about', {title: 'About'});
  });
  
  app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new blog' });
  }); 

  // 404 page
  app.use((req, res) => {
    res.render('404', { title: '404' });  
});




// //sending index.html
// app.get('/', (req, res) => {
//     // res.send('<p>home page</p>');
//     res.sendFile('./views/index.html', { root: __dirname});
// });

// //sending about.html
// app.get('/about', (req, res) => {
//     // res.send('<p>About page</p>');
//     res.sendFile('./views/about.html', { root: __dirname});

// });

// //redirect to about page
// app.get('/about-us', (req, res) => {
//     res.redirect('/about');
// });

// //sending to 404.html
// app.use((req,res) => {
//     res.status(404).sendFile('./views/404.html', { root: __dirname });
// })
  