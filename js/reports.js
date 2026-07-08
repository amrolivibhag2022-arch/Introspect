document.addEventListener("DOMContentLoaded", function () {

    console.log("reports.js loaded");

    initializePage();

    loadReports();

});



function initializePage() {

    const usernameElement =
        document.getElementById("usernameDisplay");

    if (usernameElement) {

        usernameElement.innerText =
            Session.getUsername();

    }

    const roleElement =
        document.getElementById("roleDisplay");

    if (roleElement) {

        roleElement.innerText =
            Session.getRole();

    }

    const logoutButton =
        document.getElementById("logoutBtn");

    if (logoutButton) {

        logoutButton.addEventListener(

            "click",

            function () {

                Session.logout();

            }

        );

    }

}



function loadReports() {

    loadCurrentUser();

    loadReflectionCount();

    loadLatestReflection();

    loadProfileCompletion();

}



function loadCurrentUser() {

    const element =
        document.getElementById("currentUser");

    if (!element) {

        return;

    }

    element.innerText =
        Data.getCurrentUser();

}



function loadReflectionCount() {

    const element =
        document.getElementById("totalReflections");

    if (!element) {

        return;

    }

    element.innerText =
        Data.getReflectionCount();

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

    if (!element) {

        return;

    }

    element.innerText =
        Data.getProfileCompletion() + "%";

}