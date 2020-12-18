const router = require('express').Router();
const { Project, User } = require('../models');
const withAuth = require('../util/withAuth');

// Prevent non logged in users from viewing the homepage
router.get('/', withAuth, async (req, res) => {
  try {
    const projectData = await Project.findAll({
      attributes: { exclude: ['user_id'] },
    });

    const projects = projectData.map((project) => project.get({ plain: true }));

    res.render('homepage', {
      projects,
      // Pass the logged in flag to the template
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/profile', async (req, res) => {
    try {
      const userData = await User.findOne({
        where: { id: req.session.user_id },
      });
      if (!userData) {
        res.status(404).json({ message: 'No user with this id' });
      }
      const user = userData.get({ plain: true });
      res.render('profile', {
        user,
        logged_in: req.session.logged_in,
      });
    } catch (err) {
      res.status(500).json(err);
    }
})

router.get('/project/:id', async (req, res) => {
  try {
    const projectData = await Project.findOne({
      where: { id: req.params.id },
      attributes: { exclude: ['user_id'] }
    });
    console.log(projectData);
    if (!projectData) {
      res.status(404).json({ message: "No project with this id"})
    }
    const project = projectData.get({ plain: true });
    res.render('project', {
      project,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
})

router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;