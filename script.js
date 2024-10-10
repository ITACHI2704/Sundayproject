









gsap.from(".secone_right",{
  x:-5000,
  duration:1.9,
  delay:1,
 scrub:true  
})






var project = gsap.timeline()
project.from(".secone_left h3",{
  x:-5000,
  duration:1.9,
  delay:1,
  opacity:0,
 scrub:true  
})





project.from(".secone_left h1",{
  x:-5000,
  opacity:0,
  duration:1.5,
  scrub:true  

})


var header = gsap.timeline()
gsap.from(".header_left img ",{
y:-40,
opacity:0,
duration:1,
delay:0.5
})

gsap.from("nav ul li",{
y:-40,
opacity:0,
duration:1,
stagger:0.3
})


var box = gsap.timeline()
box.from(".rightform div ",{
y:-40,
opacity:0,
duration:1,
stagger:0.3
})



var boxte = gsap.timeline()
boxte.from(".leftform div ",{
y:-40,
opacity:0,
duration:1,
stagger:0.3
})




  















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



    // ...........................  

    





