/*var mainApp = {};

(function(){
    var firebase = app_fireBase;
var uid = null;
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          uid = user.uid;
        }else{
            //redirect to login page
            uid = null;
            window.location.replace("main.html");
        }
      });

      function logOut(){
          firebase.auth().signOut();
      }

      mainApp.logOut = logOut;


})*/
function signIn(){
    var userEmail=document.getElementById(loginEmail).value;
    var userPass=document.getElementById(pass).value;
    window.alert(Hello);
}