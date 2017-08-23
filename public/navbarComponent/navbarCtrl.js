(function () {
  'use strict';

  angular
    .module('myApp')
    .component('navbarComponent', {
      templateUrl: '/public/navbarComponent/navbar.html',
      controller: navbarCtrl,
      controllerAs: 'vm'
  });

  function navbarCtrl() {
      var vm = this;
      //$('.carousel').carousel();
  }

})();
