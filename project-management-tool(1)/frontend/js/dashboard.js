
async function loadProjects(){
const res=await fetch("http://localhost:3000/projects")
const projects=await res.json()

const div=document.getElementById("projects")
div.innerHTML=""

projects.forEach(p=>{
const card=document.createElement("div")
card.innerHTML=`<h3>${p.title}</h3>
<button onclick="openProject('${p.id}')">Open</button>`
div.appendChild(card)
})
}

function openProject(id){
localStorage.setItem("projectId",id)
window.location="project.html"
}

async function createProject(){
const title=prompt("Project name")

await fetch("http://localhost:3000/projects",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({title})
})

loadProjects()
}

loadProjects()
