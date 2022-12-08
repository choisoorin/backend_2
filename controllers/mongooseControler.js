// @ts-check
const connect = require('./mongooseConnect');
const User = require('../models/user');
const { find } = require('../models/user');

connect();

const db = {
  selectUser: async (userId) => {
    try {
      const findUser = await User.findOne({ id: userId });
      if (!findUser) return false;
      return findUser;
    } catch (err) {
      console.error(err);
      return { stats: 'unexpected', err };
    }
  },
};

module.exports = db;
