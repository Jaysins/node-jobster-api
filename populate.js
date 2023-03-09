require("dotenv").config()

const mockData = require("./MOCK_DATA.json")

const Job = require("./models/Job")

const connectDB =  require("./db/connect")
const {mongo} = require("mongoose");


const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        await Job.create(mockData)
        console.log("success")
        process.exit(0)
    }catch(err){
        console.log(err)
    }
}

start()