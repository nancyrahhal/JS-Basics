let div=document.createElement("div");  
let input=document.getElementById("name");
let body=document.querySelector("body");

body.appendChild(div);

input.addEventListener("input",function(){
 div.textContent=`the name is: ${input.value}`;
})