console.log("Introspect script loaded");

document.addEventListener("DOMContentLoaded", function () {

    const loginForm =
        document.getElementById("loginForm");

    if (!loginForm) {

        return;

    }

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const username =
            document.getElementById("username")
            .value
            .trim();

        const password =
            document.getElementById("password")
            .value
            .trim();

        if (!username || !password) {

            alert("Please fill all fields");

            return;

        }

        const result =
            Auth.login(
                username,
                password
            );

        if (!result.success) {

            alert(result.message);

            return;

        }

        AppRouter.redirect(
            result.role
        );

    });

});