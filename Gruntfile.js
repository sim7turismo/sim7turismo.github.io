module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: {
          '_css/style.css': ['bower_components/bootstrap-sass/lib/bootstrap.scss', '_scss/sim7turismo.scss']
        }
      }
    },

    cssmin: {
      minify: {
        files: {
          'css/style.min.css': ['_css/style.css']
        }
      }
    },

    concat: {
      dist: {
        src: [
          'bower_components/angular/angular.js',
          'bower_components/angular-bootstrap/ui-bootstrap-tpls.js'
        ],
        dest: '_js/output.js'
      }
    },

    uglify: {
      my_target: {
        files: {
          'js/base.min.js': ['_js/output.js']
        }
      }
    },

    watch: {
      options: {
        spawn: false,
        livereload: true,
      },
      
      scripts: {
        files: [
          '_js/**/*.js'
        ],
        tasks: ['concat', 'uglify']
      },

      css: {
        files: [
          '_scss/**/*.scss'
        ],
        tasks: ['sass', 'cssmin']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass', 'cssmin', 'concat', 'uglify']);
};