const express=require("express")
const mongoose=require("mongoose")
const app=express()
app.use(express.json())
mongoose.connect("mongodb://localhost:27017/aidsb_bad")
.then(()=>{
    console.log("mongodb is connected")
})
.catch((e)=>{
    console.log(`error is ${e}`)
})
const studentSchema=mongoose.Schema({
    name:"String",
    age:"Number",
    branch:"String"
})

const student=mongoose.model("students",studentSchema)


app.post("/create",(req,res)=>{
    const s=new student({
        name:req.body.name,
        age:req.body.age,
        branch:req.body.branch
    })
    s.save()
    res.send("object is created")
})



app.listen(7890,()=>{
    console.log("server is running at http://localhost:7890")
})