// timeModule.js
const moment = require('moment');

function getCurrentTime() {
  return moment().format('YYYY-MM-DD HH:mm:ss');
}

module.exports = { getCurrentTime };
