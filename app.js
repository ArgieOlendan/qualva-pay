var express = require('express');
var mongoose = require('mongoose');
var body_parser = require('body-parser');
var exphbs = require('express-handlebars');
var morgan = require('morgan');
var cors = require('cors');

var app = express();

// Bodyparser Middleware
app.use(body_parser.json());
app.use(cors());

// Morgan Middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Handlebars Middleware
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

// DB Config
var db = require('./config/db/keys').mongoURI;

// Connect to Mongo
mongoose
    .connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// Set Static Folder
app.use(express.static(`${__dirname}/public`));

// Use Routes
app.use('/api/items', require('./routes/api/items'));

var port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server start on port ${port}`));