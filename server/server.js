const express = require("express");
const app = express();
const dotenv = require('dotenv')
dotenv.config();
const PORT = process.env.PORT || 8080;
const connectDB = require("./config/db");
const cors = require('cors')

connectDB();

app.use(express.json({ limit: '10mb' }));
app.use(cors({
  methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

app.use('/api/v1/auth', require('./routes/authRoute'));
app.use('/api/v1/posts', require('./routes/postRoute'));
app.use('/api/v1/suggets', require('./routes/suggestRoute'));

app.listen(PORT, () => {
  console.log(`Server Started with port ${PORT}!`);
});
