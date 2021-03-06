const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const dboper = require("./operations");

const url = "mongodb://localhost:27017/";
const dbname = "conFusion";


MongoClient.connect(url)
.then((client)=>{
    console.log("Connected correctly to server");
    const db = client.db(dbname);

    dboper.insertDocument(db, {name:"vadonut", description:"Test"}, "dishes")
    .then((result)=>{
        console.log("Insert Document: \n", result.insertedId);

        return dboper.findDocument(db, "dishes")
    })
    .then((docs)=>{
        console.log("Found Documents:\n", docs);

        return dboper.updateDocument(db, {name: "vadonut"}, {description:" Updated Test"}, "dishes")
    })
    .then((result)=>{
        console.log("Updated Document:\n", result)

        return dboper.findDocument(db, "dishes")
    })
    .then((docs)=>{
        console.log("Found Documents:\n", docs);

        return db.dropCollection("dishes")
     })
     .then((result)=>{
        console.log("Dropped Collection:", result);
        client.close();                
    }).catch((err)=> console.log(err));
})
.catch((err)=> console.log(err));