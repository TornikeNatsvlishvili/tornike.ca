module.exports = function(grunt) {

  grunt.initConfig({
    
    // combine all bower packages into single js/css
    bower_concat: {
      all: {
        dest: 'public/dist/js/_bower.js',
        cssDest: 'public/dist/css/_bower.css',
        dependencies: {
          'bootstrap': 'jquery'
        },
        mainFiles: {
          'jquery': ['dist/jquery.min.js'],
          'bootstrap': ['dist/css/bootstrap.css']
        }
      }
    },
    
    // check all js files for errors
    jshint: {
      all: ['public/src/js/**/*.js']
    },

    // take all the js files and minify them into app.min.js
    uglify: {
      build: {
        files: {
          'public/dist/js/app.min.js': ['public/src/js/**/*.js', 'public/src/js/*.js']
        }
      }
    },

    // process the less file to style.css
    less: {
      build: {
        files: {
          'public/dist/css/style.css': 'public/src/css/*.less'
        }
      }
    },
    
    // reduce svg size
    svgmin: {
        options: {
            plugins: [
                {
                    removeViewBox: false
                }
            ]
        },
        dist: {
            expand: true,
            cwd: 'public/src/raw',
            src: ['*.svg'],
            dest: 'public/dist/assets/svg'
        }
    },

    // take the processed style.css file and minify
    cssmin: {
      build: {
        files: {
          'public/dist/css/style.min.css': 'public/dist/css/style.css'
        }
      }
    },

    // watch css and js files and process the above tasks
    watch: {
      css: {
        files: ['public/src/css/**/*.less'],
        tasks: ['less', 'cssmin']
      },
      js: {
        files: ['public/src/js/**/*.js'],
        tasks: ['jshint', 'uglify']
      }
    },

    // watch our node server for changes
    nodemon: {
      dev: {
        script: 'server.js',
        options: {
          ignore: ['node_modules/**','bower_components/**'],
        }
      }
    },

    // run watch and nodemon at the same time
    concurrent: {
      options: {
        logConcurrentOutput: true
      },
      tasks: ['nodemon', 'watch']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-bower-concat');
  grunt.loadNpmTasks('grunt-svgmin');
  
  grunt.registerTask('default', 
    ['svgmin', 
      'bower_concat',
      'less', 
      'cssmin', 
      'jshint', 
      'uglify', 
      'concurrent']);

};