define(function(require) {
	'user strict';

	var Project = Backbone.Model.extend({
		defaults: {
			projectName: ''
		}
	});

	return Project;
});
