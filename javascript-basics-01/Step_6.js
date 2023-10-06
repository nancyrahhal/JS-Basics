let validate=document.getElementById("validate");
validate.addEventListener("click",function(){
    let num1=document.getElementById("first_number");
    let num2=document.getElementById("second_number");
    let rem=num1.value%num2.value;
    alert(`The remainder of ${num1.value} divided by ${num2.value} is ${rem}`);
})