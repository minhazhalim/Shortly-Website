const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');
const linkInput = document.getElementById('link-input');
const linkForm = document.getElementById('link-form');
const errorMessage = document.getElementById('error-message');
function navToggle(){
     menuButton.classList.toggle('open');
     menu.classList.toggle('flex');
     menu.classList.toggle('hidden');
}
menuButton.addEventListener('click',navToggle);
function validURL(string){
     const pattern = new RegExp('^(https?:\\/\\/)?' + '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + '((\\d{1,3}\\.){3}\\d{1,3}))' + '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + '(\\?[;&a-z\\d%_.~+=-]*)?' + '(\\#[-a-z\\d_]*)?$','i');
     return !!pattern.test(string);
}
function formSubmit(event){
     event.preventDefault();
     if(input.value === ""){
          errorMessage.innerHTML = 'Please Enter Something';
          linkInput.classList.add('border-red');
     }else if(!validURL(input.value)){
          errorMsg.innerHTML = 'Please Enter a Valid URL';
          linkInput.classList.add('border-red');
     }else{
          errorMessage.innerHTML = "";
          linkInput.classList.remove('border-red');
          alert('Success');
     }
}
linkForm.addEventListener('submit',formSubmit);