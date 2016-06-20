(function() {
  'use strict';

  angular
    .module('mutantApp.home', [])
    .config(configFunction);

    // Config sets up state for the home section
    configFunction.$inject = ['$stateProvider'];

    // Using state provider so when the url is just '/#/' (after the port)
    // it references home.html
    // .../#/ in a url references angular stuff or something
    function configFunction($stateProvider) {
      $stateProvider.state('home', {
        url: '/',
        templateUrl: 'app/home/home.html'
      });
    }
})();
