module.exports = function(grunt) {

	grunt.initConfig({

	  connect: {
	    server: {
	      options: {
	        port: 9001,
			open: true
	      }
	    }
	  },

		watch: {
			options: {
				livereload: true
			},
			scripts: {
				files: 'index.js'
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');

	grunt.registerTask('default', ['connect', 'watch']);

};
