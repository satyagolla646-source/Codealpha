
async function loadTasks(){

const projectId=localStorage.getItem("projectId")

const res=await fetch("http://localhost:3000/tasks/"+projectId)
const tasks=await res.json()

document.getElementById("todo").innerHTML="<h3>To Do</h3>"
document.getElementById("progress").innerHTML="<h3>In Progress</h3>"
document.getElementById("done").innerHTML="<h3>Completed</h3>"

tasks.forEach(t=>{
const card=document.createElement("div")
card.innerHTML=`<b>${t.title}</b>
<p>${t.description}</p>
<button onclick="moveTask('${t.id}')">Next</button>
<button onclick="deleteTask('${t.id}')">Delete</button>`

if(t.status=="todo") document.getElementById("todo").appendChild(card)
if(t.status=="progress") document.getElementById("progress").appendChild(card)
if(t.status=="done") document.getElementById("done").appendChild(card)

})
}

async function createTask(){

const title=prompt("Task title")
const description=prompt("Description")
const projectId=localStorage.getItem("projectId")

await fetch("http://localhost:3000/tasks",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({title,description,projectId})
})

loadTasks()
}

async function moveTask(id){
await fetch("http://localhost:3000/tasks/"+id,{method:"PUT"})
loadTasks()
}

async function deleteTask(id){
await fetch("http://localhost:3000/tasks/"+id,{method:"DELETE"})
loadTasks()
}

loadTasks()
