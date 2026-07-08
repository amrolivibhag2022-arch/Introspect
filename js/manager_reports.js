console.log("manager_reports.js loaded");

document.addEventListener("DOMContentLoaded", function () {

    initializePage();

    loadReports();

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



function loadReports() {

    const totalMembers =
        Data.getTotalMembers();

    const totalReflections =
        Data.getTotalReflections();

    const averageCompletion =
        Data.getAverageProfileCompletion();

    const mostActiveMember =
        Data.getMostActiveMember();



    document.getElementById("totalMembers").innerText =
        totalMembers;

    document.getElementById("totalReflections").innerText =
        totalReflections;

    document.getElementById("averageCompletion").innerText =
        averageCompletion + "%";

    document.getElementById("mostActiveMember").innerText =
        mostActiveMember;



    document.getElementById("executiveSummary").innerText =

        "Your team currently consists of " +

        totalMembers +

        " member(s). They have submitted " +

        totalReflections +

        " reflection(s). The average profile completion is " +

        averageCompletion +

        "%. The most active member is '" +

        mostActiveMember +

        "'.";



    if (window.Activity) {

        Activity.log(

            "Manager Reports",

            "Viewed Reports"

        );

    }

}