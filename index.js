const express = require('express')
const app = express()
require("dotenv").config();
const bodyParser = require("body-parser");
const mainRoute = require('./routes')

const port = 4000
const db = require('./config/db')
const dburl = process.env.DB_DEV_URL
const router = express.Router()


app.use(bodyParser.json())
app.use(express.json())
app.use("/api", mainRoute(express));

app.get("/", (req, res) => res.send("Hello from index"));



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
    db.connect(dburl)
})