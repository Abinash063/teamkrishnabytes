const passwordview = document.querySelector('.Password');
const Eyeview = document.getElementById('eyeview');
const Touch = document.querySelector('.touch');
  console.log(passwordview.type);
Touch.addEventListener('click',()=>{
  if(passwordview.type === 'password')
  {
    Eyeview.classList.remove('fa-eye-slash');
    Eyeview.classList.add('fa-eye');
    passwordview.type = 'text';
  }
  else
  {
    Eyeview.classList.remove('fa-eye');
    Eyeview.classList.add('fa-eye-slash');
    passwordview.type = 'password';
  }
});
