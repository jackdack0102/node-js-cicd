const express = require('express');
const app = express();
// Chuẩn Enterprise: Port phải lấy từ biến môi trường, không viết chết
const PORT = process.env.PORT || 3000; 

app.get('/', (req, res) => {
  res.json({
    status: "success",
    message: "Hello from AWS EC2 via GitHub Actions Pipeline!",
    environment: process.env.NODE_ENV || "development"
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});