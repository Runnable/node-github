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

describe("[misc]", function() {
    var client;
    var token = "my test token";

    beforeEach(function() {
        client = new Client();
        client.authenticate({
            type: "oauth",
            token: token
        });
    });

    it("should successfully execute GET /emojis (getEmojis)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/emojis')
            .query({ access_token: token })
            .query({  })
            .reply();
        client.misc.getEmojis(
            {}
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /gitignore/templates/:name (getGitignoreTemplate)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/gitignore/templates/:name')
            .query({ access_token: token })
            .query({ name: "undefined" })
            .reply();
        client.misc.getGitignoreTemplate(
            {
                name: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /gitignore/templates (getGitignoreTemplates)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/gitignore/templates')
            .query({ access_token: token })
            .query({  })
            .reply();
        client.misc.getGitignoreTemplates(
            {}
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /licenses/:license (getLicense)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/licenses/:license')
            .query({ access_token: token })
            .query({ license: "undefined" })
            .reply();
        client.misc.getLicense(
            {
                license: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /licenses (getLicenses)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/licenses')
            .query({ access_token: token })
            .query({  })
            .reply();
        client.misc.getLicenses(
            {}
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /meta (getMeta)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/meta')
            .query({ access_token: token })
            .query({  })
            .reply();
        client.misc.getMeta(
            {}
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /rate_limit (getRateLimit)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/rate_limit')
            .query({ access_token: token })
            .query({  })
            .reply();
        client.misc.getRateLimit(
            {}
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /repos/:user/:repo/license (getRepoLicense)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repos/:user/:repo/license')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github" })
            .reply();
        client.misc.getRepoLicense(
            {
                user: "kaizensoze",
                repo: "node-github"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute POST /markdown (renderMarkdown)",  function(next) {
        var expected = nock('https://api.github.com')
            .post('/markdown')
            .query({ access_token: token })
            .query({ text: "undefined" })
            .reply();
        client.misc.renderMarkdown(
            {
                text: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute POST /markdown/raw (renderMarkdownRaw)",  function(next) {
        var expected = nock('https://api.github.com')
            .post('/markdown/raw')
            .query({ access_token: token })
            .query({ data: "undefined" })
            .reply();
        client.misc.renderMarkdownRaw(
            {
                data: "undefined"
            }
        );
        expected.done();
        next();
    });

});
