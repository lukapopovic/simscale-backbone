define(function(require) {
	'use strict';

	var backbone = require('backbone');
	var headerTemplate = require('hbs!templates/header');

	var Header = Backbone.View.extend({
		template: headerTemplate,
		className: 'header-container',

		initialize: function() {
			//fetch the data from the blab bal
		},

		render: function() {
			this.$el.html(this.template());
			return this;
		}
	});

	return Header;
});