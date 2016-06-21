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
    var textsRef = firebase.database().ref().child('texts');


    vm.addMutant = addMutant;
    vm.mutants =  $firebaseArray(mutantsRef); // ['deadpool', 'nightcrawler', 'gambit'];
    vm.newMutant = new Mutant();
    vm.deleteMutant = deleteMutant;
    vm.toggleComplete = toggleComplete;
    vm.sendText = sendText;

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
      //Premade $remove method part of angularfire
      vm.mutants.$remove(mutant);
    }

    function toggleComplete(mutant) {
      vm.mutants.$save(mutant);
    }

    function sendText(mutant) {
      // build text object
      var newText = {
        name:mutant.name,
        phone:mutant.phone,
        topic:mutant.topic
      }

      // save text to firebase
      textsRef.push(newText);

      // change modified to true
      mutant.notified = true;

      // save mutant
      vm.mutants.$save(mutant);
    }
  }

})();
