require('dotenv').config();

const express = require('express');
const app = express();

const webrouter = require('./routes/website');
const adminrouter = require('./routes/admin');

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.use('/', webrouter);
app.use('/admin', adminrouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
