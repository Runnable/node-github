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

describe("[authorization]", function() {
    var client;
    var token = "my test token";

    beforeEach(function() {
        client = new Client();
        client.authenticate({
            type: "oauth",
            token: token
        });
    });

    it("should successfully execute POST /authorizations (create)",  function(next) {
        var expected = nock('https://api.github.com')
            .post('/authorizations')
            .query({ access_token: token })
            .query({  })
            .reply();
        client.authorization.create(
            {

            }
        );
        expected.done();
        next();
    });


    it("should successfully execute DELETE /authorizations/:id (delete)",  function(next) {
        var expected = nock('https://api.github.com')
            .delete('/authorizations/:id')
            .query({ access_token: token })
            .query({ id: "undefined" })
            .reply();
        client.authorization.delete(
            {
                id: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /authorizations/:id (get)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/authorizations/:id')
            .query({ access_token: token })
            .query({ id: "undefined" })
            .reply();
        client.authorization.get(
            {
                id: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /authorizations (getAll)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/authorizations')
            .query({ access_token: token })
            .query({  })
            .reply();
        client.authorization.getAll(
            {

            }
        );
        expected.done();
        next();
    });


    it("should successfully execute PATCH /authorizations/:id (update)",  function(next) {
        var expected = nock('https://api.github.com')
            .patch('/authorizations/:id')
            .query({ access_token: token })
            .query({ id: "undefined" })
            .reply();
        client.authorization.update(
            {
                id: "undefined"
            }
        );
        expected.done();
        next();
    });

});
