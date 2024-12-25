

function openInSameWindow() {
    window.location.href = "donation.html"; // Navigates to the new page in the same window
}



//SECOND PAGE



////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////


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





