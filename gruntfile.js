module.exports = function(grunt) {

    require('load-grunt-config')(grunt, {
        data: {
            init: true,
            paths: {
                src: 'src',
                dist: 'dist',
                demo: 'demo',
                bower: 'bower_components'
            }
        }
    });

};
