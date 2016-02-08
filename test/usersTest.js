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

describe("[users]", function() {
    var client;
    var token = "my test token";

    beforeEach(function() {
        client = new Client();
        client.authenticate({
            type: "oauth",
            token: token
        });
    });

    it("should successfully execute POST /user/emails (addEmails)",  function(next) {
        var expected = nock('https://api.github.com')
            .post('/user/emails')
            .query({ access_token: token })
            .query({  })
            .reply();
        client.users.addEmails(
            {}
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /user/following/:user (checkFollowing)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/user/following/:user')
            .query({ access_token: token })
            .query({ user: "kaizensoze" })
            .reply();
        client.users.checkFollowing(
            {
                user: "kaizensoze"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /users/:user/following/:other_user (checkIfOneFollowersOther)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/users/:user/following/:other_user')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    other_user: "undefined" })
            .reply();
        client.users.checkIfOneFollowersOther(
            {
                user: "kaizensoze",
                other_user: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute POST /user/keys (createKey)",  function(next) {
        var expected = nock('https://api.github.com')
            .post('/user/keys')
            .query({ access_token: token })
            .query({ title: "undefined",
    key: "undefined" })
            .reply();
        client.users.createKey(
            {
                title: "undefined",
                key: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute DELETE /user/emails (deleteEmails)",  function(next) {
        var expected = nock('https://api.github.com')
            .delete('/user/emails')
            .query({ access_token: token })
            .query({  })
            .reply();
        client.users.deleteEmails(
            {}
        );
        expected.done();
        next();
    });


    it("should successfully execute DELETE /user/keys/:id (deleteKey)",  function(next) {
        var expected = nock('https://api.github.com')
            .delete('/user/keys/:id')
            .query({ access_token: token })
            .query({ id: "undefined" })
            .reply();
        client.users.deleteKey(
            {
                id: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute DELETE /users/:user/site_admin (demote)",  function(next) {
        var expected = nock('https://api.github.com')
            .delete('/users/:user/site_admin')
            .query({ access_token: token })
            .query({ user: "kaizensoze" })
            .reply();
        client.users.demote(
            {
                user: "kaizensoze"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute PATCH /user/memberships/orgs/:org (editOrganizationMembership)",  function(next) {
        var expected = nock('https://api.github.com')
            .patch('/user/memberships/orgs/:org')
            .query({ access_token: token })
            .query({ org: "undefined",
    state: "undefined" })
            .reply();
        client.users.editOrganizationMembership(
            {
                org: "undefined",
                state: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute PUT /user/following/:user (followUser)",  function(next) {
        var expected = nock('https://api.github.com')
            .put('/user/following/:user')
            .query({ access_token: token })
            .query({ user: "kaizensoze" })
            .reply();
        client.users.followUser(
            {
                user: "kaizensoze"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /user (get)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/user')
            .query({ access_token: token })
            .query({  })
            .reply();
        client.users.get(
            {}
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /users (getAll)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/users')
            .query({ access_token: token })
            .query({  })
            .reply();
        client.users.getAll(
            {

            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /user/emails (getEmails)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/user/emails')
            .query({ access_token: token })
            .query({  })
            .reply();
        client.users.getEmails(
            {

            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /users/followers (getFollowers)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/users/followers')
            .query({ access_token: token })
            .query({  })
            .reply();
        client.users.getFollowers(
            {

            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /users/:user/followers (getFollowersForUser)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/users/:user/followers')
            .query({ access_token: token })
            .query({ user: "kaizensoze" })
            .reply();
        client.users.getFollowersForUser(
            {
                user: "kaizensoze"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /user/following (getFollowing)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/user/following')
            .query({ access_token: token })
            .query({  })
            .reply();
        client.users.getFollowing(
            {

            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /users/:user/following (getFollowingForUser)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/users/:user/following')
            .query({ access_token: token })
            .query({ user: "kaizensoze" })
            .reply();
        client.users.getFollowingForUser(
            {
                user: "kaizensoze"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /users/:user (getForUser)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/users/:user')
            .query({ access_token: token })
            .query({ user: "kaizensoze" })
            .reply();
        client.users.getForUser(
            {
                user: "kaizensoze"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /user/keys/:id (getKey)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/user/keys/:id')
            .query({ access_token: token })
            .query({ id: "undefined" })
            .reply();
        client.users.getKey(
            {
                id: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /user/keys (getKeys)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/user/keys')
            .query({ access_token: token })
            .query({  })
            .reply();
        client.users.getKeys(
            {

            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /users/:user/keys (getKeysForUser)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/users/:user/keys')
            .query({ access_token: token })
            .query({ user: "kaizensoze" })
            .reply();
        client.users.getKeysForUser(
            {
                user: "kaizensoze"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /user/memberships/orgs/:org (getOrganizationMembership)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/user/memberships/orgs/:org')
            .query({ access_token: token })
            .query({ org: "undefined" })
            .reply();
        client.users.getOrganizationMembership(
            {
                org: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /user/orgs (getOrgs)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/user/orgs')
            .query({ access_token: token })
            .query({  })
            .reply();
        client.users.getOrgs(
            {

            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /user/teams (getTeams)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/user/teams')
            .query({ access_token: token })
            .query({  })
            .reply();
        client.users.getTeams(
            {

            }
        );
        expected.done();
        next();
    });


    it("should successfully execute PUT /users/:user/site_admin (promote)",  function(next) {
        var expected = nock('https://api.github.com')
            .put('/users/:user/site_admin')
            .query({ access_token: token })
            .query({ user: "kaizensoze" })
            .reply();
        client.users.promote(
            {
                user: "kaizensoze"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute PUT /users/:user/suspended (suspend)",  function(next) {
        var expected = nock('https://api.github.com')
            .put('/users/:user/suspended')
            .query({ access_token: token })
            .query({ user: "kaizensoze" })
            .reply();
        client.users.suspend(
            {
                user: "kaizensoze"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute DELETE /user/following/:user (unfollowUser)",  function(next) {
        var expected = nock('https://api.github.com')
            .delete('/user/following/:user')
            .query({ access_token: token })
            .query({ user: "kaizensoze" })
            .reply();
        client.users.unfollowUser(
            {
                user: "kaizensoze"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute DELETE /users/:user/suspended (unsuspend)",  function(next) {
        var expected = nock('https://api.github.com')
            .delete('/users/:user/suspended')
            .query({ access_token: token })
            .query({ user: "kaizensoze" })
            .reply();
        client.users.unsuspend(
            {
                user: "kaizensoze"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute PATCH /user (update)",  function(next) {
        var expected = nock('https://api.github.com')
            .patch('/user')
            .query({ access_token: token })
            .query({  })
            .reply();
        client.users.update(
            {

            }
        );
        expected.done();
        next();
    });

});
