let reset=document.querySelector("button");


reset.addEventListener("click", function(){
    let name=document.getElementById("name");
    let surname=document.getElementById("surname");
    let city=document.getElementById("city");
    let yesNo=window.confirm(`do you want to clear?`)
    if(yesNo){
        name.value=surname.value=city.value="";
    }
    
})