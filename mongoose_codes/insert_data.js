import mongoose from "mongoose";
const url = 'mongodb://127.0.0.1:27017/nedb';
try{
    mongoose.connect(url);
    console.log("Connected successfully")

    const userSchema = {
        _id:Number,
        email: String,
        password: String,
    };
    const User = new mongoose.model("User", userSchema);
    const user = new User({
        _id:1,
        email: "abc@example.com",
        password: "1215465",
    });
    //user.save()
    //user.updateOne({_id:1},{password:"46498798"})
    //user.deleteOne({_id:1})
    console.log("Data saved")

}catch(e){
    console.log(e)
}finally{
    console.log("Finally here")
}