define(function(require) {
	'use strict';

	var backbone = require('backbone');
	var mainTemplate = require('hbs!templates/mainTemplate');
	var HeaderView = require('scripts/views/header');
	var ItemListView = require('scripts/views/itemList');
	var FooterView = require('scripts/views/footer');

	var App = Backbone.View.extend({
		template: mainTemplate,
		el: '.app-main',

		initialize: function() {
			this.headerView = new HeaderView();
			this.itemListView = new ItemListView();
			this.footerView = new FooterView();
			this.render();
		},

		render: function() {
			this.$el.html(this.template());
			this.$el.append(this.headerView.render().el);
			this.$el.append(this.itemListView.render().el);
			this.$el.append(this.footerView.render().el);
			return this;
		}
	});

	return App;
});