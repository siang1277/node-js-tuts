const express = require('express');
const blogController = require('../controllers/blogController');

const router = express.Router();

router.get('/create', blogController.blog_create_get);
router.get('/', blogController.blog_index);
router.post('/', blogController.blog_create_post);
router.get('/:id', blogController.blog_details);
router.delete('/:id', blogController.blog_delete);

module.exports = router;

// const express = require('express');
// const Blog = require('../models/blog');

// const router = express.Router();

// // router.get('/blogs', (req, res) => {
// router.get('/', (req, res) => {
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

// router.post('/blogs', (req, res) => {
//     const blog = new Blog(req.body);
//     blog.save()
//         .then((result) => {
//             res.redirect('/blogs');
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// })

// router.get('/blogs/create', (req, res) => {
//     res.render('create', { title: 'Create a new blog' });
// });

// router.get('/blogs/:id', (req, res) => {
//     const id = req.params.id;
//     Blog.findById(id)
//         .then((result) => {
//             res.render('details', { blog: result, title: 'Blog Details'});
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// })

// router.delete('/blogs/:id', (req, res) => {
//     const id = req.params.id;
    
//     Blog.findByIdAndDelete(id)
//       .then(result => {
//         res.json({ redirect: '/blogs' });
//       })
//       .catch(err => {
//         console.log(err);
//       });
// });

// module.exports = router;