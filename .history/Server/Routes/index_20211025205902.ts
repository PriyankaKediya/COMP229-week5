import express from 'express';
const router = express.Router();
export default router;

//get a reference to the Game Model Class
import Game from '../Models/game';

//instantiate an object of type index controller
import { DisplayHomePage } from '../Controllers/index';


/* GET home page. */
router.get('/', DisplayHomePage);

/* GET home page. */
router.get('/home', function(req, res, next) 
{
  res.render('index', { title: 'Home', page: 'home'});
});

/* GET about page. */
router.get('/about', function(req, res, next) 
{
  res.render('index', { title: 'About Us', page: 'about'});
});

/* GET projects page. */
router.get('/projects', function(req, res, next) 
{
  res.render('index', { title: 'Projects', page: 'projects' });
});

/* GET services page. */
router.get('/services', function(req, res, next) 
{
  res.render('index', { title: 'Our Services', page: 'services' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) 
{
  res.render('index', { title: 'Contact', page: 'contact' });
});


/*GET games list */
router.get('/games-list', function(req, res, next)
{

  //db.games.find
  Game.find((err, gamesCollection) =>
  {
    if(err)
    {
      console.error(err);
      res.end(err);
    }

    res.render('index', { title: 'Games List', page: 'games-list', games: gamesCollection });
 
  });
});


//module.exports = router;
