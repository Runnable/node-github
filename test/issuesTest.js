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

describe("[issues]", function() {
    var client;
    var token = "my test token";

    beforeEach(function() {
        client = new Client();
        client.authenticate({
            type: "oauth",
            token: token
        });
    });

    it("should successfully execute POST /repos/:user/:repo/issues/:number/labels (addLabels)",  function(next) {
        var expected = nock('https://api.github.com')
            .post('/repos/:user/:repo/issues/:number/labels')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    number: "undefined",
    body: "undefined" })
            .reply();
        client.issues.addLabels(
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


    it("should successfully execute GET /repos/:user/:repo/assignees/:assignee (checkAssignee)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repos/:user/:repo/assignees/:assignee')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    assignee: "undefined" })
            .reply();
        client.issues.checkAssignee(
            {
                user: "kaizensoze",
                repo: "node-github",
                assignee: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute POST /repos/:user/:repo/issues (create)",  function(next) {
        var expected = nock('https://api.github.com')
            .post('/repos/:user/:repo/issues')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    title: "undefined" })
            .reply();
        client.issues.create(
            {
                user: "kaizensoze",
                repo: "node-github",
                title: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute POST /repos/:user/:repo/issues/:number/comments (createComment)",  function(next) {
        var expected = nock('https://api.github.com')
            .post('/repos/:user/:repo/issues/:number/comments')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    number: "undefined",
    body: "undefined" })
            .reply();
        client.issues.createComment(
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


    it("should successfully execute POST /repos/:user/:repo/labels (createLabel)",  function(next) {
        var expected = nock('https://api.github.com')
            .post('/repos/:user/:repo/labels')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    name: "undefined",
    color: "undefined" })
            .reply();
        client.issues.createLabel(
            {
                user: "kaizensoze",
                repo: "node-github",
                name: "undefined",
                color: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute POST /repos/:user/:repo/milestones (createMilestone)",  function(next) {
        var expected = nock('https://api.github.com')
            .post('/repos/:user/:repo/milestones')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    title: "undefined" })
            .reply();
        client.issues.createMilestone(
            {
                user: "kaizensoze",
                repo: "node-github",
                title: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute DELETE /repos/:user/:repo/issues/comments/:id (deleteComment)",  function(next) {
        var expected = nock('https://api.github.com')
            .delete('/repos/:user/:repo/issues/comments/:id')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    id: "undefined" })
            .reply();
        client.issues.deleteComment(
            {
                user: "kaizensoze",
                repo: "node-github",
                id: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute DELETE /repos/:user/:repo/labels/:name (deleteLabel)",  function(next) {
        var expected = nock('https://api.github.com')
            .delete('/repos/:user/:repo/labels/:name')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    name: "undefined" })
            .reply();
        client.issues.deleteLabel(
            {
                user: "kaizensoze",
                repo: "node-github",
                name: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute DELETE /repos/:user/:repo/milestones/:number (deleteMilestone)",  function(next) {
        var expected = nock('https://api.github.com')
            .delete('/repos/:user/:repo/milestones/:number')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    number: "undefined" })
            .reply();
        client.issues.deleteMilestone(
            {
                user: "kaizensoze",
                repo: "node-github",
                number: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute PATCH /repos/:user/:repo/issues/:number (edit)",  function(next) {
        var expected = nock('https://api.github.com')
            .patch('/repos/:user/:repo/issues/:number')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    number: "undefined" })
            .reply();
        client.issues.edit(
            {
                user: "kaizensoze",
                repo: "node-github",
                number: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute PATCH /repos/:user/:repo/issues/comments/:id (editComment)",  function(next) {
        var expected = nock('https://api.github.com')
            .patch('/repos/:user/:repo/issues/comments/:id')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    id: "undefined",
    body: "undefined" })
            .reply();
        client.issues.editComment(
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


    it("should successfully execute GET /repos/:user/:repo/issues/:number (get)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repos/:user/:repo/issues/:number')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    number: "undefined" })
            .reply();
        client.issues.get(
            {
                user: "kaizensoze",
                repo: "node-github",
                number: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /issues (getAll)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/issues')
            .query({ access_token: token })
            .query({  })
            .reply();
        client.issues.getAll(
            {

            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /repos/:user/:repo/assignees (getAssignees)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repos/:user/:repo/assignees')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github" })
            .reply();
        client.issues.getAssignees(
            {
                user: "kaizensoze",
                repo: "node-github"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /repos/:user/:repo/issues/comments/:id (getComment)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repos/:user/:repo/issues/comments/:id')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    id: "undefined" })
            .reply();
        client.issues.getComment(
            {
                user: "kaizensoze",
                repo: "node-github",
                id: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /repos/:user/:repo/issues/:number/comments (getComments)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repos/:user/:repo/issues/:number/comments')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    number: "undefined" })
            .reply();
        client.issues.getComments(
            {
                user: "kaizensoze",
                repo: "node-github",
                number: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /repos/:user/:repo/issues/comments (getCommentsForRepo)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repos/:user/:repo/issues/comments')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github" })
            .reply();
        client.issues.getCommentsForRepo(
            {
                user: "kaizensoze",
                repo: "node-github"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /repos/:user/:repo/issues/events/:id (getEvent)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repos/:user/:repo/issues/events/:id')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    id: "undefined" })
            .reply();
        client.issues.getEvent(
            {
                user: "kaizensoze",
                repo: "node-github",
                id: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /repos/:user/:repo/issues/:number/events (getEvents)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repos/:user/:repo/issues/:number/events')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    number: "undefined" })
            .reply();
        client.issues.getEvents(
            {
                user: "kaizensoze",
                repo: "node-github",
                number: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /repos/:user/:repo/issues/events (getEventsForRepo)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repos/:user/:repo/issues/events')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github" })
            .reply();
        client.issues.getEventsForRepo(
            {
                user: "kaizensoze",
                repo: "node-github"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /orgs/:org/issues (getForOrg)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/orgs/:org/issues')
            .query({ access_token: token })
            .query({  })
            .reply();
        client.issues.getForOrg(
            {

            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /repos/:user/:repo/issues (getForRepo)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repos/:user/:repo/issues')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github" })
            .reply();
        client.issues.getForRepo(
            {
                user: "kaizensoze",
                repo: "node-github"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /user/issues (getForUser)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/user/issues')
            .query({ access_token: token })
            .query({  })
            .reply();
        client.issues.getForUser(
            {

            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /repos/:user/:repo/issues/:number/labels (getIssueLabels)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repos/:user/:repo/issues/:number/labels')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    number: "undefined" })
            .reply();
        client.issues.getIssueLabels(
            {
                user: "kaizensoze",
                repo: "node-github",
                number: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /repos/:user/:repo/labels/:name (getLabel)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repos/:user/:repo/labels/:name')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    name: "undefined" })
            .reply();
        client.issues.getLabel(
            {
                user: "kaizensoze",
                repo: "node-github",
                name: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /repos/:user/:repo/labels (getLabels)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repos/:user/:repo/labels')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github" })
            .reply();
        client.issues.getLabels(
            {
                user: "kaizensoze",
                repo: "node-github"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /repos/:user/:repo/milestones/:number (getMilestone)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repos/:user/:repo/milestones/:number')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    number: "undefined" })
            .reply();
        client.issues.getMilestone(
            {
                user: "kaizensoze",
                repo: "node-github",
                number: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /repos/:user/:repo/milestones/:number/labels (getMilestoneLabels)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repos/:user/:repo/milestones/:number/labels')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    number: "undefined" })
            .reply();
        client.issues.getMilestoneLabels(
            {
                user: "kaizensoze",
                repo: "node-github",
                number: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /repos/:user/:repo/milestones (getMilestones)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repos/:user/:repo/milestones')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github" })
            .reply();
        client.issues.getMilestones(
            {
                user: "kaizensoze",
                repo: "node-github"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute DELETE /repos/:user/:repo/issues/:number/labels (removeAllLabels)",  function(next) {
        var expected = nock('https://api.github.com')
            .delete('/repos/:user/:repo/issues/:number/labels')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    number: "undefined" })
            .reply();
        client.issues.removeAllLabels(
            {
                user: "kaizensoze",
                repo: "node-github",
                number: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute DELETE /repos/:user/:repo/issues/:number/labels/:name (removeLabel)",  function(next) {
        var expected = nock('https://api.github.com')
            .delete('/repos/:user/:repo/issues/:number/labels/:name')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    number: "undefined",
    name: "undefined" })
            .reply();
        client.issues.removeLabel(
            {
                user: "kaizensoze",
                repo: "node-github",
                number: "undefined",
                name: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute PUT /repos/:user/:repo/issues/:number/labels (replaceAllLabels)",  function(next) {
        var expected = nock('https://api.github.com')
            .put('/repos/:user/:repo/issues/:number/labels')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    number: "undefined",
    body: "undefined" })
            .reply();
        client.issues.replaceAllLabels(
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


    it("should successfully execute PATCH /repos/:user/:repo/labels/:name (updateLabel)",  function(next) {
        var expected = nock('https://api.github.com')
            .patch('/repos/:user/:repo/labels/:name')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    name: "undefined",
    color: "undefined" })
            .reply();
        client.issues.updateLabel(
            {
                user: "kaizensoze",
                repo: "node-github",
                name: "undefined",
                color: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute PATCH /repos/:user/:repo/milestones/:number (updateMilestone)",  function(next) {
        var expected = nock('https://api.github.com')
            .patch('/repos/:user/:repo/milestones/:number')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github",
    number: "undefined",
    title: "undefined" })
            .reply();
        client.issues.updateMilestone(
            {
                user: "kaizensoze",
                repo: "node-github",
                number: "undefined",
                title: "undefined"
            }
        );
        expected.done();
        next();
    });

});
