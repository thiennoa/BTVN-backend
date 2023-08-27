// arrayModule.js
const _ = require('lodash');

function getUniqueValues(array) {
  return _.uniq(array);
}

module.exports = { getUniqueValues };
