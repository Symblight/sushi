// module depencies
var express = require('express');
var hbs  = require('express-handlebars');
var path = require('path');
var signale = require('signale');
var bodyParser = require('body-parser');
var views = require("./routers")
var api = require("./api")

var app = express();

// variables
var port = 3000;

app.use(bodyParser.urlencoded({
    extended: false
}));
    
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')))

app.engine('hbs', hbs({
        extname: 'hbs',
        defaultLayout: 'layout',
        layoutsDir: __dirname + '/views/layouts'
    })
);
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

// routes
app.use("/", views);

// api
app.use("/api/v1/", api);

//Run
app.listen(port);
signale.pending('Example running on port %s', port);