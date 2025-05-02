var tablinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-contents")

var sidemenu = document.querySelector(".sidemenu")


function opentab(tabname) {
    // Get all elements with class="tabcontent" and hide them:
   for(tablink of tablinks){
    tablink.classList.remove("active")
   }
   for(tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active");
    document.getElementById(tabname).classList.add("active-tab");
}



function openmenu(){
    let open = document.querySelector(".fa-burger");
    sidemenu.style.right="0"
    open.style.display="none"
}
function closemenu(){
    let open = document.querySelector(".fa-burger");
    sidemenu.style.right="-200px"
    open.style.display="block"
}



  const scriptURL = 'https://script.google.com/macros/s/AKfycbxFcNB2Rj_XSW_6M_nwjOboWHF9aO8ELb2T9vnFHTpyJa1pb910OVlSCjpWR4lMqXA/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.querySelector(".msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.textContent ="Your message has been sent successfully!"
        setInterval(function(){
            msg.textContent =""

        },6000)
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })
