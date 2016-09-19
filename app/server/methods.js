/*****************************************************************************/
/*  Server Methods */
/*****************************************************************************/

Meteor.methods({
  'server/method_name': function () {
    // server method logic
  },
  download: function() {
  var collection = Survey.find().fetch();
  var heading = true; // Optional, defaults to true
  var delimiter = "," // Optional, defaults to ",";
  return exportcsv.exportToCSV(collection, heading, delimiter);
  }
});
