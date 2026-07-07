document.addEventListener("DOMContentLoaded", function () {

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

    console.log("progress.js loaded");

    loadProgressStatistics();

});



function loadProgressStatistics() {

    loadTotalReflections();

    loadLatestReflection();

    loadProfileCompletion();

    loadApplicationVersion();

}



function loadTotalReflections() {

    document.getElementById("totalReflections").innerText =
        Data.getReflectionCount();

}



function loadLatestReflection() {

    const latest = Data.getLatestReflection();

    if (!latest) {

        document.getElementById("latestReflection").innerText =
            "No Reflections";

        return;

    }

    document.getElementById("latestReflection").innerText =
        latest.date;

}



function loadProfileCompletion() {

    document.getElementById("profileCompletion").innerText =
        Data.getProfileCompletion() + "%";

}



function loadApplicationVersion() {

    const versionElement =
        document.getElementById("appVersion");

    if (versionElement) {

        versionElement.innerText = "v0.01";

    }

}