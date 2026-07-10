console.log("Introspect script loaded");

document.addEventListener("DOMContentLoaded", function () {

    const loginForm =
        document.getElementById("loginForm");

    if (!loginForm) {

        return;

    }

    const username =
        document.getElementById("username");

    const password =
        document.getElementById("password");

    const rememberMe =
        document.getElementById("rememberMe");

    const loginBtn =
        document.getElementById("loginBtn");

    const togglePassword =
        document.getElementById("togglePassword");

    username.focus();

    function validateForm() {

        loginBtn.disabled = !(

            username.value.trim() &&
            password.value.trim()

        );

    }

    username.addEventListener(
        "input",
        validateForm
    );

    password.addEventListener(
        "input",
        validateForm
    );

    togglePassword.addEventListener(

        "click",

        function () {

            if (password.type === "password") {

                password.type = "text";
                togglePassword.innerText = "🙈";

            }

            else {

                password.type = "password";
                togglePassword.innerText = "👁";

            }

        }

    );

    loginForm.addEventListener(

        "submit",

        function (event) {

            event.preventDefault();

            const result =

                Auth.login(

                    username.value.trim(),

                    password.value.trim(),

                    rememberMe.checked

                );

            if (!result.success) {

                Activity.log(

                    "Authentication",

                    "Login Failed"

                );

                alert(result.message);

                password.focus();

                password.select();

                return;

            }

            Activity.log(

                "Authentication",

                "Login Success"

            );

            AppRouter.redirect(

                result.role

            );

        }

    );

});