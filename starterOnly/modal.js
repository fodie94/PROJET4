function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
  x.className += " responsive";
  } else {
  x.className = "topnav";
  }
  }
  // DOM Elements
  const modalbg = document.querySelector(".bground");
  const modalbg2 = document.querySelector(".bground2");
  const modalclose = document.querySelectorAll(".close");
  const modalclose2 = document.querySelectorAll(".bground2 .close");
  const modalfin = document.querySelectorAll(" .bground2 .modal-btn ");
  const modalBtn = document.querySelectorAll(".modal-btn");
  const formData = document.querySelectorAll(".formData");

  modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
  function launchModal() {
  modalbg.style.display = "block"; 
  }
  modalclose.forEach((btn) => btn.addEventListener("click", closeModal));
  function closeModal() {
  modalbg.style.display = "none";
  }
  modalfin.forEach((btn) => btn.addEventListener("click", closeModal2));
  function closeModal2() {
  modalbg.style.display = "none";
  modalbg2.style.display = "none";
  }
  modalclose2.forEach((btn) => btn.addEventListener("click", closeModal3));
  function closeModal3() {
  modalbg.style.display = "none";
  modalbg2.style.display = "none";
  }
  const first = document.getElementById("first");
  const last = document.getElementById("last");
  const email = document.getElementById("email");
  const birthdate = document.getElementById("birthdate");
  const quantity = document.getElementById("quantity");
  const lastNameError = document.getElementById("lastNameError");
  const firstNameError =  document.getElementById("firstNameError");
  const emailError =  document.getElementById("emailError");
  const dateError =  document.getElementById("dateError");
  const radioButtons = document.querySelectorAll("input[name='location']");
  const locationError = document.getElementById("locationError");
  const conditionValid = document.getElementById("checkbox1");
  const erreur = document.getElementById("erreur");
  const erreurRed = document.getElementById("text-control2");
  let isRadioButtonValid = false;
  let isconditionValid = false;
  document.getElementById("reserve").addEventListener("submit",function(e) {
  let error = false;
  e.preventDefault();
  //check nombre//
  const numberFormat =new RegExp(/^[0-9]+$/);
  if(!quantity.value){
  quantityError.innerText = "Veuillez renseigner un nombre";
  quantityError.classList.remove('hidden');
  quantity.classList.add('inputError');
  error = true;
  //quantityError.classList.add('hidden');
  } else  if (!quantity.value.match(numberFormat)) {
  quantityError.innerText = "no valid number";
  quantityError.classList.remove('hidden');
  quantity.classList.add('inputError');
  error = true;
  //  return true;
  } else {
  // alert("Invalid address!");
  quantityError.classList.add('hidden');
  quantity.classList.remove('inputError');
  //return false;
  }
  //check ddn//
  if (!birthdate.value) {
  dateError.innerText = "Veuillez renseigner votre date de naissance";
  dateError.classList.remove('hidden');
  birthdate.classList.add('inputError');
  error = true;
  }else{
  dateError.classList.add('hidden');
  birthdate.classList.remove('inputError');
  
  }
  //check nom//
  if (!last.value) {
  lastNameError.innerText = "Veuillez renseigner votre nom";
  lastNameError.classList.remove('hidden');
  last.classList.add('inputError');
  error = true;
  }else if(last.value.length<2){
  lastNameError.innerText =  "Votre nom doit contenir au moins 2 caractères";
  lastNameError.classList.remove('hidden');
  last.classList.add('inputError');
  error = true;
  }else{
  lastNameError.classList.add('hidden');
  last.classList.remove('inputError');

  }
  //check prenom//
  if (!first.value) {
  firstNameError.innerText = "Veuillez renseigner votre prenom";
  firstNameError.classList.remove('hidden');
  first.classList.add('inputError');
  error = true;
  }else if(first.value.length<2){
  firstNameError.innerText =  "Votre prenom doit contenir au moins 2 caractères";
  firstNameError.classList.remove('hidden');
  first.classList.add('inputError');
  error = true;
  }else{
    first.classList.remove('inputError');
    firstNameError.classList.add('hidden');
  }
  //check email//
  const mailFormat =
  new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/);
  if(!email.value){
  emailError.innerText = "Veuillez renseigner votre email";
  emailError.classList.remove('hidden');
  email.classList.add('inputError');
  error = true;
  } else  if (!email.value.match(mailFormat)) {
  emailError.innerText = "Veuillez saisir une adresse email valide.";
  emailError.classList.remove('hidden');
  email.classList.add('inputError');
  error = true;
  } else {   
  emailError.classList.add('hidden');
  email.classList.remove('inputError');
  }

  console.log(radioButtons);
  for(let radioButton of [...radioButtons]){
  console.log(radioButton.checked);
  if (radioButton.checked){
  isRadioButtonValid = true;
  }
  }
  if(isRadioButtonValid){
  locationError.classList.add('hidden');
  }else{
  locationError.innerText = "Veuillez sélectionner une ville.";
  locationError.classList.remove('hidden');
  error = true;
  }
  if(!conditionValid.checked){
  conditionError.innerText = "Veuillez accepter les conditions d'utilisation";
  conditionError.classList.remove('hidden');
  error = true;
  }else{
  conditionError.classList.add('hidden');
  }
  if(!error){
  modalbg.style.display = "none";
  modalbg2.style.display = "block";  
  }
  });