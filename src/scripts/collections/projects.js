define(function(require) {
	'user strict';

	var ProjectModel = require('project');
	var constants = require('constants');

	var Projects = Backbone.Collection.extend({
		url: constants.api_url + '/projects',
		model: ProjectModel,

		search : function(searchTerm){
			if(searchTerm === '') return this;
	 
			//var pattern = new RegExp(letters,"gi");
			return _(this.filter(function(data) {
			  	return data.get("projectName").includes(searchTerm);
			}));
		}

	});

	return Projects;
});
