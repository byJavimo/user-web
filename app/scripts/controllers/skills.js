'use strict';

/**
 * @ngdoc function
 * @name personalWebApp.controller:SkillsCtrl
 * @description
 * # SkillsCtrl
 * Controller of the personalWebApp
 */
angular.module('personalWebApp')
  .controller('SkillsCtrl', function () {
    // Tech skills
    this.languages = [
      {
        skillName: 'HTML/HTML5',
        skillLevel: '90'
      },
      {
        skillName: 'JavaScript',
        skillLevel: '80'
      },
      {
        skillName: 'CSS/CSS3',
        skillLevel: '80'
      },
      {
        skillName: 'Ruby',
        skillLevel: '65'
      },
      {
        skillName: 'AJAX',
        skillLevel: '90'
      }
    ];

    this.frameworks = [
      {
        skillName: 'AngularJS',
        skillLevel: '85'
      },
      {
        skillName: 'Ruby On Rails',
        skillLevel: '60'
      },
      {
        skillName: 'Bootstrap',
        skillLevel: '75'
      },
      {
        skillName: 'Ionic',
        skillLevel: '60'
      }
    ];

    this.otherTechnologies = [
      {
        skillName: 'Git',
        skillLevel: '80'
      },
      {
        skillName: 'Bower',
        skillLevel: '60'
      },
      {
        skillName: 'Grunt',
        skillLevel: '60'
      },
      {
        skillName: 'Scrum',
        skillLevel: '70'
      }

    ];
    this.techSkills = [this.languages, this.frameworks, this.otherTechnologies];
    // Soft skills

    this.languages = [
      {
        skillName: 'Spanish',
        skillLevel: '100',
        skillDescription: 'Native'
      },
      {
        skillName: 'English',
        skillLevel: '79',
        skillDescription: 'Advanced'
      }
    ];

  });
