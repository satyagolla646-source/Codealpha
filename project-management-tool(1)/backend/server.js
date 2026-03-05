
const express=require("express")
const cors=require("cors")
const fs=require("fs")
const app=express()

app.use(cors())
app.use(express.json())

const usersFile="./data/users.json"
const projectsFile="./data/projects.json"
const tasksFile="./data/tasks.json"

function read(file){
return JSON.parse(fs.readFileSync(file))
}

function write(file,data){
fs.writeFileSync(file,JSON.stringify(data,null,2))
}

app.post("/register",(req,res)=>{
let users=read(usersFile)
users.push(req.body)
write(usersFile,users)
res.json({msg:"registered"})
})

app.post("/login",(req,res)=>{
let users=read(usersFile)
const user=users.find(u=>u.email==req.body.email && u.password==req.body.password)
res.json(user || {})
})

app.get("/projects",(req,res)=>{
res.json(read(projectsFile))
})

app.post("/projects",(req,res)=>{
let p=read(projectsFile)
const project={id:Date.now().toString(),title:req.body.title}
p.push(project)
write(projectsFile,p)
res.json(project)
})

app.delete("/projects/:id",(req,res)=>{
let p=read(projectsFile).filter(x=>x.id!=req.params.id)
write(projectsFile,p)
res.json({})
})

app.get("/tasks/:projectId",(req,res)=>{
let t=read(tasksFile).filter(x=>x.projectId==req.params.projectId)
res.json(t)
})

app.post("/tasks",(req,res)=>{
let t=read(tasksFile)
t.push({id:Date.now().toString(),title:req.body.title,description:req.body.description,projectId:req.body.projectId,status:"todo"})
write(tasksFile,t)
res.json({})
})

app.put("/tasks/:id",(req,res)=>{
let t=read(tasksFile)
t=t.map(x=>{
if(x.id==req.params.id){
if(x.status=="todo") x.status="progress"
else if(x.status=="progress") x.status="done"
}
return x
})
write(tasksFile,t)
res.json({})
})

app.delete("/tasks/:id",(req,res)=>{
let t=read(tasksFile).filter(x=>x.id!=req.params.id)
write(tasksFile,t)
res.json({})
})

app.listen(3000,()=>console.log("Server running"))
