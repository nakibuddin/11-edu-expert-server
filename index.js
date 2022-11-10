const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 5000;
const app = express();

// middleware
app.use(cors());            // for cors policy
app.use(express.json());    // for post request






app.get('/', (req, res) => {
    res.send('Hello from node mongo crud server');
})

app.get('/services', (req, res) => {
    res.send(services);
})

app.get('/service/:id', (req, res) => {

    res.send(comments);
})

app.listen(port, () => {
    console.log(`node-mongo-crud-server is running on port ${port}`);
})


const comments = [
    {
        "_id" : 1,
        email: 'sakib@gmail.com',
        name: 'Nakib Uddin Ahmad',
        photoURL: 'https://lh3.googleusercontent.com/a/ALm5wu1X3lSoGbDpTlfh1x-1o7FmvxVjByvKGmdambh-VQ=s96-c',
        body: 'A must for non-native learners and advanced learners. Step by step method of writing for many different school boards in South Asian countries. Extremely practical way with appropriate examples.'        
    },
    {
        "_id" : 2,
        email: 'sakib@gmail.com',
        name: 'Nakib Uddin Ahmad',
        photoURL: 'https://lh3.googleusercontent.com/a/ALm5wu1X3lSoGbDpTlfh1x-1o7FmvxVjByvKGmdambh-VQ=s96-c',
        body: 'absolutely great! advanced my writing skills a lot, helped me understand the academic writing a lot better, with a solid perception about plagiarism and other important academic matters.'        
    },
    {
        "_id" : 3,
        email: 'sakib@gmail.com',
        name: 'Nakib Uddin Ahmad',
        photoURL: 'https://lh3.googleusercontent.com/a/ALm5wu1X3lSoGbDpTlfh1x-1o7FmvxVjByvKGmdambh-VQ=s96-c',
        body: 'This is a very good course That said, it suffers from the same problem most courses Coursera provides. The Peer Review, where you may end up being reviewed by a classmate who is prejudiced against your opinion and grades you falsely.'        
    },
    {
        "_id" : 4,
        email: 'sakib@gmail.com',
        name: 'Nakib Uddin Ahmad',
        photoURL: 'https://lh3.googleusercontent.com/a/ALm5wu1X3lSoGbDpTlfh1x-1o7FmvxVjByvKGmdambh-VQ=s96-c',
        body: 'Very bad. Not helpful at all. No one is responsible for the class. All the files are expired and I reported the problem. No one cares about it or fixes it.'        
    }

]


const services = [
    {
        "_id" : 1,
		"name":"Physics",
		"logo":"https://t3.ftcdn.net/jpg/05/08/16/22/360_F_508162246_PmhFg4ZdfEW0hd9DbUKg2LzZMws7nq4j.jpg",
		"price": "$35",
        "details":"React JS is a JavaScript Library. This is a Fundamentals course for Beginners who are just getting started with React." ,
	},

    {
        "_id" : 2,
		"name":"Chemistry",
		"logo":"https://www.moravek.com/wp-content/uploads/2022/02/Moravek-116137-Organic-Synthesis-Medicine-blogbanner1.jpg",
		"price": "$60",		
		"details":"React JS is a JavaScript Library. This is a Fundamentals course for Beginners who are just getting started with React." ,
	},

    {
        "_id" : 3,
		"name":"Math",
		"logo":"https://www.youcubed.org/wp-content/uploads/2017/03/beautiful-math-1.jpg",
		"price": "$35",
        "details":"React JS is a JavaScript Library. This is a Fundamentals course for Beginners who are just getting started with React." ,
	},
    
    {
        "_id" : 4,
		"name":"Biology",
		"logo":"https://nebula.org/blog/wp-content/uploads/2020/08/DNA_1280p-1024x576.jpg",
		"price": "$35",
        "details":"React JS is a JavaScript Library. This is a Fundamentals course for Beginners who are just getting started with React." ,
	},

    {
        "_id" : 5,
		"name":"Einglish",
		"logo":"https://images.pond5.com/english-grammar-animated-word-cloud-footage-081044313_iconl.jpeg",
		"price": "$35",
        "details":"React JS is a JavaScript Library. This is a Fundamentals course for Beginners who are just getting started with React." ,
	},
]
