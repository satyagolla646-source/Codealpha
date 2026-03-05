
async function register(){
const username=document.getElementById("username").value
const email=document.getElementById("email").value
const password=document.getElementById("password").value

await fetch("http://localhost:3000/register",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({username,email,password})
})

alert("Registered")
window.location="index.html"
}

async function login(){
const email=document.getElementById("email").value
const password=document.getElementById("password").value

const res=await fetch("http://localhost:3000/login",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({email,password})
})

const data=await res.json()

localStorage.setItem("user",JSON.stringify(data))

window.location="dashboard.html"
}
