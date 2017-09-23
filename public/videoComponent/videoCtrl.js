(function () {
  'use strict';

  angular
    .module('myApp')
    .component('videoComponent', {
      templateUrl: '/public/videoComponent/video.html',
      controller: videoCtrl,
      controllerAs: 'vm'
  });

  function videoCtrl() {
      var vm = this;
      //$('.carousel').carousel();
  }

})();
