const express = require('express');
const router = require('./routes');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(router);
app.use(cors());

app.listen(3333);