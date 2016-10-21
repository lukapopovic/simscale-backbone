define(function(require) {
	'use strict';

	var headerTemplate = require('hbs!templates/header'),

		Header = Backbone.View.extend({
			template: headerTemplate,
			className: 'header-container',

			initialize: function() {
				this.title = 'Public Projects';
			},

			render: function() {
				this.$el.html(this.template({pageTitle: this.title}));
				return this;
			}
		});

	return Header;
});