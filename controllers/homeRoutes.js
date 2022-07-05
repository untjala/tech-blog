const router = require('express').Router();
const { Comment, Post, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('homepage', {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/post/:id', async (req, res) => {
    try {
      const postData = await Post.findByPk({
        include: [
          {
            model: Comment,
            include: [{model:User}]
          },
        ],
      });
  
    const posts = postData.get({ plain: true });
  
      res.render('post', {
        posts,
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/', withAuth, async (req, res) => {
    try {
      const userData = User.findByPk(req.session.user_id, {
        attributes: {exclude: ['password']},
        include: [{model: Post}],
      });
  
      const user = userData.get({ plain: true });
  
      res.render('dashboard', {
        user,
        loggedIn: true,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;