(function() {
  'use strict';

  angular
    .module('mutantApp.mutantSettings')
    .controller('MutantSettingsController', MutantSettingsController);

  MutantSettingsController.$inject=['mutantService', 'user'];

  function MutantSettingsController(mutantService, user) {
    var vm = this;

  }
})();
