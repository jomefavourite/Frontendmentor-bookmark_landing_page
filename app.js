function callAll(name) {
  return document.querySelectorAll(name);
}
function call(name) {
  return document.querySelector(name);
}

let ham = call('.ham');
let logoImage = callAll('.logo_image');
let logoImage2 = call('.logo_image2');
let nav = call('.header__nav__list');
let input = call('input[type=email]');
let button = call('button[type=submit]');
let errorImg = call('.error-img');
let error = call('.error');

ham.addEventListener('click', () => {
  nav.classList.toggle('toggle_show');
  ham.classList.toggle('change');
  document.body.classList.toggle('overflow');
  logoImage2.classList.toggle('logo_image-change');
  logoImage.forEach(logoIcon => logoIcon.classList.toggle('logo_img_white'));
});

document.getElementById('defaultOpen').click();

// Tab Section
function openTab(evt, data) {
  var i, tabContent;

  tabContent = document.getElementsByClassName('tab');
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = 'none';
  }

  document.getElementById(data).style.display = 'flex';
  // evt.currentTarget.className += 'show';
  evt.currentTarget.className = 'show';
}

// var color = window.getComputedStyle(
// 	document.querySelector('.element'), ':before'
// ).getPropertyValue('color')

button.addEventListener('click', e => {
  e.preventDefault();
  if (input.value.length > 0) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.value)) {
      setTimeout(() => {
        error.textContent = 'SIgnIn';
      }, 200);
    } else {
      error.textContent = "Whoops, make sure it's an email";
      error.style.display = 'block';
      errorImg.style.display = 'block';
    }
  } else {
    error.textContent = '';
  }
  console.log(input.value.setAttribute('class', 'red'));
});
