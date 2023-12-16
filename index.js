
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
