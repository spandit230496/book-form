
const password1=document.getElementById("password1")
const password2=document.getElementById("password2")
const name=document.getElementById("name")
const lastname=document.getElementById("lastname")
const dob=document.getElementById("dob")
const email=document.getElementById("email")
const error=document.querySelector('h6')
const txt=document.querySelector('h3')


password2.addEventListener("blur", check);
password1.addEventListener("blur", check);  

 
    function check() {
        
        if (password1.value == password2.value) {
    error.style.color = 'green';
    error.innerHTML = 'matching';
  } else {
    error.style.color = 'red';
    error.innerHTML = 'not matching';
  }
   
    }