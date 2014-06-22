require.config({

    baseUrl: "/scripts",

    /* starting point for application */
    deps: ['backbone.marionette', 'bootstrap', 'main'],


    shim: {
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    },

    paths: {
        jquery: '../lib/jquery/jquery',
        backbone: '../lib/backbone-amd/backbone',
        underscore: '../lib/underscore-amd/underscore',

        /* alias all marionette libs */
        'backbone.marionette': '../lib/backbone.marionette/lib/core/amd/backbone.marionette',
        'backbone.wreqr': '../lib/backbone.wreqr/lib/amd/backbone.wreqr',
        'backbone.babysitter': '../lib/backbone.babysitter/lib/amd/backbone.babysitter',

        /* alias the bootstrap js lib */
        bootstrap: 'vendor/bootstrap',

        /* Alias text.js for template loading and shortcut the templates dir to tmpl */
        text: '../lib/requirejs-text/text',
        tmpl: "../templates",

        /* handlebars from the require handlerbars plugin below */
        handlebars: '../lib/require-handlebars-plugin/Handlebars',

        /* require handlebars plugin - Alex Sexton */
        i18nprecompile: '../lib/require-handlebars-plugin/hbs/i18nprecompile',
        json2: '../lib/require-handlebars-plugin/hbs/json2',
        hbs: '../lib/require-handlebars-plugin/hbs'
    },

    hbs: {
        disableI18n: true
    }
});
