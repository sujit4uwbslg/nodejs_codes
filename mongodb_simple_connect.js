import { MongoClient } from "mongodb";

const url = 'mongodb://127.0.0.1:27017';
const client=new MongoClient(url)
try{
    client.connect()
    console.log("Database connected..");
}catch(e){
    console.log(e)
}