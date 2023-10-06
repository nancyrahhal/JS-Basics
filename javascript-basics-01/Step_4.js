
let validate = document.getElementById("validate");


validate.addEventListener("click", function () {
    let user_name = document.getElementById("name");
    let surname = document.getElementById("surname");
    let city = document.getElementById("city");

    alert(`Name: ${user_name.value}\nSurname: ${surname.value}\nCity: ${city.value}`);
})

