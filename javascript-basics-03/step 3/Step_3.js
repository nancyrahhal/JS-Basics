let colors = document.querySelectorAll(".color");
let text = document.getElementsByTagName("p")[0];

colors.forEach(color => {
    color.addEventListener("click", () => {
        let background_color = window.getComputedStyle(color).backgroundColor;
        //
        text.style.color = background_color;
        //or
        //   if(background_color==="rgb(0, 128, 0)"){
        //     text.style.color=background_color;
        //   }
        //   else if(background_color==="rgb(255, 0, 0)"){
        //     text.style.color=background_color;
        //   }
        //   else if(background_color==="rgb(0, 0, 255)"){
        //     text.style.color=background_color;
        //   }



    });
});