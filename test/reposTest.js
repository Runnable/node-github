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

describe("[repos]", function() {
    var client;
    var token = "my test token";

    beforeEach(function() {
        client = new Client();
        client.authenticate({
            type: "oauth",
            token: token
        });
    });

    it("should successfully execute PUT /repos/:user/:repo/collaborators/:collabuser (addCollaborator)",  function(next) {
        var expected = nock('https://api.github.com')
            .put('/repos/:user/:repo/collaborators/:collabuser')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    collabuser: "undefined" })
            .reply();
        client.repos.addCollaborator(
            {
                user: "kaizensoze",
                repo: "node-github",
                collabuser: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /repos/:user/:repo/collaborators/:collabuser (checkCollaborator)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repos/:user/:repo/collaborators/:collabuser')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    collabuser: "undefined" })
            .reply();
        client.repos.checkCollaborator(
            {
                user: "kaizensoze",
                repo: "node-github",
                collabuser: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /repos/:user/:repo/compare/:base...:head (compareCommits)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repos/:user/:repo/compare/:base...:head')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    base: "undefined",
    head: "undefined" })
            .reply();
        client.repos.compareCommits(
            {
                user: "kaizensoze",
                repo: "node-github",
                base: "undefined",
                head: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute POST /user/repos (create)",  function(next) {
        var expected = nock('https://api.github.com')
            .post('/user/repos')
            .query({ access_token: token })
            .query({ name: "undefined" })
            .reply();
        client.repos.create(
            {
                name: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute POST /repos/:user/:repo/commits/:sha/comments (createCommitComment)",  function(next) {
        var expected = nock('https://api.github.com')
            .post('/repos/:user/:repo/commits/:sha/comments')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    sha: "undefined",
    body: "undefined" })
            .reply();
        client.repos.createCommitComment(
            {
                user: "kaizensoze",
                repo: "node-github",
                sha: "undefined",
                body: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute POST /repos/:user/:repo/deployments (createDeployment)",  function(next) {
        var expected = nock('https://api.github.com')
            .post('/repos/:user/:repo/deployments')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    ref: "undefined",
    task: "deploy" })
            .reply();
        client.repos.createDeployment(
            {
                user: "kaizensoze",
                repo: "node-github",
                ref: "undefined",
                task: "deploy"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute POST /repos/:user/:repo/deployments/:id/statuses (createDeploymentStatus)",  function(next) {
        var expected = nock('https://api.github.com')
            .post('/repos/:user/:repo/deployments/:id/statuses')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    id: "undefined" })
            .reply();
        client.repos.createDeploymentStatus(
            {
                user: "kaizensoze",
                repo: "node-github",
                id: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute PUT /repos/:user/:repo/contents/:path (createFile)",  function(next) {
        var expected = nock('https://api.github.com')
            .put('/repos/:user/:repo/contents/:path')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    path: "undefined",
    message: "undefined",
    content: "undefined" })
            .reply();
        client.repos.createFile(
            {
                user: "kaizensoze",
                repo: "node-github",
                path: "undefined",
                message: "undefined",
                content: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute POST /orgs/:org/repos (createForOrg)",  function(next) {
        var expected = nock('https://api.github.com')
            .post('/orgs/:org/repos')
            .query({ access_token: token })
            .query({ org: "undefined",
    name: "undefined" })
            .reply();
        client.repos.createForOrg(
            {
                org: "undefined",
                name: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute POST /repos/:user/:repo/hooks (createHook)",  function(next) {
        var expected = nock('https://api.github.com')
            .post('/repos/:user/:repo/hooks')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    name: "undefined",
    config: "undefined" })
            .reply();
        client.repos.createHook(
            {
                user: "kaizensoze",
                repo: "node-github",
                name: "undefined",
                config: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute POST /repos/:user/:repo/keys (createKey)",  function(next) {
        var expected = nock('https://api.github.com')
            .post('/repos/:user/:repo/keys')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    title: "undefined",
    key: "undefined" })
            .reply();
        client.repos.createKey(
            {
                user: "kaizensoze",
                repo: "node-github",
                title: "undefined",
                key: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute POST /repos/:user/:repo/releases (createRelease)",  function(next) {
        var expected = nock('https://api.github.com')
            .post('/repos/:user/:repo/releases')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    tag_name: "undefined" })
            .reply();
        client.repos.createRelease(
            {
                user: "kaizensoze",
                repo: "node-github",
                tag_name: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute POST /repos/:user/:repo/statuses/:sha (createStatus)",  function(next) {
        var expected = nock('https://api.github.com')
            .post('/repos/:user/:repo/statuses/:sha')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    sha: "undefined",
    state: "undefined" })
            .reply();
        client.repos.createStatus(
            {
                user: "kaizensoze",
                repo: "node-github",
                sha: "undefined",
                state: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute DELETE /repos/:user/:repo (delete)",  function(next) {
        var expected = nock('https://api.github.com')
            .delete('/repos/:user/:repo')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github" })
            .reply();
        client.repos.delete(
            {
                user: "kaizensoze",
                repo: "node-github"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute DELETE /repos/:user/:repo/releases/assets/:id (deleteAsset)",  function(next) {
        var expected = nock('https://api.github.com')
            .delete('/repos/:user/:repo/releases/assets/:id')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    id: "undefined" })
            .reply();
        client.repos.deleteAsset(
            {
                user: "kaizensoze",
                repo: "node-github",
                id: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute DELETE /repos/:user/:repo/comments/:id (deleteCommitComment)",  function(next) {
        var expected = nock('https://api.github.com')
            .delete('/repos/:user/:repo/comments/:id')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    id: "undefined" })
            .reply();
        client.repos.deleteCommitComment(
            {
                user: "kaizensoze",
                repo: "node-github",
                id: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute DELETE /repos/:user/:repo/downloads/:id (deleteDownload)",  function(next) {
        var expected = nock('https://api.github.com')
            .delete('/repos/:user/:repo/downloads/:id')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    id: "undefined" })
            .reply();
        client.repos.deleteDownload(
            {
                user: "kaizensoze",
                repo: "node-github",
                id: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute DELETE /repos/:user/:repo/contents/:path (deleteFile)",  function(next) {
        var expected = nock('https://api.github.com')
            .delete('/repos/:user/:repo/contents/:path')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    path: "undefined",
    message: "undefined",
    sha: "undefined" })
            .reply();
        client.repos.deleteFile(
            {
                user: "kaizensoze",
                repo: "node-github",
                path: "undefined",
                message: "undefined",
                sha: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute DELETE /repos/:user/:repo/hooks/:id (deleteHook)",  function(next) {
        var expected = nock('https://api.github.com')
            .delete('/repos/:user/:repo/hooks/:id')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    id: "undefined" })
            .reply();
        client.repos.deleteHook(
            {
                user: "kaizensoze",
                repo: "node-github",
                id: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute DELETE /repos/:user/:repo/keys/:id (deleteKey)",  function(next) {
        var expected = nock('https://api.github.com')
            .delete('/repos/:user/:repo/keys/:id')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    id: "undefined" })
            .reply();
        client.repos.deleteKey(
            {
                user: "kaizensoze",
                repo: "node-github",
                id: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute DELETE /repos/:user/:repo/releases/:id (deleteRelease)",  function(next) {
        var expected = nock('https://api.github.com')
            .delete('/repos/:user/:repo/releases/:id')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    id: "undefined" })
            .reply();
        client.repos.deleteRelease(
            {
                user: "kaizensoze",
                repo: "node-github",
                id: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute PATCH /repos/:user/:repo (edit)",  function(next) {
        var expected = nock('https://api.github.com')
            .patch('/repos/:user/:repo')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    name: "undefined" })
            .reply();
        client.repos.edit(
            {
                user: "kaizensoze",
                repo: "node-github",
                name: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute PATCH /repos/:user/:repo/releases/assets/:id (editAsset)",  function(next) {
        var expected = nock('https://api.github.com')
            .patch('/repos/:user/:repo/releases/assets/:id')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    id: "undefined",
    name: "undefined" })
            .reply();
        client.repos.editAsset(
            {
                user: "kaizensoze",
                repo: "node-github",
                id: "undefined",
                name: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute PATCH /repos/:user/:repo/hooks/:id (editHook)",  function(next) {
        var expected = nock('https://api.github.com')
            .patch('/repos/:user/:repo/hooks/:id')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    id: "undefined",
    name: "undefined",
    config: "undefined" })
            .reply();
        client.repos.editHook(
            {
                user: "kaizensoze",
                repo: "node-github",
                id: "undefined",
                name: "undefined",
                config: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute PATCH /repos/:user/:repo/releases/:id (editRelease)",  function(next) {
        var expected = nock('https://api.github.com')
            .patch('/repos/:user/:repo/releases/:id')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    id: "undefined",
    tag_name: "undefined" })
            .reply();
        client.repos.editRelease(
            {
                user: "kaizensoze",
                repo: "node-github",
                id: "undefined",
                tag_name: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute POST /repos/:user/:repo/forks (fork)",  function(next) {
        var expected = nock('https://api.github.com')
            .post('/repos/:user/:repo/forks')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github" })
            .reply();
        client.repos.fork(
            {
                user: "kaizensoze",
                repo: "node-github"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /repos/:user/:repo (get)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repos/:user/:repo')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github" })
            .reply();
        client.repos.get(
            {
                user: "kaizensoze",
                repo: "node-github"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /user/repos (getAll)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/user/repos')
            .query({ access_token: token })
            .query({  })
            .reply();
        client.repos.getAll(
            {

            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /repos/:user/:repo/comments (getAllCommitComments)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repos/:user/:repo/comments')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github" })
            .reply();
        client.repos.getAllCommitComments(
            {
                user: "kaizensoze",
                repo: "node-github"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /repos/:user/:repo/:archive_format/:ref (getArchiveLink)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repos/:user/:repo/:archive_format/:ref')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    archive_format: "tarball" })
            .reply();
        client.repos.getArchiveLink(
            {
                user: "kaizensoze",
                repo: "node-github",
                archive_format: "tarball"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /repos/:user/:repo/releases/assets/:id (getAsset)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repos/:user/:repo/releases/assets/:id')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    id: "undefined" })
            .reply();
        client.repos.getAsset(
            {
                user: "kaizensoze",
                repo: "node-github",
                id: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /repos/:user/:repo/branches/:branch (getBranch)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repos/:user/:repo/branches/:branch')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    branch: "undefined" })
            .reply();
        client.repos.getBranch(
            {
                user: "kaizensoze",
                repo: "node-github",
                branch: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /repos/:user/:repo/branches (getBranches)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repos/:user/:repo/branches')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github" })
            .reply();
        client.repos.getBranches(
            {
                user: "kaizensoze",
                repo: "node-github"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /repos/:user/:repo/collaborators (getCollaborators)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repos/:user/:repo/collaborators')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github" })
            .reply();
        client.repos.getCollaborators(
            {
                user: "kaizensoze",
                repo: "node-github"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /repos/:user/:repo/commits/:sha/status (getCombinedStatus)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repos/:user/:repo/commits/:sha/status')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    sha: "undefined" })
            .reply();
        client.repos.getCombinedStatus(
            {
                user: "kaizensoze",
                repo: "node-github",
                sha: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /repos/:user/:repo/commits/:sha (getCommit)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repos/:user/:repo/commits/:sha')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    sha: "undefined" })
            .reply();
        client.repos.getCommit(
            {
                user: "kaizensoze",
                repo: "node-github",
                sha: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /repos/:user/:repo/comments/:id (getCommitComment)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repos/:user/:repo/comments/:id')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    id: "undefined" })
            .reply();
        client.repos.getCommitComment(
            {
                user: "kaizensoze",
                repo: "node-github",
                id: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /repos/:user/:repo/commits/:sha/comments (getCommitComments)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repos/:user/:repo/commits/:sha/comments')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    sha: "undefined" })
            .reply();
        client.repos.getCommitComments(
            {
                user: "kaizensoze",
                repo: "node-github",
                sha: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /repos/:user/:repo/commits (getCommits)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repos/:user/:repo/commits')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github" })
            .reply();
        client.repos.getCommits(
            {
                user: "kaizensoze",
                repo: "node-github"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /repos/:user/:repo/contents/:path (getContent)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repos/:user/:repo/contents/:path')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github" })
            .reply();
        client.repos.getContent(
            {
                user: "kaizensoze",
                repo: "node-github"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /repos/:user/:repo/contributors (getContributors)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repos/:user/:repo/contributors')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github" })
            .reply();
        client.repos.getContributors(
            {
                user: "kaizensoze",
                repo: "node-github"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /repos/:user/:repo/deployments/:id/statuses (getDeploymentStatuses)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repos/:user/:repo/deployments/:id/statuses')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    id: "undefined" })
            .reply();
        client.repos.getDeploymentStatuses(
            {
                user: "kaizensoze",
                repo: "node-github",
                id: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /repos/:user/:repo/deployments (getDeployments)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repos/:user/:repo/deployments')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github" })
            .reply();
        client.repos.getDeployments(
            {
                user: "kaizensoze",
                repo: "node-github"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /repos/:user/:repo/downloads/:id (getDownload)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repos/:user/:repo/downloads/:id')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    id: "undefined" })
            .reply();
        client.repos.getDownload(
            {
                user: "kaizensoze",
                repo: "node-github",
                id: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /repos/:user/:repo/downloads (getDownloads)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repos/:user/:repo/downloads')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github" })
            .reply();
        client.repos.getDownloads(
            {
                user: "kaizensoze",
                repo: "node-github"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /orgs/:org/repos (getForOrg)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/orgs/:org/repos')
            .query({ access_token: token })
            .query({ org: "undefined" })
            .reply();
        client.repos.getForOrg(
            {
                org: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /users/:user/repos (getForUser)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/users/:user/repos')
            .query({ access_token: token })
            .query({ user: "kaizensoze" })
            .reply();
        client.repos.getForUser(
            {
                user: "kaizensoze"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /repos/:user/:repo/forks (getForks)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repos/:user/:repo/forks')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github" })
            .reply();
        client.repos.getForks(
            {
                user: "kaizensoze",
                repo: "node-github"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /repos/:user/:repo/hooks/:id (getHook)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repos/:user/:repo/hooks/:id')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    id: "undefined" })
            .reply();
        client.repos.getHook(
            {
                user: "kaizensoze",
                repo: "node-github",
                id: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /repos/:user/:repo/hooks (getHooks)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repos/:user/:repo/hooks')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github" })
            .reply();
        client.repos.getHooks(
            {
                user: "kaizensoze",
                repo: "node-github"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /repos/:user/:repo/keys/:id (getKey)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repos/:user/:repo/keys/:id')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    id: "undefined" })
            .reply();
        client.repos.getKey(
            {
                user: "kaizensoze",
                repo: "node-github",
                id: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /repos/:user/:repo/keys (getKeys)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repos/:user/:repo/keys')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github" })
            .reply();
        client.repos.getKeys(
            {
                user: "kaizensoze",
                repo: "node-github"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /repos/:user/:repo/languages (getLanguages)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repos/:user/:repo/languages')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github" })
            .reply();
        client.repos.getLanguages(
            {
                user: "kaizensoze",
                repo: "node-github"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /repos/:user/:repo/pages/builds/latest (getLatestPagesBuild)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repos/:user/:repo/pages/builds/latest')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github" })
            .reply();
        client.repos.getLatestPagesBuild(
            {
                user: "kaizensoze",
                repo: "node-github"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /repos/:user/:repo/releases/latest (getLatestRelease)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repos/:user/:repo/releases/latest')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github" })
            .reply();
        client.repos.getLatestRelease(
            {
                user: "kaizensoze",
                repo: "node-github"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /repos/:user/:repo/pages (getPages)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repos/:user/:repo/pages')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github" })
            .reply();
        client.repos.getPages(
            {
                user: "kaizensoze",
                repo: "node-github"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /repos/:user/:repo/pages/builds (getPagesBuilds)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repos/:user/:repo/pages/builds')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github" })
            .reply();
        client.repos.getPagesBuilds(
            {
                user: "kaizensoze",
                repo: "node-github"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /repositories (getPublic)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repositories')
            .query({ access_token: token })
            .query({ org: "undefined" })
            .reply();
        client.repos.getPublic(
            {
                org: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /repos/:user/:repo/readme (getReadme)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repos/:user/:repo/readme')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github" })
            .reply();
        client.repos.getReadme(
            {
                user: "kaizensoze",
                repo: "node-github"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /repos/:user/:repo/releases/:id (getRelease)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repos/:user/:repo/releases/:id')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    id: "undefined" })
            .reply();
        client.repos.getRelease(
            {
                user: "kaizensoze",
                repo: "node-github",
                id: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /repos/:user/:repo/releases/tags/:tag (getReleaseByTag)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repos/:user/:repo/releases/tags/:tag')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    tag: "undefined" })
            .reply();
        client.repos.getReleaseByTag(
            {
                user: "kaizensoze",
                repo: "node-github",
                tag: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /repos/:user/:repo/releases (getReleases)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repos/:user/:repo/releases')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github" })
            .reply();
        client.repos.getReleases(
            {
                user: "kaizensoze",
                repo: "node-github"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /repos/:user/:repo/stats/code_frequency (getStatsCodeFrequency)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repos/:user/:repo/stats/code_frequency')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github" })
            .reply();
        client.repos.getStatsCodeFrequency(
            {
                user: "kaizensoze",
                repo: "node-github"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /repos/:user/:repo/stats/commit_activity (getStatsCommitActivity)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repos/:user/:repo/stats/commit_activity')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github" })
            .reply();
        client.repos.getStatsCommitActivity(
            {
                user: "kaizensoze",
                repo: "node-github"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /repos/:user/:repo/stats/contributors (getStatsContributors)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repos/:user/:repo/stats/contributors')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github" })
            .reply();
        client.repos.getStatsContributors(
            {
                user: "kaizensoze",
                repo: "node-github"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /repos/:user/:repo/stats/participation (getStatsParticipation)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repos/:user/:repo/stats/participation')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github" })
            .reply();
        client.repos.getStatsParticipation(
            {
                user: "kaizensoze",
                repo: "node-github"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /repos/:user/:repo/stats/punch_card (getStatsPunchCard)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repos/:user/:repo/stats/punch_card')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github" })
            .reply();
        client.repos.getStatsPunchCard(
            {
                user: "kaizensoze",
                repo: "node-github"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /repos/:user/:repo/commits/:sha/statuses (getStatuses)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repos/:user/:repo/commits/:sha/statuses')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    sha: "undefined" })
            .reply();
        client.repos.getStatuses(
            {
                user: "kaizensoze",
                repo: "node-github",
                sha: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /repos/:user/:repo/tags (getTags)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repos/:user/:repo/tags')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github" })
            .reply();
        client.repos.getTags(
            {
                user: "kaizensoze",
                repo: "node-github"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /repos/:user/:repo/teams (getTeams)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repos/:user/:repo/teams')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github" })
            .reply();
        client.repos.getTeams(
            {
                user: "kaizensoze",
                repo: "node-github"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /repos/:user/:repo/releases/:id/assets (listAssets)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repos/:user/:repo/releases/:id/assets')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    id: "undefined" })
            .reply();
        client.repos.listAssets(
            {
                user: "kaizensoze",
                repo: "node-github",
                id: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute POST /repos/:user/:repo/merges (merge)",  function(next) {
        var expected = nock('https://api.github.com')
            .post('/repos/:user/:repo/merges')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    base: "undefined",
    head: "undefined" })
            .reply();
        client.repos.merge(
            {
                user: "kaizensoze",
                repo: "node-github",
                base: "undefined",
                head: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /repositories/:id (one)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repositories/:id')
            .query({ access_token: token })
            .query({ id: "undefined" })
            .reply();
        client.repos.one(
            {
                id: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute POST /repos/:user/:repo/hooks/:id/pings (pingHook)",  function(next) {
        var expected = nock('https://api.github.com')
            .post('/repos/:user/:repo/hooks/:id/pings')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    id: "undefined" })
            .reply();
        client.repos.pingHook(
            {
                user: "kaizensoze",
                repo: "node-github",
                id: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute DELETE /repos/:user/:repo/collaborators/:collabuser (removeCollaborator)",  function(next) {
        var expected = nock('https://api.github.com')
            .delete('/repos/:user/:repo/collaborators/:collabuser')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    collabuser: "undefined" })
            .reply();
        client.repos.removeCollaborator(
            {
                user: "kaizensoze",
                repo: "node-github",
                collabuser: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute POST /repos/:user/:repo/hooks/:id/test (testHook)",  function(next) {
        var expected = nock('https://api.github.com')
            .post('/repos/:user/:repo/hooks/:id/test')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    id: "undefined" })
            .reply();
        client.repos.testHook(
            {
                user: "kaizensoze",
                repo: "node-github",
                id: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute PATCH /repos/:user/:repo/comments/:id (updateCommitComment)",  function(next) {
        var expected = nock('https://api.github.com')
            .patch('/repos/:user/:repo/comments/:id')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    id: "undefined",
    body: "undefined" })
            .reply();
        client.repos.updateCommitComment(
            {
                user: "kaizensoze",
                repo: "node-github",
                id: "undefined",
                body: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute PUT /repos/:user/:repo/contents/:path (updateFile)",  function(next) {
        var expected = nock('https://api.github.com')
            .put('/repos/:user/:repo/contents/:path')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    path: "undefined",
    message: "undefined",
    content: "undefined",
    sha: "undefined" })
            .reply();
        client.repos.updateFile(
            {
                user: "kaizensoze",
                repo: "node-github",
                path: "undefined",
                message: "undefined",
                content: "undefined",
                sha: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute POST /repos/:user/:repo/releases/:id/assets (uploadAsset)",  function(next) {
        var expected = nock('https://api.github.com')
            .post('/repos/:user/:repo/releases/:id/assets')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    id: "undefined",
    name: "undefined" })
            .reply();
        client.repos.uploadAsset(
            {
                user: "kaizensoze",
                repo: "node-github",
                id: "undefined",
                name: "undefined"
            }
        );
        expected.done();
        next();
    });

});
