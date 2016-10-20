define(function(require) {
	'user strict';

	var constants = require('constants'),

		Projects = Backbone.Collection.extend({
			url: constants.api_url + '/projects',

			search : function(searchTerm){
				if(searchTerm === '') return this;
		 
				return _(this.filter(function(data) {
				  	return data.get("projectName").includes(searchTerm);
				}));
			}
		});

	return Projects;
});
