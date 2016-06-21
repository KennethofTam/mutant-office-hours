(function() {
  'use strict';

  angular
    .module('mutantApp.mutantList')
    .controller('MutantListController', MutantListController);

  MutantListController.$inject=['$firebaseArray']

  function MutantListController($firebaseArray){
    var vm = this;
    // var fireMutantsRef = new Firebase('https://mutant-school.firebaseio.com/');
    var mutantsRef = firebase.database().ref().child('mutants');

    vm.addMutant = addMutant;
    vm.mutants =  $firebaseArray(mutantsRef); // ['deadpool', 'nightcrawler', 'gambit'];
    vm.newMutant = new Mutant();
    vm.deleteMutant = deleteMutant;
    vm.toggleComplete = toggleComplete;

    // We don't use vm.name because we're not referencing the controller (?)
    function Mutant() {
      this.name = '';
      this.phone = '';
      this.topic = '';
      this.notified = false;
      this.complete = false;
    }

    function addMutant() {
        //vm.mutants.push(vm.newMutant);
        // Adds both locally and to the database
        vm.mutants.$add(vm.newMutant);
        vm.newMutant = new Mutant();
    }

    function deleteMutant(mutant) {
      //Premade delete method part of angularfire
      vm.mutants.$remove(mutant);
    }

    function toggleComplete(mutant) {
      vm.mutants.$save(mutant);
    }
  }

})();
