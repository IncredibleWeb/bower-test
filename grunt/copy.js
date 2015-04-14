module.exports = {
	build: {
        files: [{
            expand: true,
            flatten: true,
            filter: 'isFile',
            dest: '<%= paths.dist %>/',
            src: ['<%= paths.src %>/**']
        }]
    },
    demo: {
        files: [{
            expand: true,
            flatten: true,
            filter: 'isFile',
            dest: '<%= paths.demo %>/js/',
            src: ['<%= paths.dist %>/**']
        },
        {
        	expand: true,
            flatten: true,
            filter: 'isFile',
            dest: '<%= paths.demo %>/js/vendor/',
            src: ['<%= paths.bower %>/angular-ui-router/release/angular-ui-router.min.js', '<%= paths.bower %>/angular/angular.min.js']	
        }]
    }
};
