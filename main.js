const express = require('express')
const app = express()
const port = 9000

app.get('/', (req, res) => {
    res.json("Hello worlds")
})

app.listen(port, () => {
    console.log(`Pori ts running ${port}`);
})