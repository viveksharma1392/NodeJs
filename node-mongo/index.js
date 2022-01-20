const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

const url = "mongodb://localhost:27017/";
const dbname = "conFusion";


MongoClient.connect(url, (err, client)=>{
    assert.equal(err, null);

    console.log("Connected correctly to server");


    const db = client.db(dbname);
    const collection = db.collection("dishes");

    collection.insertOne({"name":"Test", "description":"Test"}, (err, result)=>{
        assert.equal(err, null);

        console.log("After Insert");
        console.log(result.insertedId);

        collection.find({}).toArray((err, docs)=>{
            assert.equal(err, null);

            console.log("Found:\n");
            console.log(docs);

            db.dropCollection("dishes", (err, result)=>{
                assert.equal(err, null);

                client.close();
            });
        });
    });
});