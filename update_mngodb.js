import { MongoClient } from "mongodb";
const url = 'mongodb://127.0.0.1:27017';
const client=new MongoClient(url)
async function updateData(client,DBNAME,COLLECTION,query,newval){
    const db = client.db(DBNAME);
    const collection=db.collection(COLLECTION)
    collection.updateOne(query,newval)
}
try{
    await client.connect();
    await updateData(client,"newdb","mycoll",{_id:3},{$set:{sal:20000}})
    console.log("Got connection");

}catch(e){
    console.log(e)
}finally{
    setTimeout(()=>client.close(),10)
}