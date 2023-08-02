 import mongoose from "mongoose"
 const DBurl = "mongodb://0.0.0.0:27017/CRUDE_DB"
 
 export const DBCONNECTION = async()=>{
    try {
        const db = await mongoose.connect(DBurl);
        console.log(`database is up and running on ${db.connection.host}`)
        
    } catch (error) {
        console.log("an error occur in connection to database",error)
    }
 }