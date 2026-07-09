console.log("system_settings.js loaded");

document.addEventListener("DOMContentLoaded", function () {

    initializePage();

    loadSettings();

});



function initializePage() {

    document.getElementById("usernameDisplay").innerText =
        Session.getUsername();

    document.getElementById("roleDisplay").innerText =
        Session.getRole();



    document.getElementById("logoutBtn")
        .addEventListener("click", function () {

            Session.logout();

        });



    document.getElementById("clearActivityBtn")
        .addEventListener("click", clearActivityLogs);



    document.getElementById("resetDemoBtn")
        .addEventListener("click", resetDemoData);

}



function loadSettings() {

    document.getElementById("currentAdmin").innerText =
        Session.getUsername();

    document.getElementById("currentRole").innerText =
        Session.getRole();

    document.getElementById("activityCount").innerText =
        Activity.getAllActivities().length;



    Activity.log(

        "System Settings",

        "Viewed System Settings"

    );

}



function clearActivityLogs() {

    if (!confirm("Clear all activity logs?")) {

        return;

    }



    localStorage.removeItem("introspect_activity");



    alert("Activity logs cleared.");



    document.getElementById("activityCount").innerText = "0";

}



function resetDemoData() {

    const confirmation = confirm(

        "Reset all demo data?\n\nThis will remove profiles, reflections and activity logs."

    );



    if (!confirmation) {

        return;

    }



    const role =
        Session.getRole();

    const username =
        Session.getUsername();



    const keysToKeep = {

        loggedIn: localStorage.getItem("introspect_logged_in"),

        role: role,

        username: username

    };



    localStorage.clear();



    localStorage.setItem(

        "introspect_logged_in",

        keysToKeep.loggedIn

    );



    localStorage.setItem(

        "introspect_role",

        keysToKeep.role

    );



    localStorage.setItem(

        "introspect_username",

        keysToKeep.username

    );



    alert("Demo data has been reset.");



    location.reload();

}