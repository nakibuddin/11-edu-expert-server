const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();

const port = process.env.PORT || 5000;
const app = express();

// middleware
app.use(cors());            // for cors policy
app.use(express.json());    // for post request

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.2arvn0y.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run () {
    try{
        const serviceCollection = client.db('edu_expert').collection('services');        
        const reviewCollection = client.db('edu_expert').collection('reviews');        

    // load all services data (read)
        app.get('/services', async (req, res) => {
            const query = {};
            const cursor =  serviceCollection.find(query);
            const services = await cursor.toArray();
            res.send(services);
        })

    // load single service data (read)
        app.get('/service/:id', async (req, res) => {
            const id = req.params.id;            
            const query = {_id: ObjectId(id)};
            const cursor =  serviceCollection.find(query);
            const service = await cursor.toArray();
            res.send(service);
        })

    // post service data (create)
        app.post('/service', async(req, res) => {
            const service =  req.body;
            const result = await serviceCollection.insertOne(service);            
            console.log(result);            
            res.send(result);
        })

    // load reviews via service_id (read)
        app.get('/reviews/:id', async (req, res) => {
            const id = req.params.id;                        
            const query = {service_id: id};            
            const cursor =  reviewCollection.find(query);
            const reviews = await cursor.toArray();
            res.send(reviews);
        })

    // load reviews via email (read)
        app.get('/my-reviews/:id', async (req, res) => {
            const id = req.params.id;
            const query = {email: id};            
            const cursor =  reviewCollection.find(query);
            const reviews = await cursor.toArray();
            res.send(reviews);
        })

    // delete reviews via review id (delete)
        app.delete('/reviews/:id', async(req, res) => {
            const id = req.params.id;
            console.log(id);
            const query = {_id : ObjectId(id)};
            const result = await reviewCollection.deleteOne(query);
            res.send(result);
        
        })


    }
    finally{

    }
}
run().catch(err => console.error('my_database_error',err));



app.get('/', (req, res) => {
    res.send('Hello from node mongo crud server');
})

app.listen(port, () => {
    console.log(`node-mongo-crud-server is running on port ${port}`);
})
