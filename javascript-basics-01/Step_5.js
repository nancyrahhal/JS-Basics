let validate=document.getElementById("validate");
validate.addEventListener("click",function(){
    let num1=document.getElementById("first_number");
    let num2=document.getElementById("second_number");
    let mult=num1.value*num2.value;
    alert(`The result of ${num1.value} multiplied by ${num2.value} is ${mult}`);
})