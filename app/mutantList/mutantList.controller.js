(function() {
  'use strict';

  angular
    .module('mutantApp.mutantList')
    .controller('MutantListController', MutantListController);

  MutantListController.$inject=['mutantService', 'user'];

  function MutantListController(mutantService, user) {
    var vm = this;

    // vm.addMutant = addMutant;
    vm.mutants = mutantService.mutantsByUser(user.uid);
    // vm.newMutant = new mutantService.Mutant();


    // function addMutant() {
    //     //vm.mutants.push(vm.newMutant);
    //     // Adds both locally and to the database
    //     vm.mutants.$add(vm.newMutant);
    //     vm.newMutant = new mutantService.Mutant(); //new Mutant();
    // }


  }
})();
