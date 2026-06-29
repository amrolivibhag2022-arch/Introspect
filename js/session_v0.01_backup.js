window.Session = {


save: function(role, username) {


localStorage.setItem(
"introspect_logged_in",
"true"
);


localStorage.setItem(
"introspect_role",
role
);


localStorage.setItem(
"introspect_username",
username
);


},



isLoggedIn: function() {


return localStorage.getItem(
"introspect_logged_in"
) === "true";


},



getRole: function() {


return localStorage.getItem(
"introspect_role"
);


},



getUsername: function() {


return localStorage.getItem(
"introspect_username"
);


},



logout: function(){


localStorage.clear();


window.location.href="../pages/login.html";


}


};