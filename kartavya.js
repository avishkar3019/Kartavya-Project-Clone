let icon = document.querySelector(".icon-menu");
let ul = document.querySelector("ul");

icon.addEventListener("click", () => {
  ul.classList.toggle("showData");

  if (ul.classList.contains("showData")) {
    document.getElementById("hello").className = "fa-solid fa-xmark";
  } else {
    document.getElementById("hello").className = "fa-solid fa-bars";
  }
});


let payment = document.querySelector(".payment-button");
payment.addEventListener("click", ()=>{
  alert("Redirecting to Razorpay for donation...");
})

document.querySelectorAll('*').forEach(el => {
  if (el.scrollWidth > el.clientWidth) console.log(el);
});


let a = document.querySelector(".apply-button");
a.addEventListener("click",()=>{
window.location.href="volunteer.html";
})



