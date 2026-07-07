console.log("reports.js loaded");

document.addEventListener("DOMContentLoaded", function () {

    loadReports();

    const logoutButton = document.getElementById("logoutBtn");

    if (logoutButton) {

        logoutButton.addEventListener("click", function () {

            Session.logout();

        });

    }

});



function loadReports() {

    const username = Session.getUsername() || "User";
    const role = Session.getRole() || "User";

    document.getElementById("usernameDisplay").innerText = username;
    document.getElementById("roleDisplay").innerText = role;
    document.getElementById("currentUser").innerText = username;

    const reflections = JSON.parse(
        localStorage.getItem("introspect_reflections") || "[]"
    );

    document.getElementById("totalReflections").innerText =
        reflections.length;

    if (reflections.length > 0) {

        const latestReflection =
            reflections[reflections.length - 1];

        document.getElementById("latestReflection").innerText =
            latestReflection.date || "Available";

    }

    const profile = JSON.parse(
        localStorage.getItem(
            "introspect_profile_" + username
        ) || "{}"
    );

    let completed = 0;

    if (profile.username) completed++;
    if (profile.name) completed++;
    if (profile.email) completed++;
    if (profile.bio) completed++;
    if (profile.goals) completed++;

    const percentage =
        Math.round((completed / 5) * 100);

    document.getElementById("profileCompletion").innerText =
        percentage + "%";

}