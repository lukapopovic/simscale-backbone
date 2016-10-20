define(function(require) {
	'use strict';

	var backbone = require('backbone');
	var footerTemplate = require('hbs!templates/footer');

	var Footer = Backbone.View.extend({
		template: footerTemplate,
		className: 'footer-container',

		initialize: function() {
			//fetch the data from the blab bal
		},

		render: function() {
			this.$el.html(this.template());
			return this;
		}
	});

	return Footer;
});