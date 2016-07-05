(function() {
  'use strict';

  angular
    .module('mutantApp.auth')
    .controller('AuthController', AuthController);

  AuthController.$inject = ['$state', 'authService'];

  function AuthController($state, authService) {
    var vm = this;

    vm.register = register;
    vm.login = login;
    vm.error = null;
    vm.passwordReset = vm.passwordReset;
    // vm.logout = logout;
    // vm.isLoggedIn = authService.isLoggedIn;

    function register(user) {
      return authService.register(user) //auth.$createUserWithEmailAndPassword(user.email, user.password)
        //.then(function(user) {
        // User passed to the function in the above line is not the user object
        // that login expects
        .then(function() {
          vm.login(user);
          authService.addName(user.name)
        })
        .then(function() {
          return authService.sendWelcomeEmail(user.email);
        })
        .catch(function(error) {
          vm.error = error;
        });
    }

    function login(user) {
      return authService.login(user) //auth.$signInWithEmailAndPassword(user.email, user.password)
        .then(function(user) {
         $state.go('mutantList');
       })
       .catch(function(error) {
         vm.error = error;
     });
   }

   // function logout() {
   //   authService.logout(); //auth.$signOut();
   //   $state.go('home');
   // }

   function passwordReset() {
     console.log("Password Reset sent")
     var ref = new Firebase("https://mutant-hours-8f7c3.firebaseio.com/");
      ref.resetPassword({
        email: "ktam@purdue.edu"
      }, function(error) {
        if (error) {
          switch (error.code) {
            case "INVALID_USER":
              console.log("The specified user account does not exist.");
              break;
            default:
              console.log("Error resetting password:", error);
          }
        } else {
          console.log("Password reset email sent successfully!");
        }
      });
   }

  }
})();
