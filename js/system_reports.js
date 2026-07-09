console.log("system_reports.js loaded");

document.addEventListener("DOMContentLoaded", function () {

    initializePage();

    loadSystemReports();

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

}



function loadSystemReports() {

    const totalUsers =
        Data.getTotalMembers();

    const totalReflections =
        Data.getTotalReflections();

    const totalActivities =
        Activity.getAllActivities().length;

    const mostActiveUser =
        Data.getMostActiveMember();



    document.getElementById("registeredUsers").innerText =
        totalUsers;

    document.getElementById("totalReflections").innerText =
        totalReflections;

    document.getElementById("totalActivities").innerText =
        totalActivities;

    document.getElementById("mostActiveUser").innerText =
        mostActiveUser;



    document.getElementById("systemSummary").innerText =

        "The Introspect platform currently has " +

        totalUsers +

        " registered user(s), " +

        totalReflections +

        " reflection(s), and " +

        totalActivities +

        " recorded activit(y/ies). The most active user is '" +

        mostActiveUser +

        "'.";

    

    Activity.log(

        "System Reports",

        "Viewed System Reports"

    );

}