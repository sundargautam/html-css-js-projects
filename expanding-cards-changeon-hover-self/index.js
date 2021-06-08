const myPhotos = document.querySelectorAll("img");
const removePreviousPattern = ()=>{
        myPhotos.forEach(item=>{
            item.style.maxWidth="10%";
        })
}
myPhotos.forEach((item)=>{
    item.addEventListener("mouseover",()=>{
        removePreviousPattern();
        item.style.maxWidth = "60%";
    })
})