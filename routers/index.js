var express = require('express');
var data = require('../data.json')

var router = express.Router();



router.get('/', function (req, res) {
    res.render('index', {
        title: 'Оригинальная японская еда'
    });
});

router.get('/price', function (req, res) {
    res.render('menu', {
        title: 'Меню',
        price: data.sushi,
    });
});

router.get('/about', function (req, res) {
    res.render('about', {
        title: 'О нас'
    });
});

router.get('/auth', function (req, res) {
    res.render('auth', {
        title: 'Auth'
    });
});

router.get('/reviews', function (req, res) {
    res.render('reviews', {
        title: 'Отзывы'
    });
});

router.get('/jobs', function (req, res) {
    res.render('jobs', {
        title: 'Вакансии'
    });
});

router.get('/admin', function (req, res) {
    res.render('admin', {
        title: 'Административная панель',
        auth: false,
        jobs: data.jobs
    });
});

module.exports = router;