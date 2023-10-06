let validate=document.getElementById("validate");

validate.addEventListener("click",function(){
    let age=document.getElementById("age");
    if(age.value>18){
        alert(`You are over 18`);
    }
    else{
        alert(`You are under 18`);
    }
})