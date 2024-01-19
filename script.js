const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone')
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');

form.addEventListener('submit',(e)=>{
  if(!validateInputs()){
    e.preventDefault();
  } 
})

function validateInputs(){
  const usernameVal = username.value.trim();
  const emailVal = email.value.trim();
  const phoneVal = phone.value.trim();
  const passwordVal = password.value.trim();
  const cpasswordVal = cpassword.value.trim();

  let success = true;

  if(usernameVal === ''){
    success = false;
    setError(username,'Username is required')
  }
  else{
    setSuccess(username)
  }

  if(emailVal === ''){
    success = false;
    setError(email,'email is required')
  }
  else if(!validateEmail(emailVal)){
    success = false;
    setError(email,'Email not in globalformat')
  }
  else{
    setSuccess(email);
  }

  if(phoneVal === ''){
    success = false;
    setError(phone,'Phone no is required')
  }
  else if(!validatePhoneNo(phoneVal)){
    success = false;
    setError(phone,'Mobile no is not in the correct form') 
  }
  else{
    setSuccess(phone)
  }

  if(passwordVal === ''){
    success = false;
    setError(password,'Password is required')
  }
  else if(passwordVal.length < 8){
    success = false;
    setError(password,'password is very short')
  }
  else if(passwordVal.length > 26){
    success = false;
    setError(password,'password is too long')
  }
  else{
    setSuccess(password);
  }

  if(cpasswordVal === ''){
    success = false;
    setError(cpassword,'Password is required')
  }
  else if(cpasswordVal !== passwordVal){
    success = false;
    setError(cpassword,'Password does not match')
  }
  else{
    setSuccess(cpassword);
  }
    return success;
}

function checkPasswordStrength() {
  var password = document.getElementById('password').value;
  var strengthMeter = document.getElementById('strength-progress');
  var warning = document.getElementById('warning');
  var strength = 0;

  // Check for at least 6 characters
  if (password.length >= 6) {
      strength += 20;
      warning.innerHTML = 'Weak Password';
  }

  // Check for numbers
  if (password.length >= 7 && /\d/.test(password)) {
      strength += 20;
      warning.innerHTML = 'Better Password';

  }

  // Check for uppercase letters
  if (password.length >= 8 && /\d/.test(password) && /[A-Z]/.test(password)) {
      strength += 20;
      warning.innerHTML = 'Medium Password';

  }

  // Check for lowercase letters
  if (password.length >= 10 && /\d/.test(password) && /[A-Z]/.test(password) && /[a-z]/.test(password)) {
      strength += 20;
      warning.innerHTML = 'Super Password';

  }

  // Check for special characters
  if (password.length >= 12 && /\d/.test(password) && /[A-Z]/.test(password) && /[a-z]/.test(password) && /[$@$!%*?&#]/.test(password)) {
      strength += 20;
      warning.innerHTML = 'Super Strong Password';

  }

  strengthMeter.value = strength;
}

function setError(element,message){
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector('.error')

  errorElement.innerText = message;
  inputGroup.classList.add('error')
  inputGroup.classList.remove('success')
}
function setSuccess(element){
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector('.error');

  errorElement.innerText ='';
  inputGroup.classList.add('success')
  inputGroup.classList.remove('error')
}

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
};

const validatePhoneNo =(phone)=>{
  return phone.match( /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/);  
}