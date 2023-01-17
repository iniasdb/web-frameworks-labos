const express = require("express")
const bp = require("body-parser")

const app = express()
app.use(bp.json())
app.use(bp.urlencoded({extended:true}))

app.get("/*.html", (req, res)=> {
    res.sendFile(__dirname + "/views/" + req.path);
})

app.get("/*", (req, res)=> {
    res.sendFile(__dirname + '\\public\\' + req.path.replace('/', '\\'));
})

app.listen(3000, err=>{
    if (err) {
        console.log(err);
    }
    console.log("listening on port 3000")
})