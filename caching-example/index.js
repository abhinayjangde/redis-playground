import axios from "axios"
import client from "./client.js"
import express from "express"

const app = express()

app.get("/",async (req,res)=>{
    const cachedValue = await client.get("todos")
    
    if(cachedValue){
        return res.json(JSON.parse(cachedValue))
    }
    const data = await fetch("https://jsonplaceholder.typicode.com/todos")
    const result = await data.json()
    await client.set("todos",JSON.stringify(result))
    await client.expire("todos",30)
    return res.json(result)
})

app.listen(9000)