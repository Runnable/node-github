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

describe("[pullRequests]", function() {
    var client;
    var token = "my test token";

    beforeEach(function() {
        client = new Client();
        client.authenticate({
            type: "oauth",
            token: token
        });
    });

    it("should successfully execute GET /repos/:user/:repo/pulls/:number/merge (checkMerged)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repos/:user/:repo/pulls/:number/merge')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    number: "undefined" })
            .reply();
        client.pullRequests.checkMerged(
            {
                user: "kaizensoze",
                repo: "node-github",
                number: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute POST /repos/:user/:repo/pulls (create)",  function(next) {
        var expected = nock('https://api.github.com')
            .post('/repos/:user/:repo/pulls')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    title: "undefined",
    head: "undefined",
    base: "undefined" })
            .reply();
        client.pullRequests.create(
            {
                user: "kaizensoze",
                repo: "node-github",
                title: "undefined",
                head: "undefined",
                base: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute POST /repos/:user/:repo/pulls/:number/comments (createComment)",  function(next) {
        var expected = nock('https://api.github.com')
            .post('/repos/:user/:repo/pulls/:number/comments')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    number: "undefined",
    body: "undefined",
    commit_id: "undefined",
    path: "undefined",
    position: "undefined" })
            .reply();
        client.pullRequests.createComment(
            {
                user: "kaizensoze",
                repo: "node-github",
                number: "undefined",
                body: "undefined",
                commit_id: "undefined",
                path: "undefined",
                position: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute POST /repos/:user/:repo/pulls/:number/comments (createCommentReply)",  function(next) {
        var expected = nock('https://api.github.com')
            .post('/repos/:user/:repo/pulls/:number/comments')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    number: "undefined",
    body: "undefined",
    in_reply_to: "undefined" })
            .reply();
        client.pullRequests.createCommentReply(
            {
                user: "kaizensoze",
                repo: "node-github",
                number: "undefined",
                body: "undefined",
                in_reply_to: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute POST /repos/:user/:repo/pulls (createFromIssue)",  function(next) {
        var expected = nock('https://api.github.com')
            .post('/repos/:user/:repo/pulls')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    issue: "undefined",
    head: "undefined",
    base: "undefined" })
            .reply();
        client.pullRequests.createFromIssue(
            {
                user: "kaizensoze",
                repo: "node-github",
                issue: "undefined",
                head: "undefined",
                base: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute DELETE /repos/:user/:repo/pulls/comments/:number (deleteComment)",  function(next) {
        var expected = nock('https://api.github.com')
            .delete('/repos/:user/:repo/pulls/comments/:number')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    number: "undefined" })
            .reply();
        client.pullRequests.deleteComment(
            {
                user: "kaizensoze",
                repo: "node-github",
                number: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute PATCH /repos/:user/:repo/pulls/comments/:number (editComment)",  function(next) {
        var expected = nock('https://api.github.com')
            .patch('/repos/:user/:repo/pulls/comments/:number')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    number: "undefined",
    body: "undefined" })
            .reply();
        client.pullRequests.editComment(
            {
                user: "kaizensoze",
                repo: "node-github",
                number: "undefined",
                body: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /repos/:user/:repo/pulls/:number (get)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repos/:user/:repo/pulls/:number')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    number: "undefined" })
            .reply();
        client.pullRequests.get(
            {
                user: "kaizensoze",
                repo: "node-github",
                number: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /repos/:user/:repo/pulls (getAll)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repos/:user/:repo/pulls')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github" })
            .reply();
        client.pullRequests.getAll(
            {
                user: "kaizensoze",
                repo: "node-github"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /repos/:user/:repo/pulls/comments/:number (getComment)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repos/:user/:repo/pulls/comments/:number')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    number: "undefined" })
            .reply();
        client.pullRequests.getComment(
            {
                user: "kaizensoze",
                repo: "node-github",
                number: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /repos/:user/:repo/pulls/:number/comments (getComments)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repos/:user/:repo/pulls/:number/comments')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    number: "undefined" })
            .reply();
        client.pullRequests.getComments(
            {
                user: "kaizensoze",
                repo: "node-github",
                number: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /repos/:user/:repo/pulls/comments (getCommentsForRepo)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repos/:user/:repo/pulls/comments')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github" })
            .reply();
        client.pullRequests.getCommentsForRepo(
            {
                user: "kaizensoze",
                repo: "node-github"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /repos/:user/:repo/pulls/:number/commits (getCommits)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repos/:user/:repo/pulls/:number/commits')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    number: "undefined" })
            .reply();
        client.pullRequests.getCommits(
            {
                user: "kaizensoze",
                repo: "node-github",
                number: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /repos/:user/:repo/pulls/:number/files (getFiles)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repos/:user/:repo/pulls/:number/files')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    number: "undefined" })
            .reply();
        client.pullRequests.getFiles(
            {
                user: "kaizensoze",
                repo: "node-github",
                number: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute PUT /repos/:user/:repo/pulls/:number/merge (merge)",  function(next) {
        var expected = nock('https://api.github.com')
            .put('/repos/:user/:repo/pulls/:number/merge')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    number: "undefined" })
            .reply();
        client.pullRequests.merge(
            {
                user: "kaizensoze",
                repo: "node-github",
                number: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute PATCH /repos/:user/:repo/pulls/:number (update)",  function(next) {
        var expected = nock('https://api.github.com')
            .patch('/repos/:user/:repo/pulls/:number')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    number: "undefined" })
            .reply();
        client.pullRequests.update(
            {
                user: "kaizensoze",
                repo: "node-github",
                number: "undefined"
            }
        );
        expected.done();
        next();
    });

});
