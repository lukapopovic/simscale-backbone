define(function(require) {
	'user strict';

	var ProjectModel = require('ProjectModel');
	var constants = require('constants');

	var Projects = Backbone.Collection.extend({
		url: constants.api_url + '/projects',
		model: ProjectModel
	});

	return Projects;	
});
