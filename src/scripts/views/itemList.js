define(function(require) {
	'use strict';

	var itemListTemplate = require('hbs!templates/itemList'),
		ItemView = require('scripts/views/item'),

		ItemList = Backbone.View.extend({
			template: itemListTemplate,
			className: 'items-container',

			initialize: function() {},

			render: function() {
				this.$el.html(this.template());
				this.$appendElement = this.$el.find('.row');
				this.collection.each(function(project){
	            	var itemView = new ItemView({model: project});
	            	this.$appendElement.append(itemView.el);
				}, this);
				return this;
			}
		});

	return ItemList;
});