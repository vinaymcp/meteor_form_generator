Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});


Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  where: 'client'
});

Router.route('survey', {
  name: 'survey',
  controller: 'SurveyController',
  where: 'client'
});

Router.route('survey_structure', {
  name: 'surveyStructure',
  controller: 'SurveyStructureController',
  where: 'client'
});