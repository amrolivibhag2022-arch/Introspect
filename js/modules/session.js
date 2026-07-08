window.Session = {

    save: function (role, username) {

        if (!role) {

            console.error("Role missing");

            return;

        }

        if (!username) {

            username = "Guest";

        }

        localStorage.setItem(
            "introspect_logged_in",
            "true"
        );

        localStorage.setItem(
            "introspect_role",
            role.toLowerCase()
        );

        localStorage.setItem(
            "introspect_username",
            username
        );

    },



    isLoggedIn: function () {

        return localStorage.getItem(
            "introspect_logged_in"
        ) === "true";

    },



    getRole: function () {

        return localStorage.getItem(
            "introspect_role"
        );

    },



    getUsername: function () {

        return localStorage.getItem(
            "introspect_username"
        ) || "Guest";

    },



    logout: function () {

    const username = Session.getUsername();

    const role = Session.getRole();

    if (window.Activity) {

        const activities =
            JSON.parse(
                localStorage.getItem("introspect_activity")
            ) || [];

        activities.push({

            id: Date.now(),

            username: username,

            role: role,

            module: "Authentication",

            action: "User Logged Out",

            timestamp: new Date().toISOString()

        });

        localStorage.setItem(

            "introspect_activity",

            JSON.stringify(activities)

        );

    }

    localStorage.removeItem("introspect_logged_in");
    localStorage.removeItem("introspect_role");
    localStorage.removeItem("introspect_username");

    window.location.href = "../pages/login.html";

}

};