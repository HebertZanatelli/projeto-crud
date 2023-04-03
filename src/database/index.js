const mongoose = require('mongoose');



function connect(){


mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/projeto-crud')
const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to database!');
});
db.on('error', console.error.bind(console, 'connection error:'));

}

module.exports = {connect}