/*****************************************************************************/
/* Survey: Event Handlers */
/*****************************************************************************/
Template.Survey.events({

	'submit' : function(event)
	{
		event.preventDefault();
		var jsonObj = "";
		item = {};
		var AssocArray = {};  // <- initialize an object, not an array	
		for(i=0;i<event.target.length-1;i++)
		{
			var namex = event.target[i].name;
			var value = event.target[i].value;
			//item [namex] = value;
		
			AssocArray[namex] = value;

			//console.log(namex + " = " + AssocArray[namex]); // "a = The letter A"
			
			
		}
		; // "{"a":"The letter A"}"

		//jsonObj.push(item);	
		//console.log(JSON.stringify(AssocArray));

		//var txtjson = [{ "question":"What is the value of the 7 in the following number? 850,765" }];

	  
		//console.log(txtjson);
		Survey.insert(AssocArray);	
	},
	'click .buttonDownload' : function()
	{
		var nameFile = 'fileDownloaded.csv';
  		Meteor.call('download', function(err, fileContent) {
   			 if(fileContent)
   			 {
      			var blob = new Blob([fileContent], {type: "text/plain;charset=utf-8"});
      			saveAs(blob, nameFile);
			 }
		});
	}	
});

/*****************************************************************************/
/* Survey: Helpers */
/*****************************************************************************/
Template.Survey.helpers({
	SurveyStructure : function()
	{
		return SurveyStructure.find();
	},
	'allsurveys' : function()
	{
		return Survey.find();
	},
	'isid' : function()
	{
		if(this.key == "_id")	
		 	return false;
		else
			return true;
	},
		 
	'surveydetails' : function()
	{
		
   	    var elementToReturn = [];
        var someDoc = Survey.findOne({_id: this._id});
        var index = 0;
	    _(someDoc).each( function( value, key, someDoc ) {
	        elementToReturn[index] = {};
	        elementToReturn[index]['value'] = value;
	        elementToReturn[index]['key'] = key;
	        index++;
	    });
	    return elementToReturn;
     

	},
	'surveyname' : function()
	{
		var id = this._id;
		console.log(Survey.findOne(id));
		return Survey.findOne(id);
	},
	'texttype' : function()
	{
		if(this.type=="text")
		{
			return true;
		}
		
	},
	'numbertype' : function()
	{
		if(this.type=="number")
		{
			return true;
		}
		
	},
	'emailtype' : function()
	{
		console.log(this.type);
		if(this.type=="email")
		{
			return true;
		}
		
	},
	'datetype' : function()
	{
		if(this.type=="date")
		{
			return true;
		}
		
	},
	'checkboxype' : function()
	{
		if(this.type=="checkbox")
		{
			return true;
		}
		
	},
	'passwordtype' : function()
	{
		if(this.type=="password")
		{
			return true;
		}
		
	},
	'searchboxtype' : function()
	{
		if(this.type=="searchbox")
		{
			return true;
		}
		
	},
	'teltype' : function()
	{
		if(this.type=="tel")
		{
			return true;
		}
		
	},
	'timetype' : function()
	{
		if(this.type=="time")
		{
			return true;
		}
		
	},
	'urltype' : function()
	{
		if(this.type=="url")
		{
			return true;
		}
		
	},
	'filetype' : function()
	{
		if(this.type=="file")
		{
			return true;
		}
		
	}




});

/*****************************************************************************/
/* Survey: Lifecycle Hooks */
/*****************************************************************************/
Template.Survey.onCreated(function () {
});

Template.Survey.onRendered(function () {
});

Template.Survey.onDestroyed(function () {
});
