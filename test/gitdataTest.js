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

describe("[gitdata]", function() {
    var client;
    var token = "my test token";

    beforeEach(function() {
        client = new Client();
        client.authenticate({
            type: "oauth",
            token: token
        });
    });

    it("should successfully execute POST /repos/:user/:repo/git/blobs (createBlob)",  function(next) {
        var expected = nock('https://api.github.com')
            .post('/repos/:user/:repo/git/blobs')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    content: "undefined",
    encoding: "undefined" })
            .reply();
        client.gitdata.createBlob(
            {
                user: "kaizensoze",
                repo: "node-github",
                content: "undefined",
                encoding: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute POST /repos/:user/:repo/git/commits (createCommit)",  function(next) {
        var expected = nock('https://api.github.com')
            .post('/repos/:user/:repo/git/commits')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    message: "undefined",
    tree: "undefined",
    parents: "undefined" })
            .reply();
        client.gitdata.createCommit(
            {
                user: "kaizensoze",
                repo: "node-github",
                message: "undefined",
                tree: "undefined",
                parents: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute POST /repos/:user/:repo/git/refs (createReference)",  function(next) {
        var expected = nock('https://api.github.com')
            .post('/repos/:user/:repo/git/refs')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    ref: "undefined",
    sha: "undefined" })
            .reply();
        client.gitdata.createReference(
            {
                user: "kaizensoze",
                repo: "node-github",
                ref: "undefined",
                sha: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute POST /repos/:user/:repo/git/tags (createTag)",  function(next) {
        var expected = nock('https://api.github.com')
            .post('/repos/:user/:repo/git/tags')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    tag: "undefined",
    message: "undefined",
    object: "undefined",
    type: "undefined",
    tagger: "undefined" })
            .reply();
        client.gitdata.createTag(
            {
                user: "kaizensoze",
                repo: "node-github",
                tag: "undefined",
                message: "undefined",
                object: "undefined",
                type: "undefined",
                tagger: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute POST /repos/:user/:repo/git/trees (createTree)",  function(next) {
        var expected = nock('https://api.github.com')
            .post('/repos/:user/:repo/git/trees')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    tree: "undefined" })
            .reply();
        client.gitdata.createTree(
            {
                user: "kaizensoze",
                repo: "node-github",
                tree: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute DELETE /repos/:user/:repo/git/refs/:ref (deleteReference)",  function(next) {
        var expected = nock('https://api.github.com')
            .delete('/repos/:user/:repo/git/refs/:ref')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    ref: "undefined" })
            .reply();
        client.gitdata.deleteReference(
            {
                user: "kaizensoze",
                repo: "node-github",
                ref: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /repos/:user/:repo/git/blobs/:sha (getBlob)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repos/:user/:repo/git/blobs/:sha')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    sha: "undefined" })
            .reply();
        client.gitdata.getBlob(
            {
                user: "kaizensoze",
                repo: "node-github",
                sha: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /repos/:user/:repo/git/commits/:sha (getCommit)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repos/:user/:repo/git/commits/:sha')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    sha: "undefined" })
            .reply();
        client.gitdata.getCommit(
            {
                user: "kaizensoze",
                repo: "node-github",
                sha: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /repos/:user/:repo/git/refs/:ref (getReference)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repos/:user/:repo/git/refs/:ref')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    ref: "undefined" })
            .reply();
        client.gitdata.getReference(
            {
                user: "kaizensoze",
                repo: "node-github",
                ref: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /repos/:user/:repo/git/refs (getReferences)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repos/:user/:repo/git/refs')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github" })
            .reply();
        client.gitdata.getReferences(
            {
                user: "kaizensoze",
                repo: "node-github"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /repos/:user/:repo/git/tags/:sha (getTag)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repos/:user/:repo/git/tags/:sha')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    sha: "undefined" })
            .reply();
        client.gitdata.getTag(
            {
                user: "kaizensoze",
                repo: "node-github",
                sha: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /repos/:user/:repo/git/refs/tags (getTags)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repos/:user/:repo/git/refs/tags')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github" })
            .reply();
        client.gitdata.getTags(
            {
                user: "kaizensoze",
                repo: "node-github"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /repos/:user/:repo/git/trees/:sha (getTree)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repos/:user/:repo/git/trees/:sha')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    sha: "undefined" })
            .reply();
        client.gitdata.getTree(
            {
                user: "kaizensoze",
                repo: "node-github",
                sha: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute PATCH /repos/:user/:repo/git/refs/:ref (updateReference)",  function(next) {
        var expected = nock('https://api.github.com')
            .patch('/repos/:user/:repo/git/refs/:ref')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    ref: "undefined",
    sha: "undefined" })
            .reply();
        client.gitdata.updateReference(
            {
                user: "kaizensoze",
                repo: "node-github",
                ref: "undefined",
                sha: "undefined"
            }
        );
        expected.done();
        next();
    });

});
