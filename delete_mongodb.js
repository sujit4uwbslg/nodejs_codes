import { MongoClient } from "mongodb";
const url = 'mongodb://127.0.0.1:27017';
const client=new MongoClient(url)
async function deleteData(client,DBNAME,data){
    const db = client.db("newdb");
    const collection=db.collection("mycoll")
    collection.deleteOne(data)
}
try{
    await client.connect();
    await deleteData(client,"newdb",{_id:1001})
    console.log("Got connection");

}catch(e){
    console.log(e)
}finally{
    setTimeout(()=>client.close(),10)
}