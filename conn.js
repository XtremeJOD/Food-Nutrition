const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shivamAPI')
  .then(() => console.log('Database is connected'))
  .catch(error => console.error('Database connection error:', error));
