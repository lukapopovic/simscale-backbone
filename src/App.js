define(function(require) {
	'use strict';

	var backbone = require('backbone');
	var mainTemplate = require('hbs!templates/mainTemplate');
	var HeaderView = require('scripts/views/header');
	var ItemListView = require('scripts/views/itemList');
	var FooterView = require('scripts/views/footer');
	var ProjectCollection = require('projects');

	var App = Backbone.View.extend({
		template: mainTemplate,
		el: '.app-main',

		events: {
			'click #search-btn': 'onSearch'
		},

		initialize: function() {
			this.headerView = new HeaderView();
			this.footerView = new FooterView();
			this.render();
		},

		render: function() {
			this.$el.html(this.template());
			this.$header = this.$('.header-container');
			this.$itemList = this.$('.items-container');
			this.$footer = this.$('.footer-container');

			this.$header.html(this.headerView.render().el);
			this.renderItemsList();
			this.$footer.html(this.footerView.render().el);
			return this;
		},

		renderItemsList(collection) {
			var self = this;
			if(collection) {
				this.itemListView = new ItemListView({collection: collection});
				this.$itemList.html(this.itemListView.render().el);
			} else {
				this.projectCollection = new ProjectCollection();
				this.projectCollection.fetch({
					success: function(collection, response, options) {
						self.itemListView = new ItemListView({collection: collection});
						self.$itemList.html(self.itemListView.render().el);
					},
					error: function(collection, response, options) {
						console.log(response.error);
					}
				});
			}
		},

		onSearch: function() {
			var searchTerm = $('.search-input').val();
			this.renderItemsList(this.projectCollection.search(searchTerm));
		}
	});

	return App;
});