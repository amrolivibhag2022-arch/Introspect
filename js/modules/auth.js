window.Auth = {

    storageKey: "introspect_users",



    initialize: function () {

        const users =
            JSON.parse(
                localStorage.getItem(this.storageKey)
            );

        if (users && users.length > 0) {

            return;

        }

        const defaultUsers = [

            {
                username: "admin",
                password: "admin123",
                role: "admin"
            },

            {
                username: "manager",
                password: "manager123",
                role: "manager"
            },

            {
                username: "user",
                password: "user123",
                role: "user"
            }

        ];

        localStorage.setItem(
            this.storageKey,
            JSON.stringify(defaultUsers)
        );

    },



    login: function (username, password) {

        this.initialize();

        const users =
            JSON.parse(
                localStorage.getItem(this.storageKey)
            ) || [];

        const account =
            users.find(function (user) {

                return (
                    user.username.toLowerCase() ===
                    username.toLowerCase()
                );

            });

        if (!account) {

            return {

                success: false,

                message: "User not found."

            };

        }

        if (account.password !== password) {

            return {

                success: false,

                message: "Invalid password."

            };

        }

        Session.save(

            account.role,

            account.username

        );

        return {

            success: true,

            role: account.role

        };

    }

};



Auth.initialize();