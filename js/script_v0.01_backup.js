console.log("Introspect script loaded");



document.addEventListener(
"DOMContentLoaded",
function(){



const loginForm=document.getElementById(
"loginForm"
);



if(!loginForm){

return;

}



loginForm.addEventListener(
"submit",
function(event){



event.preventDefault();



const username=document.getElementById(
"username"
).value.trim();



const password=document.getElementById(
"password"
).value.trim();



const role=document.getElementById(
"role"
).value;




if(!username || !password){


alert(
"Please fill all fields"
);


return;


}



Session.save(
role,
username
);



AppRouter.redirect(
role
);



});


});