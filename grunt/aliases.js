module.exports = function (grunt) {
    grunt.registerTask('dev', ['jshint']);
    grunt.registerTask('dev_watch', ['jshint', 'watch:dev']);
    
    grunt.registerTask('build', ['copy:build']);
    grunt.registerTask('build_watch', ['copy:build', 'watch:build']);

    grunt.registerTask('demo', ['copy:demo']);
    grunt.registerTask('demo_keepalive', ['copy:demo', 'connect:demo:keepalive']);
};