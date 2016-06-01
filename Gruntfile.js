module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            files: 'client/scripts/**/*.js'
        },
        watch: {
            client : {
                files: ['client/scripts/**/*.js',
                    'client/views/**/*.html',
                    'client/styles/*.css'
                ],
                tasks: ['jshint','copy','cssmin'],
                options: {
                    spawn: false
                }
            }
        },
        uglify: {
            build: {
                src: [
                    'client/scripts/client.js',
                    'client/scripts/controllers/*.js',
                    'client/scripts/factories/*.js'
                ],
                dest: 'server/public/assets/scripts/client.min.js'
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'client/styles',
                    src: '*.css',
                    dest: 'server/public/assets/styles/',
                    ext: '.min.css'
                }]
            }
        },
        copy: {
            jQuery: {
                expand: true,
                cwd: 'node_modules',
                src: [
                    "jquery/dist/jquery.js",
                    "jquery/dist/jquery.min.js",
                    "jquery/dist/jquery.min.map"
                ],
                "dest": "server/public/assets/vendors/"
            },
            html: {
                expand: true,
                cwd: 'client/views/',
                src: [
                    "index.html",
                    "routes/*.html",
                    "partials/*.html",
                    "templates/*.html"
                ],
                "dest": "server/public/assets/views/"
            },
            bootstrap: {
                expand: true,
                cwd: "node_modules/bootstrap/",
                src: [
                    "dist/**/*"
                ],
                "dest": "server/public/assets/vendors/bootstrap/"
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['copy', 'jshint', 'uglify','cssmin']);
};
