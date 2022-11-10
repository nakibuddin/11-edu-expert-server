const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
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

        app.get('/services', async (req, res) => {
            const query = {};
            const cursor =  serviceCollection.find(query);
            const services = await cursor.toArray();
            res.send(services);
        })
    }
    finally{

    }
}
run().catch(err => console.error('my_database_error',err));



app.get('/', (req, res) => {
    res.send('Hello from node mongo crud server');
})



app.get('/service/:id', (req, res) => {

    res.send(comments);
})

app.listen(port, () => {
    console.log(`node-mongo-crud-server is running on port ${port}`);
})


const comments = [
    {
        email: 'sakib@gmail.com',
        name: 'Nakib Uddin Ahmad',
        photoURL: 'https://lh3.googleusercontent.com/a/ALm5wu1X3lSoGbDpTlfh1x-1o7FmvxVjByvKGmdambh-VQ=s96-c',
        body: 'A must for non-native learners and advanced learners. Step by step method of writing for many different school boards in South Asian countries. Extremely practical way with appropriate examples.'        
    },
    {
        email: 'sakib@gmail.com',
        name: 'Nakib Uddin Ahmad',
        photoURL: 'https://lh3.googleusercontent.com/a/ALm5wu1X3lSoGbDpTlfh1x-1o7FmvxVjByvKGmdambh-VQ=s96-c',
        body: 'absolutely great! advanced my writing skills a lot, helped me understand the academic writing a lot better, with a solid perception about plagiarism and other important academic matters.'        
    },
    {
        email: 'sakib@gmail.com',
        name: 'Nakib Uddin Ahmad',
        photoURL: 'https://lh3.googleusercontent.com/a/ALm5wu1X3lSoGbDpTlfh1x-1o7FmvxVjByvKGmdambh-VQ=s96-c',
        body: 'This is a very good course That said, it suffers from the same problem most courses Coursera provides. The Peer Review, where you may end up being reviewed by a classmate who is prejudiced against your opinion and grades you falsely.'        
    },
    {
        email: 'sakib@gmail.com',
        name: 'Nakib Uddin Ahmad',
        photoURL: 'https://lh3.googleusercontent.com/a/ALm5wu1X3lSoGbDpTlfh1x-1o7FmvxVjByvKGmdambh-VQ=s96-c',
        body: 'Very bad. Not helpful at all. No one is responsible for the class. All the files are expired and I reported the problem. No one cares about it or fixes it.'        
    }

]
