document.addEventListener("DOMContentLoaded", function () {
    // Check authentication status and update UI accordingly
    checkAuthentication();

    // Show authentication modal when the user is not logged in
    if (!isLoggedIn()) {
        showModal();
    }
});

function isLoggedIn() {
    // Implement logic to check if the user is logged in
    // For simplicity, using a dummy check here
    return localStorage.getItem("token") !== null;
}

function checkAuthentication() {
    const userInfoDiv = document.getElementById("user-info");
    if (isLoggedIn()) {
        const username = localStorage.getItem("username");
        userInfoDiv.innerHTML = `Welcome, ${username}! <button onclick="logout()">Logout</button>`;
    } else {
        userInfoDiv.innerHTML = '<button onclick="showModal()">Login / Register</button>';
    }
}

function showModal() {
    const modal = document.getElementById("auth-modal");
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("auth-modal");
    modal.style.display = "none";
}

function login() {
    // Implement login logic here
    // For simplicity, using a dummy login with a token and username
    const token = "dummyToken";
    const username = "user123";
    localStorage.setItem("token", token);
    localStorage.setItem("username", username);
    checkAuthentication();
    closeModal();
}

function logout() {
    // Implement logout logic here
    // For simplicity, just removing the token
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    checkAuthentication();
}
