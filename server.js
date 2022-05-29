const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 8001;
const routes = require('./routes/index');
const app = express();

let env = process.env.NODE_ENV || 'development';
require("dotenv").config({
    path: `.env.${env}`,
})
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
// To enable CORS => (Cross Origin Resource Sharing)
app.use(cors());

app.get('/', (req, res) => {
    res.send('Welcome to Stock Tracker API')
})

// Starting points for the routes
app.use('/api/', routes);

app.listen(port, () => {
    console.info(`Server started on port ${port}`);
    // console.info(`${process.env.FAUNADB_SERVER_SECRET}`);
});
