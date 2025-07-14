const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const formRoutes = require('./routes/formRoutes');

const app = express();
const PORT = 5000;

mongoose.connect('mongodb://localhost:27017/formdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use(cors());
app.use(bodyParser.json());
app.use('/api/form', formRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
