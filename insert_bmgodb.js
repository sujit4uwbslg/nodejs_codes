import { MongoClient } from "mongodb";
const url = 'mongodb://127.0.0.1:27017';
const client=new MongoClient(url)
async function insertData(client,DBNAME,data){
    const db = client.db("newdb");
    const collection=db.collection("mycoll")
    collection.insertOne(data)
}
try{
    await client.connect();
    await insertData(client,"newdb",{_id:1001,name:"Sam",age:39})
    console.log("Got connection");

}catch(e){
    console.log(e)
}finally{
    setTimeout(()=>client.close(),10)
}