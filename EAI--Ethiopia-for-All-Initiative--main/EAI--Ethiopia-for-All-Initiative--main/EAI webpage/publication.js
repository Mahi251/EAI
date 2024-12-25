let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})



document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.querySelector('.dropdown');
    const dropdownBtn = document.querySelector('.menu-button'); // Updated selector to match your HTML
    const body = document.body;

    // Toggle dropdown and scroll disabling
    dropdownBtn.addEventListener('click', () => {
        dropdown.classList.toggle('active');
        if (dropdown.classList.contains('active')) {
            body.style.overflow = 'hidden'; // Disable scroll
        } else {
            body.style.overflow = ''; // Enable scroll
        }
    });

    // Close dropdown if clicked outside
    document.addEventListener('click', (event) => {
        if (!dropdown.contains(event.target) && !dropdownBtn.contains(event.target)) {
            dropdown.classList.remove('active');
            body.style.overflow = ''; // Enable scroll
        }
    });
});
  