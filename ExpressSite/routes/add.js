const { Router } = require('express');
const router = Router();
const {validationResult } = require('express-validator/check');
const Course = require('../models/course')
const auth = require('../middleware/auth')
const { courseValidators } = require('../utils/validators')


router.get('/', auth, (req, res) => {
    res.render('add', {
        title: 'Add new courses',
        isAdd: true
    })
})

router.post('/', auth, courseValidators, async (req, res) => {
   const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).render('add', {
            title: 'Add new courses',
            isAdd: true,
            error: errors.array()[0].msg,
            data: {
                title: req.body.title,
                price: req.body.price,
                img: req.body.img
            }
        }) 
   }
   
   
    const course = new Course({
        title: req.body.title,
        price: req.body.price,
        img: req.body.img,
        userId: req.user
    })
    try {
        await course.save()
        res.redirect('/courses')
    } catch (err) {
        console.log(err);
    }
})

module.exports = router