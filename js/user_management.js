console.log("user_management.js loaded");


document.addEventListener("DOMContentLoaded", function () {

    initializePage();

    loadUserManagement();

});



function initializePage() {


    document.getElementById("usernameDisplay").innerText =
        Session.getUsername();


    document.getElementById("roleDisplay").innerText =
        Session.getRole();



    document.getElementById("logoutBtn")
        .addEventListener("click", function () {


            Session.logout();


        });


}



function loadUserManagement() {


    const profiles =
        Data.getAllProfiles();


    const reflections =
        Data.getAllReflections();



    loadStatistics(
        profiles,
        reflections
    );


    loadUserTable(
        profiles,
        reflections
    );



    Activity.log(

        "User Management",

        "Viewed User Management"

    );


}




function loadStatistics(
    profiles,
    reflections
) {


    document.getElementById("totalUsers").innerText =
        profiles.length;



    document.getElementById("activeUsers").innerText =
        profiles.length;



    document.getElementById("totalReflections").innerText =
        reflections.length;



    let totalCompletion = 0;



    profiles.forEach(function(profile){


        totalCompletion +=
            calculateCompletion(profile);


    });



    let average = 0;



    if(profiles.length > 0){


        average =
            Math.round(
                totalCompletion / profiles.length
            );


    }



    document.getElementById("averageCompletion").innerText =
        average + "%";

}




function loadUserTable(
    profiles,
    reflections
) {


    const table =
        document.getElementById("userTableBody");



    table.innerHTML = "";



    if(profiles.length === 0){


        table.innerHTML =

        `
        <tr>
        <td colspan="5">
        No users available
        </td>
        </tr>
        `;


        return;


    }




    profiles.forEach(function(profile){



        const reflectionCount =

            reflections.filter(function(item){


                return item.username === profile.username;


            }).length;



        const completion =
            calculateCompletion(profile);



        table.innerHTML +=


        `

        <tr>

        <td>
        ${profile.username || "-"}
        </td>


        <td>
        ${profile.role || "User"}
        </td>


        <td>
        ${reflectionCount}
        </td>


        <td>
        ${completion}%
        </td>


        <td>
        Active
        </td>


        </tr>

        `;



    });



}





function calculateCompletion(profile){



    let completed = 0;



    if(profile.name)
        completed++;



    if(profile.email)
        completed++;



    if(profile.bio)
        completed++;



    if(profile.goals)
        completed++;



    return Math.round(

        (completed / 4) * 100

    );

}