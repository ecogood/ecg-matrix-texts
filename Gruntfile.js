'use strict';

module.exports = function(grunt) {

  // Load grunt tasks automatically
  require('jit-grunt')(grunt, {
    simplemocha: 'grunt-simple-mocha'
  });


  // Configurable paths for the application
  var appConfig = {
    srcDe: 'src/4.1/de',
    libDe: 'lib/4.1/de'
  };

  // Project configuration.
  grunt.initConfig({

    dir: appConfig,

    pkg: grunt.file.readJSON('package.json'),

    watch: {
      indicators: {
        files: ['<%= dir.srcDe %>/**/*'],
        tasks: ['json_bake', 'test']
      },
      test: {
        files: ['test/**/*'],
        tasks: ['test']
      }
    },

    /* jshint camelcase:false */
    json_bake: {
      a1: {
        options: {},
        files: {
          '<%= dir.libDe %>/a1.json': '<%= dir.srcDe %>/a1/_a1-base.json'
        }
      },
      b1: {
        options: {},
        files: {
          '<%= dir.libDe %>/b1.json': '<%= dir.srcDe %>/b1/_b1-base.json'
        }
      },
      c1: {
        options: {},
        files: {
          '<%= dir.libDe %>/c1.json': '<%= dir.srcDe %>/c1/_c1-base.json'
        }
      },
      c2: {
        options: {},
        files: {
          '<%= dir.libDe %>/c2.json': '<%= dir.srcDe %>/c2/_c2-base.json'
        }
      },
      c3: {
        options: {},
        files: {
          '<%= dir.libDe %>/c3.json': '<%= dir.srcDe %>/c3/_c3-base.json'
        }
      },
      c4: {
        options: {},
        files: {
          '<%= dir.libDe %>/c4.json': '<%= dir.srcDe %>/c4/_c4-base.json'
        }
      },
      c5: {
        options: {},
        files: {
          '<%= dir.libDe %>/c5.json': '<%= dir.srcDe %>/c5/_c5-base.json'
        }
      },
      d1: {
        options: {},
        files: {
          '<%= dir.libDe %>/d1.json': '<%= dir.srcDe %>/d1/_d1-base.json'
        }
      },
      d2: {
        options: {},
        files: {
          '<%= dir.libDe %>/d2.json': '<%= dir.srcDe %>/d2/_d2-base.json'
        }
      },
      d3: {
        options: {},
        files: {
          '<%= dir.libDe %>/d3.json': '<%= dir.srcDe %>/d3/_d3-base.json'
        }
      },
      d4: {
        options: {},
        files: {
          '<%= dir.libDe %>/d4.json': '<%= dir.srcDe %>/d4/_d4-base.json'
        }
      },
      d5: {
        options: {},
        files: {
          '<%= dir.libDe %>/d5.json': '<%= dir.srcDe %>/d5/_d5-base.json'
        }
      },
      e1: {
        options: {},
        files: {
          '<%= dir.libDe %>/e1.json': '<%= dir.srcDe %>/e1/_e1-base.json'
        }
      },
      e2: {
        options: {},
        files: {
          '<%= dir.libDe %>/e2.json': '<%= dir.srcDe %>/e2/_e2-base.json'
        }
      },
      e3: {
        options: {},
        files: {
          '<%= dir.libDe %>/e3.json': '<%= dir.srcDe %>/e3/_e3-base.json'
        }
      },
      e4: {
        options: {},
        files: {
          '<%= dir.libDe %>/e4.json': '<%= dir.srcDe %>/e4/_e4-base.json'
        }
      },
      e5: {
        options: {},
        files: {
          '<%= dir.libDe %>/e5.json': '<%= dir.srcDe %>/e5/_e5-base.json'
        }
      },
      n1: {
        options: {},
        files: {
          '<%= dir.libDe %>/n1.json': '<%= dir.srcDe %>/n/n1-base.json'
        }
      },
      n2: {
        options: {},
        files: {
          '<%= dir.libDe %>/n2.json': '<%= dir.srcDe %>/n/n2-base.json'
        }
      },
      n3: {
        options: {},
        files: {
          '<%= dir.libDe %>/n3.json': '<%= dir.srcDe %>/n/n3-base.json'
        }
      },
      n4: {
        options: {},
        files: {
          '<%= dir.libDe %>/n4.json': '<%= dir.srcDe %>/n/n4-base.json'
        }
      },
      n5: {
        options: {},
        files: {
          '<%= dir.libDe %>/n5.json': '<%= dir.srcDe %>/n/n5-base.json'
        }
      },
      n6: {
        options: {},
        files: {
          '<%= dir.libDe %>/n6.json': '<%= dir.srcDe %>/n/n6-base.json'
        }
      },
      n7: {
        options: {},
        files: {
          '<%= dir.libDe %>/n7.json': '<%= dir.srcDe %>/n/n7-base.json'
        }
      },
      n8: {
        options: {},
        files: {
          '<%= dir.libDe %>/n8.json': '<%= dir.srcDe %>/n/n8-base.json'
        }
      },
      n9: {
        options: {},
        files: {
          '<%= dir.libDe %>/n9.json': '<%= dir.srcDe %>/n/n9-base.json'
        }
      },
      n10: {
        options: {},
        files: {
          '<%= dir.libDe %>/n10.json': '<%= dir.srcDe %>/n/n10-base.json'
        }
      },
      n11: {
        options: {},
        files: {
          '<%= dir.libDe %>/n11.json': '<%= dir.srcDe %>/n/n11-base.json'
        }
      },
      n12: {
        options: {},
        files: {
          '<%= dir.libDe %>/n12.json': '<%= dir.srcDe %>/n/n12-base.json'
        }
      },
      n13: {
        options: {},
        files: {
          '<%= dir.libDe %>/n13.json': '<%= dir.srcDe %>/n/n13-base.json'
        }
      },
      n14: {
        options: {},
        files: {
          '<%= dir.libDe %>/n14.json': '<%= dir.srcDe %>/n/n14-base.json'
        }
      },
      n15: {
        options: {},
        files: {
          '<%= dir.libDe %>/n15.json': '<%= dir.srcDe %>/n/n15-base.json'
        }
      },
      n16: {
        options: {},
        files: {
          '<%= dir.libDe %>/n16.json': '<%= dir.srcDe %>/n/n16-base.json'
        }
      },
      n17: {
        options: {},
        files: {
          '<%= dir.libDe %>/n17.json': '<%= dir.srcDe %>/n/n17-base.json'
        }
      }
    },

    // Configuration to be run (and then tested).
    // Run mocha tests.
    simplemocha: {
      options: {
        globals: ['should'],
        timeout: 2000,
        ignoreLeaks: false,
        ui: 'bdd',
        reporter: 'tap'
      },
      all: {src: ['test/**/*.js'] }
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: ['if.js', 'src/**/*.js', 'test/**/*.js']
    },

    // Clean test files before building or re-testing.
    clean: {
    }

  });

  // By default, build templates using helpers and run all tests.
  grunt.registerTask('validate', ['jshint:all']);
  grunt.registerTask('test', ['simplemocha']);
  grunt.registerTask('dev', [
    'json_bake',
    'watch'
  ]);
};