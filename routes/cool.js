var express = require('express');
var router = express.Router();

router.get('/cool', (req, res, next)=>{
  res.send('Hey this is cool routes!!!');
});

module.exports = router;
