import express from "express"

const PORT = 3000;

const app = express()

app.get("/", (req, res) => {
    res.send("Ola mundo!")
})

app.listen(PORT, () => console.log("Running in port: ", PORT))