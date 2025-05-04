const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const favicon = require('serve-favicon');
const app = express();
const port = 3000;

// Favicon
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// Static
app.use(express.static(path.join(__dirname, 'public')));

// Cookies
app.use(cookieParser());

// === PUG ===
app.engine('pug', require('pug').__express);

// Шлях до PUG шаблонів
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug'); // Основна view engine - PUG

// === EJS ===
app.engine('ejs', require('ejs').__express);

// Роутинг
app.get('/', (req, res) => {
  res.render('pug/index'); // За замовчуванням PUG
});

app.get('/ejs', (req, res) => {
  res.render('ejs/index.ejs'); // Рендер EJS
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
