const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({

  
  name: {
    type: String
  
  },
  balance: {
    type: Number
   
  },
  type: {
    type: String,
   
  },
});


const Account = mongoose.model('Account', accountSchema);

module.exports = Account;
