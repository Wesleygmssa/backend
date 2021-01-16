const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/todo';
mongoose.connect(uri, { useFindAndModify: false });

module.exports = mongoose;

