console.log("reflection.js loaded");


const reflectionKey = "introspect_reflections";



function getCurrentUser(){

    const username = Session.getUsername();

    return username || "User";

}





function saveReflection(){


    const text =
    document.getElementById("reflectionText").value.trim();


    const mood =
    document.getElementById("reflectionMood").value;



    if(!text){

        alert("Please write your reflection first.");

        return;

    }



    const reflection = {


        id: Date.now(),


        username: getCurrentUser(),


        date:
        new Date().toLocaleDateString(),


        question:
        document.getElementById("reflectionQuestion").innerText,


        answer:text,


        mood:mood


    };





    let reflections =
    JSON.parse(
        localStorage.getItem(reflectionKey)
    ) || [];




    reflections.push(reflection);




    localStorage.setItem(
        reflectionKey,
        JSON.stringify(reflections)
    );




    alert("Reflection saved successfully 🚀");



    document.getElementById("reflectionText").value="";



    loadReflections();


}







function loadReflections(){



    const container =
    document.getElementById("reflectionList");



    if(!container){

        return;

    }




    let reflections =
    JSON.parse(
        localStorage.getItem(reflectionKey)
    ) || [];




    const user =
    getCurrentUser();




    reflections =
    reflections.filter(
        item =>
        item.username === user
    );





    if(reflections.length===0){


        container.innerHTML =

        "<p>No reflections available.</p>";


        return;


    }






    container.innerHTML="";





    reflections
    .reverse()
    .forEach(item=>{


        const card =
        document.createElement("div");



        card.className =
        "dashboard-card";




        card.innerHTML = `

        <h3>
        ${item.date}
        </h3>


        <p>
        <strong>Mood:</strong>
        ${item.mood}
        </p>


        <p>
        ${item.answer}
        </p>



        <button
        onclick="deleteReflection(${item.id})"
        class="login-submit">

        Delete

        </button>

        `;



        container.appendChild(card);



    });



}









function deleteReflection(id){



    let reflections =
    JSON.parse(
        localStorage.getItem(reflectionKey)
    ) || [];




    reflections =
    reflections.filter(
        item =>
        item.id !== id
    );




    localStorage.setItem(

        reflectionKey,

        JSON.stringify(reflections)

    );



    loadReflections();



}







document.addEventListener(
"DOMContentLoaded",
()=>{


    if(
        document.getElementById("usernameDisplay")
    ){


        document.getElementById("usernameDisplay")
        .innerText =
        getCurrentUser();


    }



    loadReflections();


});