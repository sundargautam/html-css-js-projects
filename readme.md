## Most used Javscript tricks ###

```
## Toggling classes (mostly for active or non active)
let demo = document.querySelectorAll(".button");

const removeActiveClass =()=>{
    demo.forEach(item=>{
        item.classList.remove("active");
    })
}
demo.forEach(button=>{
    button.addEventListener("click",()=>{
        removeActiveClass();
        button.classList.add("active")
    })
})

Note: before each event we added removeActiveClass() because before applying styles we need to remove all previous styles.Otherwise previously clicked item will have active styles attached to them
```