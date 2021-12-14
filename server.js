const express = require("express");
const app = express();
const con = require("./dbcon");

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Home Page");
})

// get api
app.get("/employee", (req, res) => {
    con.query("SELECT * FROM emp", (err, rows) => {
        if(!err) {
            res.send(rows);
        }
    });
})

// post api
app.post("/employee", (req, res) => {
    const data = req.body;
    con.query("INSERT INTO emp (name, address) VALUES (?, ?)", [data.ename, data.eaddress], (err, row) => {
        if(!err) {
            res.send("Inserted");
        } else {
            res.send("Error")
        }
    })
})

app.listen(8000, () => {
    console.log("listening at port 8000");
})