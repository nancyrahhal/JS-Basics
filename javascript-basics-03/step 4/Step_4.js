let test=document.querySelector("button");
let password=document.getElementById("password");
let confirmation=document.getElementById("confirmation");


test.addEventListener("click",()=>{

if(password.value!==confirmation.value){
    password.style.border="2px solid red";
    confirmation.style.border="2px solid red";
}
else{}
})
