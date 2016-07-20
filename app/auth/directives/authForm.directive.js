(function() {
  'use strict';

  angular
    .module('mutantApp.auth')
    .directive('xtAuthForm', xtAuthForm);

  function xtAuthForm() {
    return {
      templateUrl: 'app/auth/directives/authForm.html',
      restrict: 'E',
      controller: AuthFormController,
      controllerAs: 'vm',
      bindToController: true,
      scope: {
        formName: '@',
        submitFunction: '&',
        error: '=',
        registerBool: '@',
      }
    };
  }

  function AuthFormController() {
    var vm = this;
    //vm.passwordReset = passwordReset;

    vm.user = {
      email: '',
      password: '',
      name: ''
    }

    // function passwordReset() {
    //   var auth = FirebaseAuth();
    //   console.log("Password Reset sent");
    //   var ref = new Firebase("https://mutant-hours-8f7c3.firebaseio.com/");
    //    ref.resetPassword({
    //      email: "ktam@purdue.edu"
    //    }, function(error) {
    //      if (error) {
    //        switch (error.code) {
    //          case "INVALID_USER":
    //            console.log("The specified user account does not exist.");
    //            break;
    //          default:
    //            console.log("Error resetting password:", error);
    //        }
    //      } else {
    //        console.log("Password reset email sent successfully!");
    //      }
    //    });
    // }
  }

})();
