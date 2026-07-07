console.log("settings.js loaded");

document.addEventListener("DOMContentLoaded", function () {

    loadSettings();

    const logoutButton = document.getElementById("logoutBtn");

    if (logoutButton) {

        logoutButton.addEventListener("click", function () {

            Session.logout();

        });

    }

});

function loadSettings() {

    const username = Session.getUsername() || "User";
    const role = Session.getRole() || "User";

    document.getElementById("usernameDisplay").innerText = username;
    document.getElementById("roleDisplay").innerText = role;

    document.getElementById("currentUser").innerText = username;
    document.getElementById("currentRole").innerText = role;

}