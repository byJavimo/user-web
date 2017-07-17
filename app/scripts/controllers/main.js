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
  }])
  .controller('MainCtrl', [ '$anchorScroll', function ($anchorScroll) {

    //Constants
    this.recruiterForm = false;
    this.showForm = false;
    //Exposed methods

    this.goToAnchor = function (sectionName) {
      $anchorScroll('section' + sectionName);
    };

    // this.visitorName = prompt();

    // Redirection methods

    this.showRecruiterForm = function(){
      this.recruiterForm = true;
      this.showForm = true;
    };

    this.showNormalForm = function () {
      this.recruiterForm = false;
      this.showForm = true;
    };

    this.hideRecruiterForm = function () {
      this.recruiterForm = false;
      this.showForm = false;
    };

    this.hideNormalForm = function () {
      this.recruiterForm = true;
      this.showForm = false;
    };

  }]);
