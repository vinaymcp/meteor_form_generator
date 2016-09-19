/*****************************************************************************/
/* SurveyStructure: Event Handlers */
/*****************************************************************************/
Template.SurveyStructure.events({

'submit' : function(event)
{
	event.preventDefault();
	var name = event.target.txtname.value;
	var type = event.target.txttype.value;
	var title = event.target.txttitle.value;
	SurveyStructure.insert({'name':name,'type': type,'title' : title});
	
},

'click .delete' : function()
{
	SurveyStructure.remove(this._id);
}

});

/*****************************************************************************/
/* SurveyStructure: Helpers */
/*****************************************************************************/
Template.SurveyStructure.helpers({

	structure : function()
	{
		return SurveyStructure.find();
	}
});

/*****************************************************************************/
/* SurveyStructure: Lifecycle Hooks */
/*****************************************************************************/
Template.SurveyStructure.onCreated(function () {
});

Template.SurveyStructure.onRendered(function () {
});

Template.SurveyStructure.onDestroyed(function () {
});
