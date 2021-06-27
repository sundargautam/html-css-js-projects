let bars= document.querySelector(".nav__bars");
let sidebar = document.querySelector(".sidebar");
let content = document.querySelector(".content");
bars.addEventListener("click",()=>{
 sidebar.classList.toggle("sidebar_show");
 content.classList.toggle("content_show");

})