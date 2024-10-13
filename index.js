const express = require("express");
const cors = require("cors");
const {MongoClient} = require("mongodb");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/save",(req,res)=>{
    const url="mongodb://0.0.0.0:27017";
    const client= new MongoClient(url);
    const db = client.db("wn13oct24V2");
    const coll = db.collection("student");
    const doc = {"name":req.body.name,
        "doubt":req.body.doubt
    };
    coll.insertOne(doc)
    .then(result=>res.send(result))
    .catch(result=>res.send(error));
});

app.listen(9000,()=>{console.log("ready@9000");});

