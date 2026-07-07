document.addEventListener("DOMContentLoaded", function () {

    console.log("reports.js loaded");

    // Display Username
    const usernameElement = document.getElementById("usernameDisplay");

    if (usernameElement) {
        usernameElement.textContent = Session.getUsername();
    }

    // Display Role
    const roleElement = document.getElementById("roleDisplay");

    if (roleElement) {
        roleElement.textContent = Session.getRole();
    }

    // Logout Button
    const logoutButton = document.getElementById("logoutBtn");

    if (logoutButton) {

        logoutButton.addEventListener("click", function () {

            Session.logout();

        });

    }

    loadReports();

});



function loadReports() {

    loadCurrentUser();

    loadReflectionCount();

    loadLatestReflection();

    loadProfileCompletion();

}



function loadCurrentUser() {

    const element =
        document.getElementById("currentUser");

    if (element) {

        element.innerText =
            Data.getCurrentUser();

    }

}



function loadReflectionCount() {

    const element =
        document.getElementById("totalReflections");

    if (element) {

        element.innerText =
            Data.getReflectionCount();

    }

}



function loadLatestReflection() {

    const element =
        document.getElementById("latestReflection");

    if (!element) {

        return;

    }

    const latest =
        Data.getLatestReflection();

    if (!latest) {

        element.innerText =
            "No Reflections";

        return;

    }

    element.innerText =
        latest.date;

}



function loadProfileCompletion() {

    const element =
        document.getElementById("profileCompletion");

    if (element) {

        element.innerText =
            Data.getProfileCompletion() + "%";

    }

}