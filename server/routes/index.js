let express = require('express');
let router = express.Router();
/* home page. */
router.get('/', (req, res, next)=> {
    res.render('index', {  title: 'Home'   });
});

/* home page. */
router.get('/home',  (req, res, next)=> {
    res.render('index', {  title: 'Home'   });
});
 

/* contact page. */
router.get('/contact', (req, res, next)=> {
    res.render('contact', { title: 'Contact Us?'  });
  });

module.exports = router;
