module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            
            width: 1600,
            suffix: '_large_2x',
            quality: 80
            
          },
          {
            width: 800,
            suffix: '_medium_1x',
            quality: 60
          }, 
          {
            width: 400,
            suffix: '_small_x',
            quality: 40
          }]
        },

        /*
        You don't need to change this part if you don't change
        the directory structure.
        */
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images/',
          dest: 'images_src/'
        }]
      }
    },
              
     /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['images_src']
        },
      },
    },
    
  });
  
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['mkdir', 'responsive_images']);
  
};