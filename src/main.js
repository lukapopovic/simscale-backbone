require(['require-config'], function() {
	'use strict';

	require([
		'App',
		'jquery',
		'underscore',
		'backbone'
		], 
		function(App) {
			$(document).ready(function() {
				window.App = new App();	
			});
		});
});