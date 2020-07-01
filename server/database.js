const mongoose = require('mongoose');

const URL = 'mongodb://localhost/mean-crud';

mongoose.connect(URL)
    .then(db => console.log('DB is Connected'))
    .catch(err => console.error(err));

module.exports = mongoose;