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

    }
  });

  // Loading Grunt plugins and tasks
  require('load-grunt-tasks')(grunt);

  // Custom tasks
  grunt.registerTask('default', ['sass']);

}
