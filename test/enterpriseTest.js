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

describe("[enterprise]", function() {
    var client;
    var token = "my test token";

    beforeEach(function() {
        client = new Client();
        client.authenticate({
            type: "oauth",
            token: token
        });
    });

    it("should successfully execute POST /admin/organizations (createOrg)",  function(next) {
        var expected = nock('https://api.github.com')
            .post('/admin/organizations')
            .query({ access_token: token })
            .query({ login: "undefined",
    admin: "undefined" })
            .reply();
        client.enterprise.createOrg(
            {
                login: "undefined",
                admin: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /enterprise/settings/license (getLicense)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/enterprise/settings/license')
            .query({ access_token: token })
            .query({  })
            .reply();
        client.enterprise.getLicense(
            {}
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /enterprise/stats/:type (stats)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/enterprise/stats/:type')
            .query({ access_token: token })
            .query({ type: "undefined" })
            .reply();
        client.enterprise.stats(
            {
                type: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute POST /admin/ldap/teams/:team_id/sync (syncLdapForTeam)",  function(next) {
        var expected = nock('https://api.github.com')
            .post('/admin/ldap/teams/:team_id/sync')
            .query({ access_token: token })
            .query({  })
            .reply();
        client.enterprise.syncLdapForTeam(
            {

            }
        );
        expected.done();
        next();
    });


    it("should successfully execute POST /admin/ldap/users/:user/sync (syncLdapForUser)",  function(next) {
        var expected = nock('https://api.github.com')
            .post('/admin/ldap/users/:user/sync')
            .query({ access_token: token })
            .query({ user: "kaizensoze" })
            .reply();
        client.enterprise.syncLdapForUser(
            {
                user: "kaizensoze"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute PATCH /admin/ldap/teams/:team_id/mapping (updateLdapForTeam)",  function(next) {
        var expected = nock('https://api.github.com')
            .patch('/admin/ldap/teams/:team_id/mapping')
            .query({ access_token: token })
            .query({  })
            .reply();
        client.enterprise.updateLdapForTeam(
            {

            }
        );
        expected.done();
        next();
    });


    it("should successfully execute PATCH /admin/ldap/users/:user/mapping (updateLdapForUser)",  function(next) {
        var expected = nock('https://api.github.com')
            .patch('/admin/ldap/users/:user/mapping')
            .query({ access_token: token })
            .query({ user: "kaizensoze" })
            .reply();
        client.enterprise.updateLdapForUser(
            {
                user: "kaizensoze"
            }
        );
        expected.done();
        next();
    });

});
