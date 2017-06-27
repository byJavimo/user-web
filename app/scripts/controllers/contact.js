'use strict';

/**
 * @ngdoc function
 * @name personalWebApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the personalWebApp
 */
angular.module('personalWebApp')
  .controller('ContactCtrl', function () {
    this.name = "";
    this.lastName = "";
    this.company = "";
    this.subject = "";
    this.textarea = ""

  });
