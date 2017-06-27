'use strict';

/**
 * @ngdoc directive
 * @name personalWebApp.directive:skills
 * @description
 * # skills
 */
angular.module('personalWebApp')
  .directive('skillsDirective', function () {
    return {
      templateUrl: 'views/skillsDirective.html',
      scope: {
        skillName: '=skill',
        skillLevel: '=level'
      },
      restrict: 'EA'
    };
  });
