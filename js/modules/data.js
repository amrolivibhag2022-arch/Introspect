window.Data = {

    getCurrentUser: function () {

        return Session.getUsername() || "User";

    },



    getUserProfile: function () {

        const key =
            "introspect_profile_" +
            this.getCurrentUser();

        const profile =
            localStorage.getItem(key);

        return profile
            ? JSON.parse(profile)
            : null;

    },



    getUserReflections: function () {

        const reflections =
            JSON.parse(
                localStorage.getItem(
                    "introspect_reflections"
                )
            ) || [];

        return reflections.filter(

            item =>

            item.username ===
            this.getCurrentUser()

        );

    },



    getReflectionCount: function () {

        return this.getUserReflections().length;

    },



    getLatestReflection: function () {

        const reflections =
            this.getUserReflections();

        if (reflections.length === 0) {

            return null;

        }

        return reflections[

            reflections.length - 1

        ];

    },



    getProfileCompletion: function () {

        const profile =
            this.getUserProfile();

        if (!profile) {

            return 0;

        }

        const fields = [

            profile.name,

            profile.email,

            profile.bio,

            profile.goals

        ];

        let completed = 0;

        fields.forEach(field => {

            if (

                field &&

                field.trim() !== ""

            ) {

                completed++;

            }

        });

        return Math.round(

            (completed / fields.length) * 100

        );

    }

};