define(function(require) {
	'use strict';

	var itemTemplate = require('hbs!templates/item'),
		constants = require('constants');

	var Item = Backbone.View.extend({
		template: itemTemplate,
		className: 'col-lg-3 col-md-4 col-sm-6 item',

		initialize: function() {
			var resultId = this.model.get('resultIds')[0],
				resultDate = this.parseDate(this.model.get('lastModificationDate')),
				resultThumbnail, 
				fallbackPicture = 'assets/fallbackPic.jpg';
      		
      		resultId ? resultThumbnail = constants.host + this.model.get('resultThumbnailUrls')[resultId] 
                      : resultThumbnail = fallbackPicture;
          	this.model.set('resultThumbnail', resultThumbnail);
          	this.model.set('resultDate', resultDate);

			this.render();
		},

		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		},

		parseDate: function(date) {
	      	var currentDate = new Date(),
	      		changeDate = new Date(date),
	      		yearDifference = currentDate.getYear() - changeDate.getYear(),
	      		monthDifference = currentDate.getMonth() - changeDate.getMonth(),
	      		dayDifference = currentDate.getDay() - changeDate.getDay(),
	      		returnString = 'Changed ';

	      	if(yearDifference > 0) {
	        	returnString += yearDifference > 1 ? yearDifference + ' years ago' : yearDifference + ' year ago';
	      	} else if (monthDifference > 0) {
	        	returnString += monthDifference >= 1 ? monthDifference + ' months ago' : monthDifference + ' month ago';
	      	} else {
	        	returnString += dayDifference >= 1 ? dayDifference + ' days ago' : dayDifference + ' day ago';
	      	}

	      	return returnString;
	  	}
	});

	return Item;
});