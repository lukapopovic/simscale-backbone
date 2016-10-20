require.config({
	paths: {
		backbone: 'bower_components/backbone/backbone',
		handlebars: 'bower_components/handlebars/handlebars',
		'handlebars-compiler': 'vendors/requirejs-hbs/example/assets/lib/handlebars-runtime',
		text: 'bower_components/text/text',
		underscore: 'bower_components/underscore/underscore',
		jquery: 'bower_components/jquery/dist/jquery',
		constants: 'scripts/common/constants',
		App: 'app',
		projects: 'scripts/collections/projects',
		project: 'scripts/models/project'
	},

	packages: [
	    {
	      name: 'hbs',
	      location: 'bower_components/requirejs-hbs',
	      compilerPath: 'vendors/requirejs-hbs/example/assets/lib/handlebars-runtime',
	      main: 'hbs'
	    }
    ]
})