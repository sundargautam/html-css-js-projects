const panels = document.querySelectorAll(".panel");
const removeActiveClass = ()=>{
    panels.forEach((item,index)=>{
       item.classList.remove("active");
    })
}
panels.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        removeActiveClass();
        item.classList.add("active");
    })
})

