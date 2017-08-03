// The "wrapper" function
module.exports = function(grunt) {

  // Project and task configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    /**
     * Grunt Sass
     * Compile Sass to CSS using node-sass
     * https://www.npmjs.com/package/grunt-sass
     */
    sass: {

      options: {
        sourceMap: false
      },
      dist: {
        files: {
          'css/style.css' : 'assets/scss/style.scss'
        }
      }

    },

    /**
     * Grunt Contri Watch
     * Monitor files and execute tasks
     * https://www.npmjs.com/package/grunt-contrib-watch
     */
    watch: {

      sass: {
        files: [
          'assets/scss/**/*.scss'
        ],
        tasks: [
          'sass'
        ]
      },
      script: {
        files: [
          'assets/js/*.js'
        ],
        tasks: [
          'uglify'
        ]
      }

    },

    /**
     * Grunt Contrib Uglify
     * Minify JavaScript files
     * https://www.npmjs.com/package/grunt-contrib-uglify
     */
    uglify: {

      my_target: {
        files: {
          'js/script.js': ['node_modules/jquery/dist/jquery.js', 'assets/js/script.js']
        }
      }

    }
  });

  // Loading Grunt plugins and tasks
  require('load-grunt-tasks')(grunt);

  // Custom tasks
  grunt.registerTask('default', ['watch']);

}
