let slide = document.querySelector(".bx-menu-alt-right")
let sliderbody =document.querySelector("nav")
let cut =document.querySelector(".bx-x-circle")

slide.addEventListener("click", ()=>{
sliderbody.style.transform = "translateX(0px)";
console.log(" menu was clickd")
})

cut.addEventListener("click", ()=>{
    sliderbody.style.transform = "translateX(1180px)";
    console.log("  cut was clickd")
    })


    // .............................

    let tablinks = document.getElementsByClassName("tab-links")
    let tabcontents = document.getElementsByClassName("tab-content")
    
    tablinks.addEventListener("click",(name)=>{
    return name ;
    })
  
    function opentab (tabname){
      for(tablink of tablinks){
        tablink.classList.remove("active-links")
      }
      for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
          }
      event.currentTarget.classList.add("active-links")
      document.getElementById(tabname).classList.add("active-tab")
    }









