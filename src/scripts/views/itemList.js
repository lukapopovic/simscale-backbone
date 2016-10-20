define(function(require) {
	'use strict';

	var backbone = require('backbone');
	var itemListTemplate = require('hbs!templates/itemList');
	var ItemView = require('scripts/views/item');

	var ItemList = Backbone.View.extend({
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