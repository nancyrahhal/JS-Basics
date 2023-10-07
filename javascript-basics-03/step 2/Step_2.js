let anchor=document.querySelectorAll("a");
let text=document.getElementsByTagName("p")[0];
// console.log(text);

anchor.forEach((anchor)=>{
    anchor.addEventListener("click",()=>{
        if(anchor.id=="show"){
            text.style.display="block";
        }
        else if(anchor.id=="hide"){
            text.style.display="none";
        }
    })
    
})