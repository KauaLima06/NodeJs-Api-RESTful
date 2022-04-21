// Imports
require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

const app = express();
//Config JSON
app.use(express.json());

const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASS;
const PORT = process.env.PORT || 3030;

mongoose.connect(`mongodb+srv://${db_user}:${db_pass}@apicluster.vi0ql.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
    .then(() => {
        app.listen(PORT, () => console.log(`API running on port ${PORT}`));
    })
    .catch(err => console.log(`Erro: ${err}`));