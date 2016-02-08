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

describe("[orgs]", function() {
    var client;
    var token = "my test token";

    beforeEach(function() {
        client = new Client();
        client.authenticate({
            type: "oauth",
            token: token
        });
    });

    it("should successfully execute PUT /orgs/:org/memberships/:user (addOrganizationMembership)",  function(next) {
        var expected = nock('https://api.github.com')
            .put('/orgs/:org/memberships/:user')
            .query({ access_token: token })
            .query({ org: "undefined",
    user: "kaizensoze",
    role: "undefined" })
            .reply();
        client.orgs.addOrganizationMembership(
            {
                org: "undefined",
                user: "kaizensoze",
                role: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute PUT /teams/:id/memberships/:user (addTeamMembership)",  function(next) {
        var expected = nock('https://api.github.com')
            .put('/teams/:id/memberships/:user')
            .query({ access_token: token })
            .query({ id: "undefined",
    user: "kaizensoze" })
            .reply();
        client.orgs.addTeamMembership(
            {
                id: "undefined",
                user: "kaizensoze"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute PUT /teams/:id/repos/:user/:repo (addTeamRepo)",  function(next) {
        var expected = nock('https://api.github.com')
            .put('/teams/:id/repos/:user/:repo')
            .query({ access_token: token })
            .query({ id: "undefined",
    user: "kaizensoze",
    repo: "node-github" })
            .reply();
        client.orgs.addTeamRepo(
            {
                id: "undefined",
                user: "kaizensoze",
                repo: "node-github"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /orgs/:org/members/:user (checkMembership)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/orgs/:org/members/:user')
            .query({ access_token: token })
            .query({ org: "undefined",
    user: "kaizensoze" })
            .reply();
        client.orgs.checkMembership(
            {
                org: "undefined",
                user: "kaizensoze"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /orgs/:org/public_members/:user (checkPublicMembership)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/orgs/:org/public_members/:user')
            .query({ access_token: token })
            .query({ org: "undefined",
    user: "kaizensoze" })
            .reply();
        client.orgs.checkPublicMembership(
            {
                org: "undefined",
                user: "kaizensoze"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /teams/:id/repos/:user/:repo (checkTeamRepo)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/teams/:id/repos/:user/:repo')
            .query({ access_token: token })
            .query({ id: "undefined",
    user: "kaizensoze",
    repo: "node-github" })
            .reply();
        client.orgs.checkTeamRepo(
            {
                id: "undefined",
                user: "kaizensoze",
                repo: "node-github"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute DELETE /orgs/:org/public_members/:user (concealMembership)",  function(next) {
        var expected = nock('https://api.github.com')
            .delete('/orgs/:org/public_members/:user')
            .query({ access_token: token })
            .query({ org: "undefined",
    user: "kaizensoze" })
            .reply();
        client.orgs.concealMembership(
            {
                org: "undefined",
                user: "kaizensoze"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute POST /orgs/:org/hooks (createHook)",  function(next) {
        var expected = nock('https://api.github.com')
            .post('/orgs/:org/hooks')
            .query({ access_token: token })
            .query({ org: "undefined",
    name: "undefined",
    config: "undefined" })
            .reply();
        client.orgs.createHook(
            {
                org: "undefined",
                name: "undefined",
                config: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute POST /orgs/:org/teams (createTeam)",  function(next) {
        var expected = nock('https://api.github.com')
            .post('/orgs/:org/teams')
            .query({ access_token: token })
            .query({ org: "undefined",
    name: "undefined" })
            .reply();
        client.orgs.createTeam(
            {
                org: "undefined",
                name: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute DELETE /orgs/:org/hooks/:id (deleteHook)",  function(next) {
        var expected = nock('https://api.github.com')
            .delete('/orgs/:org/hooks/:id')
            .query({ access_token: token })
            .query({ org: "undefined",
    id: "undefined" })
            .reply();
        client.orgs.deleteHook(
            {
                org: "undefined",
                id: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute DELETE /orgs/:org/migrations/:id/archive (deleteMigrationArchive)",  function(next) {
        var expected = nock('https://api.github.com')
            .delete('/orgs/:org/migrations/:id/archive')
            .query({ access_token: token })
            .query({ org: "undefined",
    id: "undefined" })
            .reply();
        client.orgs.deleteMigrationArchive(
            {
                org: "undefined",
                id: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute DELETE /teams/:id (deleteTeam)",  function(next) {
        var expected = nock('https://api.github.com')
            .delete('/teams/:id')
            .query({ access_token: token })
            .query({ id: "undefined" })
            .reply();
        client.orgs.deleteTeam(
            {
                id: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute DELETE /teams/:id/repos/:user/:repo (deleteTeamRepo)",  function(next) {
        var expected = nock('https://api.github.com')
            .delete('/teams/:id/repos/:user/:repo')
            .query({ access_token: token })
            .query({ id: "undefined",
    user: "kaizensoze",
    repo: "node-github" })
            .reply();
        client.orgs.deleteTeamRepo(
            {
                id: "undefined",
                user: "kaizensoze",
                repo: "node-github"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute PATCH /orgs/:org/hooks/:id (editHook)",  function(next) {
        var expected = nock('https://api.github.com')
            .patch('/orgs/:org/hooks/:id')
            .query({ access_token: token })
            .query({ org: "undefined",
    id: "undefined",
    config: "undefined" })
            .reply();
        client.orgs.editHook(
            {
                org: "undefined",
                id: "undefined",
                config: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute PATCH /teams/:id (editTeam)",  function(next) {
        var expected = nock('https://api.github.com')
            .patch('/teams/:id')
            .query({ access_token: token })
            .query({ id: "undefined",
    name: "undefined" })
            .reply();
        client.orgs.editTeam(
            {
                id: "undefined",
                name: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /orgs/:org (get)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/orgs/:org')
            .query({ access_token: token })
            .query({ org: "undefined" })
            .reply();
        client.orgs.get(
            {
                org: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /organizations (getAll)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/organizations')
            .query({ access_token: token })
            .query({  })
            .reply();
        client.orgs.getAll(
            {

            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /users/:user/orgs (getForUser)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/users/:user/orgs')
            .query({ access_token: token })
            .query({ user: "kaizensoze" })
            .reply();
        client.orgs.getForUser(
            {
                user: "kaizensoze"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /orgs/:org/hooks/:id (getHook)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/orgs/:org/hooks/:id')
            .query({ access_token: token })
            .query({ org: "undefined",
    id: "undefined" })
            .reply();
        client.orgs.getHook(
            {
                org: "undefined",
                id: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /orgs/:org/hooks (getHooks)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/orgs/:org/hooks')
            .query({ access_token: token })
            .query({ org: "undefined" })
            .reply();
        client.orgs.getHooks(
            {
                org: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /orgs/:org/members (getMembers)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/orgs/:org/members')
            .query({ access_token: token })
            .query({ org: "undefined" })
            .reply();
        client.orgs.getMembers(
            {
                org: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /orgs/:org/migrations/:id/archive (getMigrationArchiveLink)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/orgs/:org/migrations/:id/archive')
            .query({ access_token: token })
            .query({ org: "undefined",
    id: "undefined" })
            .reply();
        client.orgs.getMigrationArchiveLink(
            {
                org: "undefined",
                id: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /orgs/:org/migrations/:id (getMigrationStatus)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/orgs/:org/migrations/:id')
            .query({ access_token: token })
            .query({ org: "undefined",
    id: "undefined" })
            .reply();
        client.orgs.getMigrationStatus(
            {
                org: "undefined",
                id: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /orgs/:org/migrations (getMigrations)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/orgs/:org/migrations')
            .query({ access_token: token })
            .query({ org: "undefined" })
            .reply();
        client.orgs.getMigrations(
            {
                org: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /orgs/:org/memberships/:user (getOrganizationMembership)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/orgs/:org/memberships/:user')
            .query({ access_token: token })
            .query({ org: "undefined",
    user: "kaizensoze" })
            .reply();
        client.orgs.getOrganizationMembership(
            {
                org: "undefined",
                user: "kaizensoze"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /user/memberships/orgs (getOrganizationMemberships)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/user/memberships/orgs')
            .query({ access_token: token })
            .query({  })
            .reply();
        client.orgs.getOrganizationMemberships(
            {

            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /orgs/:org/public_members (getPublicMembers)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/orgs/:org/public_members')
            .query({ access_token: token })
            .query({ org: "undefined" })
            .reply();
        client.orgs.getPublicMembers(
            {
                org: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /teams/:id (getTeam)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/teams/:id')
            .query({ access_token: token })
            .query({ id: "undefined" })
            .reply();
        client.orgs.getTeam(
            {
                id: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /teams/:id/members (getTeamMembers)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/teams/:id/members')
            .query({ access_token: token })
            .query({ id: "undefined" })
            .reply();
        client.orgs.getTeamMembers(
            {
                id: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /teams/:id/memberships/:user (getTeamMembership)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/teams/:id/memberships/:user')
            .query({ access_token: token })
            .query({ id: "undefined",
    user: "kaizensoze" })
            .reply();
        client.orgs.getTeamMembership(
            {
                id: "undefined",
                user: "kaizensoze"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /teams/:id/repos (getTeamRepos)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/teams/:id/repos')
            .query({ access_token: token })
            .query({ id: "undefined" })
            .reply();
        client.orgs.getTeamRepos(
            {
                id: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /orgs/:org/teams (getTeams)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/orgs/:org/teams')
            .query({ access_token: token })
            .query({ org: "undefined" })
            .reply();
        client.orgs.getTeams(
            {
                org: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute POST /orgs/:org/hooks/:id/pings (pingHook)",  function(next) {
        var expected = nock('https://api.github.com')
            .post('/orgs/:org/hooks/:id/pings')
            .query({ access_token: token })
            .query({ org: "undefined",
    id: "undefined" })
            .reply();
        client.orgs.pingHook(
            {
                org: "undefined",
                id: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute PUT /orgs/:org/public_members/:user (publicizeMembership)",  function(next) {
        var expected = nock('https://api.github.com')
            .put('/orgs/:org/public_members/:user')
            .query({ access_token: token })
            .query({ org: "undefined",
    user: "kaizensoze" })
            .reply();
        client.orgs.publicizeMembership(
            {
                org: "undefined",
                user: "kaizensoze"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute DELETE /orgs/:org/members/:user (removeMember)",  function(next) {
        var expected = nock('https://api.github.com')
            .delete('/orgs/:org/members/:user')
            .query({ access_token: token })
            .query({ org: "undefined",
    user: "kaizensoze" })
            .reply();
        client.orgs.removeMember(
            {
                org: "undefined",
                user: "kaizensoze"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute DELETE /orgs/:org/memberships/:user (removeOrganizationMembership)",  function(next) {
        var expected = nock('https://api.github.com')
            .delete('/orgs/:org/memberships/:user')
            .query({ access_token: token })
            .query({ org: "undefined",
    user: "kaizensoze" })
            .reply();
        client.orgs.removeOrganizationMembership(
            {
                org: "undefined",
                user: "kaizensoze"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute DELETE /teams/:id/memberships/:user (removeTeamMembership)",  function(next) {
        var expected = nock('https://api.github.com')
            .delete('/teams/:id/memberships/:user')
            .query({ access_token: token })
            .query({ id: "undefined",
    user: "kaizensoze" })
            .reply();
        client.orgs.removeTeamMembership(
            {
                id: "undefined",
                user: "kaizensoze"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute POST /orgs/:org/migrations (startMigration)",  function(next) {
        var expected = nock('https://api.github.com')
            .post('/orgs/:org/migrations')
            .query({ access_token: token })
            .query({ org: "undefined",
    repositories: "undefined" })
            .reply();
        client.orgs.startMigration(
            {
                org: "undefined",
                repositories: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute DELETE /orgs/:org/migrations/:id/repos/:repo/lock (unlockRepoLockedForMigration)",  function(next) {
        var expected = nock('https://api.github.com')
            .delete('/orgs/:org/migrations/:id/repos/:repo/lock')
            .query({ access_token: token })
            .query({ org: "undefined",
    id: "undefined",
    repo: "node-github" })
            .reply();
        client.orgs.unlockRepoLockedForMigration(
            {
                org: "undefined",
                id: "undefined",
                repo: "node-github"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute PATCH /orgs/:org (update)",  function(next) {
        var expected = nock('https://api.github.com')
            .patch('/orgs/:org')
            .query({ access_token: token })
            .query({ org: "undefined" })
            .reply();
        client.orgs.update(
            {
                org: "undefined"
            }
        );
        expected.done();
        next();
    });

});
