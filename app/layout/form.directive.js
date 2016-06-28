(function (){
  'use strict';

  angular.module('mutantApp.layout')
        .directive('addMutantForm', addMutantForm);
  function addMutantForm() {
    return {
      templateUrl: 'app/layout/form.html',
      restrict: 'E',
      controller: addMutantFormController,
      controllerAs: 'vm',
      scope: {},
    }
  }

  AddMutantFormController.$inject = [];

  function AddMutantFormController() {


  }
})();
