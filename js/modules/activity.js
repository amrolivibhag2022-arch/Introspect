window.Activity = {

    storageKey: "introspect_activity",



    log: function (module, action) {

    const activities =
        JSON.parse(
            localStorage.getItem(this.storageKey)
        ) || [];

    activities.push({

        id: Date.now(),

        username: Session.getUsername(),

        role: Session.getRole(),

        module: module,

        action: action,

        timestamp: new Date().toISOString()

    });

    localStorage.setItem(

        this.storageKey,

        JSON.stringify(activities)

    );

},



    getUserActivities: function () {

        const username =
            Session.getUsername();

        const activities =
            JSON.parse(
                localStorage.getItem(this.storageKey)
            ) || [];

        return activities.filter(

            item =>
                item.username === username

        );

    },



    getAllActivities: function () {

        return JSON.parse(

            localStorage.getItem(this.storageKey)

        ) || [];

    },



    clearUserActivities: function () {

        const username =
            Session.getUsername();

        let activities =
            JSON.parse(
                localStorage.getItem(this.storageKey)
            ) || [];

        activities =
            activities.filter(

                item =>
                    item.username !== username

            );

        localStorage.setItem(

            this.storageKey,

            JSON.stringify(activities)

        );

    }

};