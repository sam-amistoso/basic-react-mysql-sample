const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

/** Middle Ware **/
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

/** Import Routes **/
const UserRoutes = require('./routes/userRoutes');

app.get('/api/hello', (req, res) => {
  res.send('Hello World!!! From Express');
});

app.use('/api', UserRoutes);

const express_PORT = process.env.PORT || '8080';

app.listen(express_PORT, () => {
  console.log(`Server started on PORT ${express_PORT}`);
});
