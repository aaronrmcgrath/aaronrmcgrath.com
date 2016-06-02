module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            files: 'client/scripts/**/*.js'
        },
        watch: {
            client : {
                files: ['client/scripts/client.js',
                    'client/scripts/**/*.js',
                    'client/views/**/*.html',
                    'client/styles/*.css'
                ],
                tasks: ['jshint','copy','cssmin'],
                options: {
                    spawn: false
                }
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
            script: {
                expand: true,
                cwd: 'client/scripts/',
                src: ['client.js'],
                "dest": "server/public/assets/scripts/"
            },
            bootstrap: {
                expand: true,
                cwd: "node_modules/bootstrap/",
                src: [
                    "dist/**/*"
                ],
                "dest": "server/public/assets/vendors/bootstrap/"
            },
            stylesheet: {
                expand: true,
                cwd: 'client/styles',
                src: ['stylesheet.css'],
                "dest": "server/public/assets/styles/"
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['copy', 'jshint','cssmin']);
};
