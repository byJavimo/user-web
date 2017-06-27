'use strict';

/**
 * @ngdoc function
 * @name personalWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the personalWebApp
 */
angular.module('personalWebApp')
  .run(['$anchorScroll', function($anchorScroll) {
    $anchorScroll.yOffset = 50;   // always scroll by 50 extra pixels
  }])
  .controller('MainCtrl', [ '$anchorScroll','$location', function ($anchorScroll, $location) {

    //Constants
    this.showRecruiterForm = false;
    this.showNormalForm = false;
    this.showForm = false;
    //Exposed methods

    this.goToAnchor = function (sectionNumber) {
      var newHash = 'section' + sectionNumber;
      if ($location.hash() !== newHash) {
        // set the $location.hash to `newHash` and
        // $anchorScroll will automatically scroll to it
        $location.hash('section' + sectionNumber);
      } else {
        // call $anchorScroll() explicitly,
        // since $location.hash hasn't changed
        $anchorScroll();
      }
    };

    // this.visitorName = prompt();

    // Redirection methods

    this.showRecruiterForm = function(){
      this.showForm = true;
      this.showRecruiterForm = true;
    };

    this.showNormalForm = function () {
      this.showForm = true;
      this.showRecruiterForm = false;
    };

    this.hideForm = function () {
      this.showForm = false;
      console.log("Hello", this.showForm);
    };

  }]);
