(function() {
  'use strict';

  angular
    .module('mutantApp.mutantSettings')
    .config(configFunction);

  configFunction.$inject = ['$stateProvider'];

  function configFunction($stateProvider) {
    // $stateProvider.state('mutantSettings', {
    //   url: '/mutantsettings',
    //   templateUrl: 'app/mutantSettings/mutantSettings.html',
    //   controller: 'MutantSettingsController',
    //   controllerAs: 'vm',
    //   // resolve: {
    //   //   user: resolveUser,
    //   // },
    // });
  }
  //
  // resolveUser.$inject = ['authService'];
  //
  // function resolveUser(authService) {
  //   return authService.auth.$requireSignIn();
  // }
})();
