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

const reflectionKey = "introspect_reflections";

function loadProgressStatistics() {

    loadTotalReflections();

    loadLatestReflection();

    loadProfileCompletion();

    loadApplicationVersion();

}

function loadTotalReflections() {

    const username = Session.getUsername();

    const reflections =
        JSON.parse(localStorage.getItem(reflectionKey)) || [];

    const total =
        reflections.filter(item => item.username === username).length;

    document.getElementById("totalReflections").innerText = total;

}

function loadLatestReflection() {

    const username = Session.getUsername();

    const reflections =
        JSON.parse(localStorage.getItem(reflectionKey)) || [];

    const userReflections =
        reflections.filter(item => item.username === username);

    if (userReflections.length === 0) {

        document.getElementById("latestReflection").innerText =
            "No Reflections";

        return;

    }

    const latest =
        userReflections[userReflections.length - 1];

    document.getElementById("latestReflection").innerText =
        latest.date;

}

function loadProfileCompletion() {

    const profileKey =
        "introspect_profile_" + Session.getUsername();

    const profile =
        JSON.parse(localStorage.getItem(profileKey));

    if (!profile) {

        document.getElementById("profileCompletion").innerText =
            "0%";

        return;

    }

    let completed = 0;

    if (profile.name) completed++;

    if (profile.email) completed++;

    if (profile.bio) completed++;

    if (profile.goals) completed++;

    const percentage =
        Math.round((completed / 4) * 100);

    document.getElementById("profileCompletion").innerText =
        percentage + "%";

}

function loadApplicationVersion() {

    document.getElementById("appVersion").innerText =
        "v0.01";

}