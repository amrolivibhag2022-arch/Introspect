console.log("member_activity.js loaded");

document.addEventListener("DOMContentLoaded", function () {

    initializePage();

    loadActivityDashboard();

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



function loadActivityDashboard() {

    const activities =
        Activity.getAllActivities();

    loadStatistics(activities);

    loadTimeline(activities);

}



function loadStatistics(activities) {

    document.getElementById("totalActivities").innerText =
        activities.length;



    const users = new Set();

    activities.forEach(function (activity) {

        users.add(activity.username);

    });

    document.getElementById("activeUsers").innerText =
        users.size;



    if (activities.length === 0) {

        document.getElementById("latestActivity").innerText =
            "No Activity";

        document.getElementById("lastUpdated").innerText =
            "--";

        return;

    }



    const latest =
        activities[activities.length - 1];



    document.getElementById("latestActivity").innerText =

        latest.username +
        " - " +
        latest.action;



    document.getElementById("lastUpdated").innerText =

        new Date(
            latest.timestamp
        ).toLocaleString();

}



function loadTimeline(activities) {

    const body =
        document.getElementById("activityTableBody");

    body.innerHTML = "";



    if (activities.length === 0) {

        body.innerHTML =

            "<tr><td colspan='5'>No activity available.</td></tr>";

        return;

    }



    activities
        .slice()
        .reverse()
        .forEach(function (activity) {

            body.innerHTML += `

<tr>

<td>${activity.username}</td>

<td>${activity.role}</td>

<td>${activity.module}</td>

<td>${activity.action}</td>

<td>${new Date(activity.timestamp).toLocaleString()}</td>

</tr>

`;

        });

}