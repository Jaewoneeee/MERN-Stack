const express = require('express');
const dotenv = require('dotenv').config();
const  port = process.env.PORT || 5000; //env에서 가져온 port아니면 5000으로 연결

const app = express();

app.use('/api/goals', require('./routes/goalRoutes'))

app.listen(port, () => console.log(`Server started on port ${port}`));
