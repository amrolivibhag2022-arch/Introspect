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

    const loginBtn =
        document.getElementById("loginBtn");

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



    const togglePassword =
        document.getElementById(
            "togglePassword"
        );



    togglePassword.addEventListener(

        "click",

        function () {

            if (

                password.type === "password"

            ) {

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

                    password.value.trim()

                );



            if (!result.success) {

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