// up button
// let span = document.querySelector(".up");
// window.onscroll = function () {
//   this.scrollY >= 300 ? span.classList.add("show") : span.classList.remove("show");
// };

// span.onclick = function () {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// };
// // show answer of questions
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

// counter number in about section
let number = document.querySelectorAll(".box .num");
let section = document.querySelector(".about");
let started = false;

// on scroll set function to count
window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {
    if (!started){
      number.forEach((num) => startCount(num));
    }
    started = true;
  }
};


// function to increase elements
function startCount(count){
  let goal = count.dataset.goal;
  let  counterTime = setInterval(() => {
  count.textContent++;
  if( count.textContent == goal){
    clearInterval(counterTime);
  }
}, 2000 / goal);
}
