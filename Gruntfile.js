'use strict';

module.exports = function(grunt) {

  // Load grunt tasks automatically
  require('jit-grunt')(grunt, {
    simplemocha: 'grunt-simple-mocha'
  });


  // Configurable paths for the application
  var appConfig = {
    srcDe: 'src/4.1/de',
    srcDeIndicators: 'src/4.1/de/indicators',
    libDe: 'lib/4.1/de',
    libDeIndicators: 'lib/4.1/de/indicators'
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
          '<%= dir.libDeIndicators %>/a1.json': '<%= dir.srcDeIndicators %>/a1/_a1-base.json'
        }
      },
      b1: {
        options: {},
        files: {
          '<%= dir.libDeIndicators %>/b1.json': '<%= dir.srcDeIndicators %>/b1/_b1-base.json'
        }
      },
      c1: {
        options: {},
        files: {
          '<%= dir.libDeIndicators %>/c1.json': '<%= dir.srcDeIndicators %>/c1/_c1-base.json'
        }
      },
      c2: {
        options: {},
        files: {
          '<%= dir.libDeIndicators %>/c2.json': '<%= dir.srcDeIndicators %>/c2/_c2-base.json'
        }
      },
      c3: {
        options: {},
        files: {
          '<%= dir.libDeIndicators %>/c3.json': '<%= dir.srcDeIndicators %>/c3/_c3-base.json'
        }
      },
      c4: {
        options: {},
        files: {
          '<%= dir.libDeIndicators %>/c4.json': '<%= dir.srcDeIndicators %>/c4/_c4-base.json'
        }
      },
      c5: {
        options: {},
        files: {
          '<%= dir.libDeIndicators %>/c5.json': '<%= dir.srcDeIndicators %>/c5/_c5-base.json'
        }
      },
      d1: {
        options: {},
        files: {
          '<%= dir.libDeIndicators %>/d1.json': '<%= dir.srcDeIndicators %>/d1/_d1-base.json'
        }
      },
      d2: {
        options: {},
        files: {
          '<%= dir.libDeIndicators %>/d2.json': '<%= dir.srcDeIndicators %>/d2/_d2-base.json'
        }
      },
      d3: {
        options: {},
        files: {
          '<%= dir.libDeIndicators %>/d3.json': '<%= dir.srcDeIndicators %>/d3/_d3-base.json'
        }
      },
      d4: {
        options: {},
        files: {
          '<%= dir.libDeIndicators %>/d4.json': '<%= dir.srcDeIndicators %>/d4/_d4-base.json'
        }
      },
      d5: {
        options: {},
        files: {
          '<%= dir.libDeIndicators %>/d5.json': '<%= dir.srcDeIndicators %>/d5/_d5-base.json'
        }
      },
      e1: {
        options: {},
        files: {
          '<%= dir.libDeIndicators %>/e1.json': '<%= dir.srcDeIndicators %>/e1/_e1-base.json'
        }
      },
      e2: {
        options: {},
        files: {
          '<%= dir.libDeIndicators %>/e2.json': '<%= dir.srcDeIndicators %>/e2/_e2-base.json'
        }
      },
      e3: {
        options: {},
        files: {
          '<%= dir.libDeIndicators %>/e3.json': '<%= dir.srcDeIndicators %>/e3/_e3-base.json'
        }
      },
      e4: {
        options: {},
        files: {
          '<%= dir.libDeIndicators %>/e4.json': '<%= dir.srcDeIndicators %>/e4/_e4-base.json'
        }
      },
      e5: {
        options: {},
        files: {
          '<%= dir.libDeIndicators %>/e5.json': '<%= dir.srcDeIndicators %>/e5/_e5-base.json'
        }
      },
      n1: {
        options: {},
        files: {
          '<%= dir.libDeIndicators %>/n1.json': '<%= dir.srcDeIndicators %>/n/n1-base.json'
        }
      },
      n2: {
        options: {},
        files: {
          '<%= dir.libDeIndicators %>/n2.json': '<%= dir.srcDeIndicators %>/n/n2-base.json'
        }
      },
      n3: {
        options: {},
        files: {
          '<%= dir.libDeIndicators %>/n3.json': '<%= dir.srcDeIndicators %>/n/n3-base.json'
        }
      },
      n4: {
        options: {},
        files: {
          '<%= dir.libDeIndicators %>/n4.json': '<%= dir.srcDeIndicators %>/n/n4-base.json'
        }
      },
      n5: {
        options: {},
        files: {
          '<%= dir.libDeIndicators %>/n5.json': '<%= dir.srcDeIndicators %>/n/n5-base.json'
        }
      },
      n6: {
        options: {},
        files: {
          '<%= dir.libDeIndicators %>/n6.json': '<%= dir.srcDeIndicators %>/n/n6-base.json'
        }
      },
      n7: {
        options: {},
        files: {
          '<%= dir.libDeIndicators %>/n7.json': '<%= dir.srcDeIndicators %>/n/n7-base.json'
        }
      },
      n8: {
        options: {},
        files: {
          '<%= dir.libDeIndicators %>/n8.json': '<%= dir.srcDeIndicators %>/n/n8-base.json'
        }
      },
      n9: {
        options: {},
        files: {
          '<%= dir.libDeIndicators %>/n9.json': '<%= dir.srcDeIndicators %>/n/n9-base.json'
        }
      },
      n10: {
        options: {},
        files: {
          '<%= dir.libDeIndicators %>/n10.json': '<%= dir.srcDeIndicators %>/n/n10-base.json'
        }
      },
      n11: {
        options: {},
        files: {
          '<%= dir.libDeIndicators %>/n11.json': '<%= dir.srcDeIndicators %>/n/n11-base.json'
        }
      },
      n12: {
        options: {},
        files: {
          '<%= dir.libDeIndicators %>/n12.json': '<%= dir.srcDeIndicators %>/n/n12-base.json'
        }
      },
      n13: {
        options: {},
        files: {
          '<%= dir.libDeIndicators %>/n13.json': '<%= dir.srcDeIndicators %>/n/n13-base.json'
        }
      },
      n14: {
        options: {},
        files: {
          '<%= dir.libDeIndicators %>/n14.json': '<%= dir.srcDeIndicators %>/n/n14-base.json'
        }
      },
      n15: {
        options: {},
        files: {
          '<%= dir.libDeIndicators %>/n15.json': '<%= dir.srcDeIndicators %>/n/n15-base.json'
        }
      },
      n16: {
        options: {},
        files: {
          '<%= dir.libDeIndicators %>/n16.json': '<%= dir.srcDeIndicators %>/n/n16-base.json'
        }
      },
      n17: {
        options: {},
        files: {
          '<%= dir.libDeIndicators %>/n17.json': '<%= dir.srcDeIndicators %>/n/n17-base.json'
        }
      },
      all: {
        options: {},
        files: {
          '<%= dir.libDe %>/ecg-indicators.json': '<%= dir.srcDe %>/ecg-indicators-base.json'
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