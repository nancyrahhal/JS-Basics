let validate=document.getElementById("validate");

validate.addEventListener("click",function(){
    let shoe_size=document.getElementById("shoe_size");
    let year=document.getElementById("year");
    let result=(shoe_size.value*2+5)*50-year.value+1766;
    alert(`The result is ${result}`)
})