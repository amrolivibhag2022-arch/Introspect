console.log("Dashboard module loaded");


document.addEventListener(
"DOMContentLoaded",
function(){



/*
================================
Session Protection
================================
*/


if(typeof Session === "undefined"){

console.error(
"Session module missing"
);

return;

}




if(!Session.isLoggedIn()){


window.location.href="login.html";


return;


}





/*
================================
Display User Information
================================
*/


const username =
document.getElementById(
"usernameDisplay"
);



const roleDisplay =
document.getElementById(
"roleDisplay"
);



if(username){


username.innerText =
Session.getUsername();


}



if(roleDisplay){


let role =
Session.getRole();



roleDisplay.innerText =
role.charAt(0).toUpperCase()
+
role.slice(1);



}





/*
================================
Logout
================================
*/


const logoutButton =
document.getElementById(
"logoutBtn"
);



if(logoutButton){


logoutButton.addEventListener(
"click",
function(){


Session.logout();


});


}





/*
================================
Mobile Menu
================================
*/


const menuButton =
document.querySelector(
".menu-toggle"
);



const sidebar =
document.querySelector(
".dashboard-sidebar"
);



if(menuButton && sidebar){


menuButton.addEventListener(
"click",
function(){


sidebar.classList.toggle(
"active"
);


});


}



});