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


    const scriptURL = 'https://script.google.com/macros/s/AKfycbxrZsjAEtQH_-OheTkdNsbnWc3DuYBKelzjTQO0eRBRBn7U5S9HUZPgTbpdUB_hoZpCMg/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response =>{
      msg.innerHTML="Message sent sucessfully"
      setTimeout(function (){
        msg.innerHTML=""
      },2000)
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})