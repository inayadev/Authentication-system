import express, {Application} from "express"
import { DBCONNECTION } from "./Database/database";
import allroute from "./Router/router";
const port: number = 2030;
const app:Application = express();
app.use(express.json);

DBCONNECTION()
app.use("/api",allroute)

app.listen (port, ()=>{
    console.log("")
    console.log("server is up and running")
})