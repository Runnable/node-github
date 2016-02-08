/*
 * Copyright 2012 Cloud9 IDE, Inc.
 *
 * This product includes software developed by
 * Cloud9 IDE, Inc (http://c9.io).
 *
 * Author: Mike de Boer <info@mikedeboer.nl>
 */

"use strict";

var Client = require("./../lib/index");
var nock = require('nock')

describe("[search]", function() {
    var client;
    var token = "my test token";

    beforeEach(function() {
        client = new Client();
        client.authenticate({
            type: "oauth",
            token: token
        });
    });

    it("should successfully execute GET /search/code (code)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/search/code')
            .query({ access_token: token })
            .query({ q: "bazinga" })
            .reply();
        client.search.code(
            {
                q: "bazinga"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /search/issues (issues)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/search/issues')
            .query({ access_token: token })
            .query({ q: "bazinga" })
            .reply();
        client.search.issues(
            {
                q: "bazinga"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /search/repositories (repos)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/search/repositories')
            .query({ access_token: token })
            .query({ q: "bazinga" })
            .reply();
        client.search.repos(
            {
                q: "bazinga"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /search/users (users)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/search/users')
            .query({ access_token: token })
            .query({ q: "bazinga" })
            .reply();
        client.search.users(
            {
                q: "bazinga"
            }
        );
        expected.done();
        next();
    });

});
