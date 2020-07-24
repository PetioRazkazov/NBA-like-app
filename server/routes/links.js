const router = require('express').Router();
let Link = require('../models/link.model');

router.route('/').get((req,res) =>{
    Link.find()
    .then(links => res.json(links))
    .catch(err => res.status(400).json('Error:' + err));
});

router.route('/add').post((req,res)=>{
    const url = req.body.url;

    const duration = req.body.duration;

    const idNumber = req.body.idNumber
    
    const newLink = new Link({url,duration,idNumber});

    newLink.save().then(()=> res.json('Link added')).catch(err => res.status(400).json('Error' + err));
});
router.route('/random/:id').get((req,res)=>{
    Link.find({idNumber: req.params.id})
    .then(links => res.json(links))
    .catch(err => res.status(400).json('Error:' + err));
});

router.route('/:id').get((req,res)=>{
    Link.findById(req.params.id)
    .then(link => res.json(link))
    .catch(err => res.status(400).json('Error:' + err));
});

router.route('/:id').delete((req,res) =>{
    Link.findByIdAndDelete(req.params.id)
    .then(user => res.json('Link has been deleted'))
    .catch(err => res.status(400).json("Error" + err));
});
module.exports = router;

