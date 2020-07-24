const router = require('express').Router();
let Article = require('../models/articles.model');

router.route('/').get((req,res) =>{
    Article.find()
    .then(links => res.json(links))
    .catch(err => res.status(400).json('Error:' + err));
});

router.route('/add').post((req,res)=>{
    const text = req.body.text;
    
    const newArticle = new Article({text});

    newArticle.save().then(()=> res.json('Article added')).catch(err => res.status(400).json('Error' + err));
});

module.exports = router;

