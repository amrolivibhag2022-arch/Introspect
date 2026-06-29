window.AppRouter = {


routes:{


admin:"admin_dashboard.html",


manager:"manager_dashboard.html",


user:"user_dashboard.html"


},



redirect:function(role){


const target=this.routes[role];


if(!target){

alert("Invalid role");

return;

}



window.location.href=target;


},




protectPage:function(requiredRole){



if(!Session.isLoggedIn()){


window.location.href="login.html";


return;


}



const userRole=Session.getRole();



if(userRole !== requiredRole){


window.location.href="login.html";


}



}


};