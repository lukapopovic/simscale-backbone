define(function(require) {
	'use strict';

	var backbone = require('backbone');
	var itemListTemplate = require('hbs!templates/itemList');
	var ProjectCollection = require('../collections/ProjectCollection');

	var ItemList = Backbone.View.extend({
		template: itemListTemplate,
		className: 'items-container',
		collection: null,

		initialize: function() {
			this.collection = new ProjectCollection();
			collection.fetch({
				success: function(collection, response, options) {
						console.log(collection.toJSON());
					},
				error: function(collection, reposnse, options) {
						console.log(response);
					} 
			});
		},

		render: function() {
			this.$el.html(this.template(this.collection.toJSON()));
			return this;
		}
	});

	return ItemList;
});