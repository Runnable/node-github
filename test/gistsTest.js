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

describe("[gists]", function() {
    var client;
    var token = "my test token";

    beforeEach(function() {
        client = new Client();
        client.authenticate({
            type: "oauth",
            token: token
        });
    });

    it("should successfully execute GET /gists/:id/star (checkStar)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/gists/:id/star')
            .query({ access_token: token })
            .query({ id: "00ccfb395ec8410daec2" })
            .reply();
        client.gists.checkStar(
            {
                id: "00ccfb395ec8410daec2"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute POST /gists (create)",  function(next) {
        var expected = nock('https://api.github.com')
            .post('/gists')
            .query({ access_token: token })
            .query({ files: "undefined",
    public: "undefined" })
            .reply();
        client.gists.create(
            {
                files: "undefined",
                public: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute POST /gists/:gist_id/comments (createComment)",  function(next) {
        var expected = nock('https://api.github.com')
            .post('/gists/:gist_id/comments')
            .query({ access_token: token })
            .query({ gist_id: "undefined",
    body: "undefined" })
            .reply();
        client.gists.createComment(
            {
                gist_id: "undefined",
                body: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute DELETE /gists/:id (delete)",  function(next) {
        var expected = nock('https://api.github.com')
            .delete('/gists/:id')
            .query({ access_token: token })
            .query({ id: "00ccfb395ec8410daec2" })
            .reply();
        client.gists.delete(
            {
                id: "00ccfb395ec8410daec2"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute DELETE /gists/:gist_id/comments/:id (deleteComment)",  function(next) {
        var expected = nock('https://api.github.com')
            .delete('/gists/:gist_id/comments/:id')
            .query({ access_token: token })
            .query({ gist_id: "undefined",
    id: "00ccfb395ec8410daec2" })
            .reply();
        client.gists.deleteComment(
            {
                gist_id: "undefined",
                id: "00ccfb395ec8410daec2"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute PATCH /gists/:id (edit)",  function(next) {
        var expected = nock('https://api.github.com')
            .patch('/gists/:id')
            .query({ access_token: token })
            .query({ id: "00ccfb395ec8410daec2",
    files: "undefined" })
            .reply();
        client.gists.edit(
            {
                id: "00ccfb395ec8410daec2",
                files: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute PATCH /gists/:gist_id/comments/:id (editComment)",  function(next) {
        var expected = nock('https://api.github.com')
            .patch('/gists/:gist_id/comments/:id')
            .query({ access_token: token })
            .query({ gist_id: "undefined",
    id: "00ccfb395ec8410daec2",
    body: "undefined" })
            .reply();
        client.gists.editComment(
            {
                gist_id: "undefined",
                id: "00ccfb395ec8410daec2",
                body: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute POST /gists/:id/forks (fork)",  function(next) {
        var expected = nock('https://api.github.com')
            .post('/gists/:id/forks')
            .query({ access_token: token })
            .query({ id: "00ccfb395ec8410daec2" })
            .reply();
        client.gists.fork(
            {
                id: "00ccfb395ec8410daec2"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /gists/:id (get)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/gists/:id')
            .query({ access_token: token })
            .query({ id: "00ccfb395ec8410daec2" })
            .reply();
        client.gists.get(
            {
                id: "00ccfb395ec8410daec2"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /gists (getAll)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/gists')
            .query({ access_token: token })
            .query({  })
            .reply();
        client.gists.getAll(
            {

            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /gists/:gist_id/comments/:id (getComment)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/gists/:gist_id/comments/:id')
            .query({ access_token: token })
            .query({ gist_id: "undefined",
    id: "00ccfb395ec8410daec2" })
            .reply();
        client.gists.getComment(
            {
                gist_id: "undefined",
                id: "00ccfb395ec8410daec2"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /gists/:gist_id/comments (getComments)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/gists/:gist_id/comments')
            .query({ access_token: token })
            .query({ gist_id: "undefined" })
            .reply();
        client.gists.getComments(
            {
                gist_id: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /gists/:id/commits (getCommits)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/gists/:id/commits')
            .query({ access_token: token })
            .query({ id: "00ccfb395ec8410daec2" })
            .reply();
        client.gists.getCommits(
            {
                id: "00ccfb395ec8410daec2"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /users/:user/gists (getForUser)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/users/:user/gists')
            .query({ access_token: token })
            .query({ user: "kaizensoze" })
            .reply();
        client.gists.getForUser(
            {
                user: "kaizensoze"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /gists/:id/forks (getForks)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/gists/:id/forks')
            .query({ access_token: token })
            .query({ id: "00ccfb395ec8410daec2" })
            .reply();
        client.gists.getForks(
            {
                id: "00ccfb395ec8410daec2"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /gists/public (getPublic)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/gists/public')
            .query({ access_token: token })
            .query({  })
            .reply();
        client.gists.getPublic(
            {

            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /gists/:id/:sha (getRevision)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/gists/:id/:sha')
            .query({ access_token: token })
            .query({ id: "00ccfb395ec8410daec2",
    sha: "undefined" })
            .reply();
        client.gists.getRevision(
            {
                id: "00ccfb395ec8410daec2",
                sha: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /gists/starred (getStarred)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/gists/starred')
            .query({ access_token: token })
            .query({  })
            .reply();
        client.gists.getStarred(
            {

            }
        );
        expected.done();
        next();
    });


    it("should successfully execute PUT /gists/:id/star (star)",  function(next) {
        var expected = nock('https://api.github.com')
            .put('/gists/:id/star')
            .query({ access_token: token })
            .query({ id: "00ccfb395ec8410daec2" })
            .reply();
        client.gists.star(
            {
                id: "00ccfb395ec8410daec2"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute DELETE /gists/:id/star (unstar)",  function(next) {
        var expected = nock('https://api.github.com')
            .delete('/gists/:id/star')
            .query({ access_token: token })
            .query({ id: "00ccfb395ec8410daec2" })
            .reply();
        client.gists.unstar(
            {
                id: "00ccfb395ec8410daec2"
            }
        );
        expected.done();
        next();
    });

});
