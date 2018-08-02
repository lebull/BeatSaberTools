

module.exports = function(grunt){
  grunt.initConfig({
    mocha:{
      all: {
        src: ['test/testrunner.html'],
      },options: {
        run: true,
        growlOnSuccess: false
      }
    }
  });

  grunt.loadNpmTasks('grunt-mocha');
  grunt.registerTask('default', ['mocha']);
  grunt.registerTask('test', ['mocha']);
}
