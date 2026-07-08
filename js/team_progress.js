console.log("team_progress.js loaded");

document.addEventListener("DOMContentLoaded", function () {

    initializePage();

    loadStatistics();

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



function loadStatistics() {

    const totalMembers =
        Data.getTotalMembers();

    const totalReflections =
        Data.getTotalReflections();

    const averageCompletion =
        Data.getAverageProfileCompletion();

    const mostActive =
        Data.getMostActiveMember();



    document.getElementById("totalMembers").innerText =
        totalMembers;

    document.getElementById("totalReflections").innerText =
        totalReflections;

    document.getElementById("averageCompletion").innerText =
        averageCompletion + "%";

    document.getElementById("mostActiveMember").innerText =
        mostActive;



    document.getElementById("growthSummary").innerText =

        "Your team currently has " +

        totalMembers +

        " member(s), " +

        totalReflections +

        " reflection(s), and an average profile completion of " +

        averageCompletion +

        "%.";

    Activity.log(

        "Team Progress",

        "Viewed Team Progress"

    );

}