(function() {
  'use strict';

  angular
    .module('mutantApp.core')
    .factory('mutantService', mutantService);

  mutantService.$inject = ['$firebaseArray', 'firebaseDataService'];

  function mutantService($firebaseArray, firebaseDataService) {
    // This object allows the creation of a new mutant using the constructer
    // below called Mutant()
    var mutants = null;

    var service = {
     Mutant: Mutant,
     //mutants: $firebaseArray(firebaseDataService.mutants),
     mutantsByUser: mutantsByUser,
     reset: reset,
   };

   return service;

    //////////

    // We don't use vm.name because we're not referencing the controller (?)
  function Mutant() {
    this.name = '';
    this.phone = '';
    this.topic = '';
    this.notified = false;
    this.complete = false;
  }

  function mutantsByUser(uid) {
    if (!mutants) { // Implying there are no mutants
      mutants = $firebaseArray(firebaseDataService.users.child(uid).child('mutants'));
    }
    return mutants;
  }

  function reset() {
    if (mutants) {  //Implying we've set mutant values before
      mutants.$destroy();
      mutants = null;
    }
  }

}
})();
