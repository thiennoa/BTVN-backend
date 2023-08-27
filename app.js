// app.js
const express = require('express');
const httpModule = require('./httpModule');
const arrayModule = require('./arrayModule');
const timeModule = require('./timeModule');

const app = express();
const PORT = 3000;

app.get('/', async (req, res) => {
  try {
    // Sử dụng httpModule để fetch dữ liệu từ một URL
    const fetchedData = await httpModule.fetchData('https://jsonplaceholder.typicode.com/posts/1');

    // Sử dụng arrayModule để lấy các giá trị duy nhất từ mảng
    const inputArray = [1, 2, 2, 3, 4, 4, 5];
    const uniqueValues = arrayModule.getUniqueValues(inputArray);

    // Sử dụng timeModule để lấy thời gian hiện tại
    const currentTime = timeModule.getCurrentTime();

    // Sử dụng các hàm xử lý mảng: map, filter, reduce
    const doubledValues = inputArray.map(num => num * 2);
    const filteredValues = inputArray.filter(num => num % 2 === 0);
    const sum = inputArray.reduce((acc, num) => acc + num, 0);

    res.json({
      fetchedData,
      uniqueValues,
      currentTime,
      doubledValues,
      filteredValues,
      sum,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
