let img=document.querySelectorAll("img");

img.forEach((img, index)=>{
    img.addEventListener("mouseover",()=>{
        img.src=`images/image${index+1}_2.jpg`;
    })
    
})