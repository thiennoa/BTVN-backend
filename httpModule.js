// httpModule.js
const axios = require('axios');

function fetchData(url) {
  return axios.get(url)
    .then(response => response.data)
    .catch(error => {
      throw new Error(`Failed to fetch data: ${error.message}`);
    });
}

module.exports = { fetchData };
