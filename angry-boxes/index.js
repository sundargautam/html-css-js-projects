const listOfBoxes = document.querySelectorAll(".box");
const removeAngryFaces = ()=>{
    listOfBoxes.forEach(box=>{
        box.getElementsByClassName("mood")[0].innerHTML = "I'm Happy";
        box.classList.remove("angry")
    })
}
listOfBoxes.forEach(box=>{
    box.addEventListener("mouseover",()=>{ 
        removeAngryFaces()
        box.getElementsByClassName("mood")[0].innerHTML = "I'm Sad";
        box.classList.add("angry");
    })
})