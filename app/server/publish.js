


Meteor.publish('survey', function () {
  return Survey.find();
});

Meteor.publish('surveyStructure', function () {
  return SurveyStructure.find();
});