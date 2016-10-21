define(function(require) {
	'use strict';

	var footerTemplate = require('hbs!templates/footer'),

		Footer = Backbone.View.extend({
			template: footerTemplate,
			className: 'footer-container',

			initialize: function() {},

			render: function() {
				this.$el.html(this.template());
				return this;
			}
		});

	return Footer;
});