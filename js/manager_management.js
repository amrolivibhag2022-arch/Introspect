console.log("manager_management.js loaded");

document.addEventListener("DOMContentLoaded", function () {

    initializePage();

    loadManagerManagement();

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



function loadManagerManagement() {

    const profiles =
        Data.getAllProfiles();

    const activities =
        Activity.getAllActivities();



    const managers =
        profiles.filter(function (profile) {

            return (profile.role || "").toLowerCase() === "manager";

        });



    loadStatistics(
        managers,
        activities
    );

    loadManagerTable(
        managers,
        activities
    );



    Activity.log(

        "Manager Management",

        "Viewed Manager Management"

    );

}



function loadStatistics(
    managers,
    activities
) {

    document.getElementById("totalManagers").innerText =
        managers.length;

    document.getElementById("activeManagers").innerText =
        managers.length;



    let managerActivities = 0;

    let totalCompletion = 0;



    managers.forEach(function (manager) {

        managerActivities +=
            activities.filter(function (item) {

                return item.username === manager.username;

            }).length;

        totalCompletion +=
            calculateCompletion(manager);

    });



    document.getElementById("totalActivities").innerText =
        managerActivities;



    const average =
        managers.length === 0
            ? 0
            : Math.round(
                totalCompletion / managers.length
            );



    document.getElementById("averageCompletion").innerText =
        average + "%";

}



function loadManagerTable(
    managers,
    activities
) {

    const table =
        document.getElementById("managerTableBody");

    table.innerHTML = "";



    if (managers.length === 0) {

        table.innerHTML =

            `
            <tr>
                <td colspan="5">
                    No managers found
                </td>
            </tr>
            `;

        return;

    }



    managers.forEach(function (manager) {

        const activityCount =
            activities.filter(function (item) {

                return item.username === manager.username;

            }).length;



        table.innerHTML +=

            `
            <tr>

                <td>${manager.username || "-"}</td>

                <td>${manager.role || "Manager"}</td>

                <td>${calculateCompletion(manager)}%</td>

                <td>${activityCount}</td>

                <td>Active</td>

            </tr>
            `;

    });

}



function calculateCompletion(profile) {

    let completed = 0;

    if (profile.name) completed++;
    if (profile.email) completed++;
    if (profile.bio) completed++;
    if (profile.goals) completed++;

    return Math.round((completed / 4) * 100);

}