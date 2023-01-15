const mongoose = require('mongoose');
const app = require('./app');

const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const databaseUrl = process.env.DB_URL.replace('<PASSWORD>', process.env.PASSWORD);

mongoose.connect(databaseUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function () {
  console.log('Connected successfully');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});