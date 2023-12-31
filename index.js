// show/hide nav menu
const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
    menu.style.display="flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

// Close nav bar
const closeNav = () => {
    menu.style.display="none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav);

// // // show answer of questions
const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click', () =>{
        faq.classList.toggle('open');

        // change icon
        const icon = faq.querySelector('.faq_icon i');
        if (icon.className === 'fa-solid fa-plus'){
            icon.className = 'fa-solid fa-minus';
        } else {
            icon.className = 'fa-solid fa-plus';
        }
    })
})

let number = document.querySelectorAll(".box .num");
let section = document.querySelector(".about");
let started = false;
let span = document.querySelector(".up");

// on scroll set functions to count and show/hide the up button
window.onscroll = function () {
  if (window.scrollY >= 300) {
    if (!started) {
      number.forEach((num) => startCount(num));
    }
    started = true;
  }

  // Show/hide the up button
  this.scrollY >= 300
    ? span.classList.add("show")
    : span.classList.remove("show");
};

// Function to increase elements
function startCount(count) {
  let goal = count.dataset.goal;
  let counterTime = setInterval(() => {
    count.textContent++;
    if (count.textContent === goal) {
      clearInterval(counterTime);
    }
  }, 2000 / goal);
}

// Scroll to the top when the up button is clicked
span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// add animation at sections
window.addEventListener('scroll',category);
  function category(){
    var category = document.querySelectorAll(".category")
    for(var i=0; i< category.length; i++){
      var windowHeight = window.innerHeight;
      var categoryTop = category[i].getBoundingClientRect().top;
      var point = 100;
      if (categoryTop < windowHeight - point ){
        category[i].classList.add("active")
      }
      else {
        category[i].classList.remove("active")
      }
    }
  } 
  category();

  // add animation at faq section
  window.addEventListener('scroll',faq);
  function faq(){
    var category = document.querySelectorAll(".faq")
    for(var i=0; i< category.length; i++){
      var windowHeight = window.innerHeight;
      var categoryTop = category[i].getBoundingClientRect().top;
      var point = 100;
      if (categoryTop < windowHeight - point ){
        category[i].classList.add("active")
      }
      else {
        category[i].classList.remove("active")
      }
    }
  } 
  faq();

  // store user name and password in local storage
  function registerUser() {
    var username = document.getElementsByName('username').value;
    var password = document.getElementsByName('password').value;
    // var image = document.getElementsByName('image').files[0];

    // Save username and password to local storage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    // Save image to local storage (for demonstration purposes, you may want to use a server to store images)
    var reader = new FileReader();
    reader.onload = function (e) {
        localStorage.setItem('image', e.target.result);
    };
    reader.readAsDataURL(image);

    alert('User registered successfully!');
}
registerUser()
function previewImage() {
    var image = document.getElementById('image');
    var imagePreview = document.getElementById('imagePreview');
    var file = image.files[0];

    if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            imagePreview.src = e.target.result;
        };
        reader.readAsDataURL(file);
    } else {
        imagePreview.src = '';
    }
}

// store user name and password by anither way
function SubForm (){
  $.ajax({
      url:'https://api.apispreadsheets.com/data/410/',
      type:'post',
      data:$("#myForm").serializeArray(),
      success: function(){
        alert("Form Data Submitted :)")
      },
      error: function(){
        alert("There was an error :(")
      }
  });
}