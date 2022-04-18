const express = require('express');
const mongoose = require('mongoose')

const app = express();

mongoose.connect("mongodb://localhost:27017", (err) => {
    !err ? console.log("db connected!!!") : console.log("db error")
})


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
