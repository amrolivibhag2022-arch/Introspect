console.log("profile.js loaded");

document.addEventListener("DOMContentLoaded", function () {

    loadProfile();

    const saveButton = document.getElementById("saveProfileBtn");

    if (saveButton) {
        saveButton.addEventListener(
            "click",
            saveProfile
        );
    }

    const logoutButton = document.getElementById("logoutBtn");

    if (logoutButton) {
        logoutButton.addEventListener(
            "click",
            function () {
                Session.logout();
            }
        );
    }

});



function getProfileStorageKey() {

    const username = Session.getUsername();

    return "introspect_profile_" + username;

}



function loadProfile() {

    const username = Session.getUsername();
    const role = Session.getRole();

    document.getElementById("username").value =
        username || "";

    document.getElementById("role").value =
        role || "";

    document.getElementById("usernameDisplay").innerText =
        username || "User";

    document.getElementById("roleDisplay").innerText =
        role || "User";


    const savedProfile =
        localStorage.getItem(
            getProfileStorageKey()
        );

    if (!savedProfile) {
        return;
    }

    const profile =
        JSON.parse(savedProfile);

    document.getElementById("name").value =
        profile.name || "";

    document.getElementById("email").value =
        profile.email || "";

    document.getElementById("bio").value =
        profile.bio || "";

    document.getElementById("goals").value =
        profile.goals || "";

}



function collectProfileData(existingCreatedAt) {

    return {

        username:
            Session.getUsername(),

        role:
            Session.getRole(),

        name:
            document.getElementById("name").value.trim(),

        email:
            document.getElementById("email").value.trim(),

        bio:
            document.getElementById("bio").value.trim(),

        goals:
            document.getElementById("goals").value.trim(),

        createdAt:
            existingCreatedAt || new Date().toISOString(),

        updatedAt:
            new Date().toISOString()

    };

}



function saveProfile() {

    const name =
        document.getElementById("name").value.trim();

    if (name === "") {

        alert("Name is required.");

        document.getElementById("name").focus();

        return;

    }


    let existingCreatedAt = null;

    const existingProfile =
        localStorage.getItem(
            getProfileStorageKey()
        );

    if (existingProfile) {

        existingCreatedAt =
            JSON.parse(existingProfile).createdAt;

    }


    const profile =
        collectProfileData(
            existingCreatedAt
        );


    localStorage.setItem(

        getProfileStorageKey(),

        JSON.stringify(profile)

    );


    alert(
        "Profile saved successfully."
    );

}