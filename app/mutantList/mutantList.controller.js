(function() {
  'use strict';

  angular
    .module('mutantApp.mutantList')
    .controller('MutantListController', MutantListController);

  MutantListController.$inject=['mutantService', 'textMessageService', 'user'];

  function MutantListController(mutantService, textMessageService, user) {
    var vm = this;

    // vm.addMutant = addMutant;
    vm.mutants = mutantService.mutantsByUser(user.uid);
    // vm.newMutant = new mutantService.Mutant();
    vm.deleteMutant = deleteMutant;
    vm.toggleComplete = toggleComplete;
    vm.sendText = sendText;

    // function addMutant() {
    //     //vm.mutants.push(vm.newMutant);
    //     // Adds both locally and to the database
    //     vm.mutants.$add(vm.newMutant);
    //     vm.newMutant = new mutantService.Mutant(); //new Mutant();
    // }

    function deleteMutant(mutant) {
      //Premade $remove method part of angularfire
      vm.mutants.$remove(mutant);
    }

    function toggleComplete(mutant) {
      vm.mutants.$save(mutant);
    }

    function sendText(mutant) {
      textMessageService.sendText(mutant, vm.mutants);
    }

  }
})();
