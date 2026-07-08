console.log("admin_dashboard.js loaded");

document.addEventListener("DOMContentLoaded", function () {

    initializePage();

    loadDashboard();

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



function loadDashboard() {

    const totalUsers =
        Data.getTotalMembers();

    const totalReflections =
        Data.getTotalReflections();

    const totalActivities =
        Activity.getAllActivities().length;

    const mostActiveUser =
        Data.getMostActiveMember();



    document.getElementById("totalUsers").innerText =
        totalUsers;

    document.getElementById("totalReflections").innerText =
        totalReflections;

    document.getElementById("totalActivities").innerText =
        totalActivities;

    document.getElementById("mostActiveUser").innerText =
        mostActiveUser;



    document.getElementById("systemOverview").innerText =

        "System currently contains " +

        totalUsers +

        " registered user(s), " +

        totalReflections +

        " reflection(s), and " +

        totalActivities +

        " recorded activit(y/ies). Most active user: " +

        mostActiveUser +

        ".";



    Activity.log(

        "Admin Dashboard",

        "Viewed Dashboard"

    );

}