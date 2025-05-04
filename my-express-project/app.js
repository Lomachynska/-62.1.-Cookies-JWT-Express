const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const favicon = require('serve-favicon');
const app = express();
const port = 3000;

// Налаштування для обслуговування favicon
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// Статичні файли
app.use(express.static(path.join(__dirname, 'public')));

// Використовуємо cookie-parser
app.use(cookieParser());

// === PUG ===
app.engine('pug', require('pug').__express);
app.set('views', path.join(__dirname, 'views', 'pug')); // Папка для PUG шаблонів

// === EJS ===
app.engine('ejs', require('ejs').__express);
app.set('views', path.join(__dirname, 'views', 'ejs')); // Папка для EJS шаблонів

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
