var express = require('express');

var app = express();

app.set('view engine', 'ejs');

var routes = require('./routes');

var path = require('path');
app.use(express.static(path.join(__dirname, 'public')))

console.log("Ram Ram");

//// Routes

// home
app.get('/', routes.home);

// movie_single
app.get('/starwars/:episode_number?', routes.movie_single);

// notFound
app.get('*', routes.notFound);

app.listen(process.env.PORT || 3000);
// app.listen(3000, function() {
// 	console.log("Ram Ram the application is running on local host 3000");
// });