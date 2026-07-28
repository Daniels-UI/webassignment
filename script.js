// Welcome Message
window.onload = function () {
    let username = prompt("Welcome! Please enter your name:");

    if (username !== null && username.trim() !== "") {

        let welcome = document.getElementById("welcomeMessage");

        if (welcome) {
            welcome.innerHTML = "Welcome to our website, <strong>" + username + "</strong>!";
        }
    }
};


// Form Validation
function validateForm() {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all required fields.");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}


// Show/Hide Information
function toggleInfo() {

    let info = document.getElementById("extraInfo");

    if (info.style.display === "none") {
        info.style.display = "block";
    } else {
        info.style.display = "none";
    }
}


// Change Theme Colour
function changeTheme() {

    document.body.style.backgroundColor = "#d6f5d6";

    document.body.style.color = "#000";
}


// Confirmation Button
function confirmAction() {

    alert("Thank you! Your action was completed successfully.");
}
