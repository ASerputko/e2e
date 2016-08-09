exports.config = {

    baseUrl: '',

    specs: [
        'src/**/*.e2e.js'
    ],
    exclude: [],

    framework: 'mocha',

    allScriptsTimeout: 110000,

    mochaOpts: {
        reporter: 'spec',
        slow: 5000
    },

    directConnect: true,

    capabilities: {
        'browserName': 'chrome',
        'idleTimeout': 6000
    },

    onPrepare: function() {
        // browser.ignoreSynchronization = true;
    }
};
