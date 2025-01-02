// Keep track of active toggle buttons
let activeAmounts = [];

// Toggle button logic
function toggleAmount(button, amount) {
    if (button.classList.contains("active")) {
        
        button.classList.remove("active");
        activeAmounts = activeAmounts.filter(value => value !== amount);
    } else {
        button.classList.add("active");
        activeAmounts.push(amount);
    }

    // Update the custom donation input
    updateCustomDonation();
}

// Update the customDonation input with the sum of active amounts
function updateCustomDonation() {
    const total = activeAmounts.reduce((sum, value) => sum + value, 0);
    document.getElementById("customDonation").value = total;
}

// Toggle Stay Anonymous logic
function toggleAnonymous() {
    const isChecked = document.getElementById("stayAnonymous").checked;
    const firstName = document.getElementById("donation-firstname");
    const lastName = document.getElementById("donation-lastname");
    const email = document.getElementById("donation-email");

    if (isChecked) {
        firstName.value = "John-Jane";
        lastName.value = "Doe";
        email.value = "example@gmail.com";
    } else {
        firstName.value = "";
        lastName.value = "";
        email.value = "";
    }
}

// Confirm button logic
function confirmDonation() {
    const customDonation = document.getElementById("customDonation").value;
    const firstName = document.getElementById("donation-firstname").value;
    const lastName = document.getElementById("donation-lastname").value;
    const email = document.getElementById("donation-email").value;

    alert(`You have donated: ${customDonation} Birr\nName: ${firstName} ${lastName}\nEmail: ${email}`);
}