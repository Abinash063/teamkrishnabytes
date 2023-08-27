const user = document.querySelector('.User');
const email = document.querySelector('.email');
const passwrd1 = document.querySelector('.Password');
const passwrd2 = document.querySelector('.Confirmpass');
const invalid = document.querySelector('.in-valid');
const submit = document.querySelector('.submit1');
const touch = document.querySelector('.touch');
const touch1 = document.querySelector('.touch1');
const Eyeview = document.getElementById('eyeview');
const eyeview = document.getElementById('eyeview1');



submit.addEventListener('click',()=>{
  let regname = /^[a-z A-Z]([0-9 a-z A-Z]){4,7}$/;
  let regemail = /^([_\-\.0-9a-z])@([a-z]+)\.([a-z])$/;
  let passwrd  = /^[a-z A-Z]([0-9 a-z A-Z \- \. _ ]){8,10}$/;
  let email1 = email.value;
  if(regemail.test(email1))
  {
  }
  else{
    invalid.style.display = 'inline-block';
    email.value = "";
    email.style.borderBottom = '5px solid red';
  }
  let name1 = user.value;
  if(regname.test(user))
  {
  }
  else{
    invalid.style.display = 'inline-block';
    user.value = "";
    user.style.borderBottom = '5px solid red';
  }
  if(passwrd.test(passwrd1))
  {
  }
  else{
    invalid.style.display = 'inline-block';
    passwrd1.value = "";
    passwrd1.style.borderBottom = '5px solid red';
  }
  if(passwrd1.value != passwrd2.value)
  {
    invalid.style.display = 'inline-block';
    passwrd2.value = "";
    passwrd2.style.borderBottom = '5px solid red';
  }
  email.value = "";
  user.value = "";
  passwrd1.value = "";
  passwrd2.value = "";
});

touch.addEventListener('click',()=>{
  if(passwrd1.type === 'password')
  {
    Eyeview.classList.remove('fa-eye-slash');
    Eyeview.classList.add('fa-eye');
    passwrd1.type = 'text';
  }
  else
  {
    Eyeview.classList.remove('fa-eye');
    Eyeview.classList.add('fa-eye-slash');
    passwrd1.type = 'password';
  }
});

touch1.addEventListener('click',()=>{
  if(passwrd2.type === 'password')
  {
    eyeview.classList.remove('fa-eye-slash');
    eyeview.classList.add('fa-eye');
    passwrd2.type = 'text';
  }
  else
  {
    eyeview.classList.remove('fa-eye');
    eyeview.classList.add('fa-eye-slash');
    passwrd2.type = 'password';
  }
});