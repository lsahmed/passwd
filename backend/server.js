const express = require('express');
require('dotenv').config();
const { MongoClient } = require('mongodb');

const app = express();

// CORS middleware - must come before other middleware
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
});

// Use Express built-in JSON parser instead of body-parser
app.use(express.json({ limit: '10mb' }));

//connection to mongodb
const url = process.env.MONGO_URI;
const client = new MongoClient(url);

// Database Name
const dbName = 'passwd';

client.connect();

const port = process.env.PORT || 3000


// get all the passwords
app.get("/", async (req, res) => {
     const db = client.db(dbName);
     const collection = db.collection('passwords');
     const findResult = await collection.find({}).toArray();
    res.json(findResult);
})

// save a password
app.post("/", async (req, res) => {
    try {
        console.log("Received POST request:", req.body);
        const password = req.body;
        const db = client.db(dbName);
        const collection = db.collection('passwords');
        const findResult = await collection.insertOne(password);
        res.json({success: true, insertedId: findResult.insertedId});
    } catch (error) {
        console.error("Error saving password:", error);
        res.status(500).json({success: false, error: error.message});
    }
})
app.delete("/", async (req, res) => {
    try {
        const password = req.body;
        const db = client.db(dbName);
        const collection = db.collection('passwords');
        const findResult = await collection.deleteOne(password);
        res.json({success: true, insertedId: findResult.insertedId});
    } catch (error) {
        console.error("Error saving password:", error);
        res.status(500).json({success: false, error: error.message});
    }
})

// Delete a password

app.listen(port, () => {
    console.log("Server started ar port: ",port)
})