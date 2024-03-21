import express from 'express';
import mongodb from 'mongodb';
import config from './data';

const app = express();
const PORT = 4000;
const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.
const uri = "mongodb://localhost:27017/mydb";
const client = new MongoClient(uri);
client.connect(config.DB, { useUnifiedTopology: true  }, (err, db) => { 
    if(err) {
        console.log('database is not connected')
    }
    else {
        console.log('connected!!')
    }
});

app.get('/', (req, res) => {
    res.json("Our build will succeed! Because life is great!");
});

app.listen(PORT, () => {
    console.log('Your server is running on PORT:',PORT);
});
