class ActivityCard {

    constructor(activityName) {
        this.activityName = activityName;
    }

    getData() {

        return {

            activity: this.activityName,

            status: "",

            duration: "",

            reason: ""

        };

    }

}