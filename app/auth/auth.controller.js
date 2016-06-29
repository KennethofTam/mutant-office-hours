(function() {
  'use strict';

  angular
    .module('mutantApp.auth')
    .controller('AuthController', AuthController);

  AuthController.$inject = ['$state', 'authService'];

  function AuthController($state, authService) {
    var vm = this;
    //var auth = $firebaseAuth();

    // vm.register = register;
    // vm.login = login;
    // vm.error = null;
    // // vm.logout = logout;
    // // vm.isLoggedIn = authService.isLoggedIn;
    //
    // vm.user = {
    //   email: '',
    //   password: ''
    // }
    //
    // function register(user) {
    //   return authService.register(user) //auth.$createUserWithEmailAndPassword(user.email, user.password)
    //     //.then(function(user) {
    //     // User passed to the function in the above line is not the user object
    //     // that login expects
    //     .then(function() {
    //       vm.login(user);
    //
    //     })
    //     .then(function() {
    //       return authService.sendWelcomeEmail(user.email);
    //     })
    //     .catch(function(error) {
    //       vm.error = error;
    //     });
    // }
    //
    // function login(user) {
    //   return authService.login(user) //auth.$signInWithEmailAndPassword(user.email, user.password)
    //     .then(function(user) {
    //       $state.go('mutantList');
    //     })
    //     .catch(function(error) {
    //       vm.error = error;
    //     });
    // }
    //
    // function logout() {
    //   authService.logout(); //auth.$signOut();
    //   $state.go('home');
    // }
  }
})();
