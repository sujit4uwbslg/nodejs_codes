import { MongoClient } from "mongodb";

async function listDatabases(client){
    try{
        const databasesList = await client.db("nedb").admin().listDatabases();
 
        console.log("Databases:");
        databasesList.databases.forEach(db => console.log(` - ${db.name}`));
    
    }catch(e){
        console.log(e)
    }
    
};
 async function listCollections(client,DBNAME){
    try{
        const db2 = client.db()
        console.log("Collections:")
        const s=db2.listCollections()
        console.log(s.toArray())
        //console.log(s)
        }catch(e){
        console.log("The error is"+e)
    }
 }
// server location
const url = 'mongodb://127.0.0.1:27017';
const client=new MongoClient(url)

try{
    await client.connect();
    await listDatabases(client);
    await listCollections(client,"nedb");
    console.log("Got connection")

}catch(e){
    console.log(e)
}



