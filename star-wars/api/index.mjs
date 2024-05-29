import express from "express"
import dotenv from "dotenv"
import { MongoClient } from "mongodb";

//Routes
import { postCharacters } from "./routes/characters/post.mjs";
import { findCharacters } from "./routes/characters/get.mjs";
import { postPlanets } from "./routes/planets/post.mjs";
import { findPlanets } from "./routes/planets/get.mjs";
import { postStarships } from "./routes/starships/post.mjs";
import { findStarships } from "./routes/starships/get.mjs";

dotenv.config()

export let characters;
export let starships;
export let planets;

async function connectToMongoDB() {
    try {
      const client = new MongoClient(process.env.MONGO_DB_URL);
      await client.connect();
      const database = client.db(process.env.DB_NAME);
      
      characters = database.collection(process.env.DB_COLLECTION_1);
      starships = database.collection(process.env.DB_COLLECTION_2);
      planets = database.collection(process.env.DB_COLLECTION_3);
  
      console.log('Successfully connected to MongoDB and inited collections');
    } catch (error) {
      console.error('Error connecting to MongoDB', error);
      throw error;
    }
}

await connectToMongoDB()

const app = express()
app.use(express.json())

const port = process.env.PORT 
if (port===undefined){
    port = 4000
}

app.post('/characters',postCharacters)
app.get('/characters', findCharacters)

app.post('/planets', postPlanets)
app.get('/planets',findPlanets)

app.post('/starships', postStarships)
app.get('/starships', findStarships)

app.get('/', (req, res) => {
  res.send({mongoDBUrl, port})
})

app.listen(port, () => {
  console.log(`API listening on port ${port}`)
})