const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoute');

// express app
const app = express();

// connect to mongodb
const dbURL = 'mongodb+srv://netninja:Abcd`123@nodetuts.aj65o.mongodb.net/node-tuts?retryWrites=true&w=majority';
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true})
.then((result) => {
    console.log("Connected to db"); 
    // listen for requests
    app.listen(3000);
})
.catch((err) => console.log(err));

// register view engine
app.set('view engine', 'ejs');


// middleware & static files
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true}))
app.use(morgan('dev'))

// mongoose and mongo sandbox routes
// app.get('/add-blog', (req, res) => {
//     const blog = new Blog({
//         title: 'new blog',
//         snippet: 'about my new blog',
//         body: 'more about my new blog'
//     })

//     blog.save()
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log(err)
//         })
// })

// app.get('/all-blogs', (req, res) => {
//     Blog.find()
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// })

// app.get('/single-blog', (req, res) => {
//     Blog.findById('60f19ac3a94519e0d93b5497')
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log(err)
//         })
// })

// app.use((req, res, next) => {
//     console.log('new request made:');
//     console.log('host: ', req.hostname);
//     console.log('path: ', req.path);
//     console.log('method: ', req.method);
//     next();
// })

app.get('/', (req, res) => {
    res.redirect('/blogs')
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

app.use('/blogs', blogRoutes);

// app.get('/blogs', (req, res) => {
//     // const blogs = [
//     //   {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
//     //   {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
//     //   {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
//     // ];
//     // res.render('index', { title: 'Home', blogs });
//     Blog.find().sort({ createdAt: -1 })
//     .then((result) => {
//         res.render('index', { title: 'Home', blogs: result });
//     })
//     .catch((err) => {
//         console.log(err);
//     })
// });

// app.post('/blogs', (req, res) => {
//     const blog = new Blog(req.body);
//     blog.save()
//         .then((result) => {
//             res.redirect('/blogs');
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// })

// app.get('/blogs/:id', (req, res) => {
//     const id = req.params.id;
//     Blog.findById(id)
//         .then((result) => {
//             res.render('details', { blog: result, title: 'Blog Details'});
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// })

// app.delete('/blogs/:id', (req, res) => {
//     const id = req.params.id;
    
//     Blog.findByIdAndDelete(id)
//       .then(result => {
//         res.json({ redirect: '/blogs' });
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   });
  



// app.get('/blogs/create', (req, res) => {
//     res.render('create', { title: 'Create a new blog' });
// });

// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});


// // listen for requests
// app.listen(3000);

// app.get('/', (req, res) => {
//     // res.send('<p>Home Page</p>');
//     res.sendFile('./views/index.html', { root: __dirname });
// });

// app.get('/about', (req, res) => {
//     // res.send('<p>about page</p>');
//     res.sendFile('./views/about.html', { root: __dirname });
// });

// // redirects
// app.get('/about-us', (req, res) => {
//     res.redirect('/about');
// });

// // 404 page
// app.use((req, res) => {
//     res.status(404).sendFile('./views/404.html', { root: __dirname });
// });
  