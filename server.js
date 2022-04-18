const express = require('express');
const mongoose = require('mongoose')

const app = express();

mongoose.connect("mongodb://localhost:27017/test", (err) => {
    !err ? console.log("db connected!!!") : console.log("db error")
})

async function start() {
    const schema = new mongoose.Schema({
        name: String,
        age: Number
    })

    const model = new mongoose.model("Users", schema)

    const data = new model({name: "Vitya", age: 30})
    console.log(data.name)
    const answer = await data.save()
    console.log(answer)
}

start()


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
