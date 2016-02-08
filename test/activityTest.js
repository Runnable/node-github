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

describe("[activity]", function() {
    var client;
    var token = "my test token";

    beforeEach(function() {
        client = new Client();
        client.authenticate({
            type: "oauth",
            token: token
        });
    });

    it("should successfully execute GET /notifications/threads/:id/subscription (checkNotificationThreadSubscription)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/notifications/threads/:id/subscription')
            .query({ access_token: token })
            .query({ id: "undefined" })
            .reply();
        client.activity.checkNotificationThreadSubscription(
            {
                id: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /user/starred/:user/:repo (checkStarringRepo)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/user/starred/:user/:repo')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github" })
            .reply();
        client.activity.checkStarringRepo(
            {
                user: "kaizensoze",
                repo: "node-github"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute DELETE /notifications/threads/:id/subscription (deleteNotificationThreadSubscription)",  function(next) {
        var expected = nock('https://api.github.com')
            .delete('/notifications/threads/:id/subscription')
            .query({ access_token: token })
            .query({ id: "undefined" })
            .reply();
        client.activity.deleteNotificationThreadSubscription(
            {
                id: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /events (getEvents)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/events')
            .query({ access_token: token })
            .query({  })
            .reply();
        client.activity.getEvents(
            {

            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /orgs/:org/events (getEventsForOrg)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/orgs/:org/events')
            .query({ access_token: token })
            .query({ org: "undefined" })
            .reply();
        client.activity.getEventsForOrg(
            {
                org: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /repos/:user/:repo/events (getEventsForRepo)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repos/:user/:repo/events')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github" })
            .reply();
        client.activity.getEventsForRepo(
            {
                user: "kaizensoze",
                repo: "node-github"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /repos/:user/:repo/issues/events (getEventsForRepoIssues)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repos/:user/:repo/issues/events')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github" })
            .reply();
        client.activity.getEventsForRepoIssues(
            {
                user: "kaizensoze",
                repo: "node-github"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /networks/:user/:repo/events (getEventsForRepoNetwork)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/networks/:user/:repo/events')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github" })
            .reply();
        client.activity.getEventsForRepoNetwork(
            {
                user: "kaizensoze",
                repo: "node-github"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /users/:user/events (getEventsForUser)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/users/:user/events')
            .query({ access_token: token })
            .query({ user: "kaizensoze" })
            .reply();
        client.activity.getEventsForUser(
            {
                user: "kaizensoze"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /users/:user/events/orgs/:org (getEventsForUserOrg)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/users/:user/events/orgs/:org')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    org: "undefined" })
            .reply();
        client.activity.getEventsForUserOrg(
            {
                user: "kaizensoze",
                org: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /users/:user/events/public (getEventsForUserPublic)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/users/:user/events/public')
            .query({ access_token: token })
            .query({ user: "kaizensoze" })
            .reply();
        client.activity.getEventsForUserPublic(
            {
                user: "kaizensoze"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /users/:user/received_events (getEventsReceived)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/users/:user/received_events')
            .query({ access_token: token })
            .query({ user: "kaizensoze" })
            .reply();
        client.activity.getEventsReceived(
            {
                user: "kaizensoze"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /users/:user/received_events/public (getEventsReceivedPublic)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/users/:user/received_events/public')
            .query({ access_token: token })
            .query({ user: "kaizensoze" })
            .reply();
        client.activity.getEventsReceivedPublic(
            {
                user: "kaizensoze"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /feeds (getFeeds)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/feeds')
            .query({ access_token: token })
            .query({  })
            .reply();
        client.activity.getFeeds(
            {}
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /notifications/threads/:id (getNotificationThread)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/notifications/threads/:id')
            .query({ access_token: token })
            .query({ id: "undefined" })
            .reply();
        client.activity.getNotificationThread(
            {
                id: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /notifications (getNotifications)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/notifications')
            .query({ access_token: token })
            .query({  })
            .reply();
        client.activity.getNotifications(
            {

            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /repos/:user/:repo/notifications (getNotificationsForUser)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repos/:user/:repo/notifications')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github" })
            .reply();
        client.activity.getNotificationsForUser(
            {
                user: "kaizensoze",
                repo: "node-github"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /repos/:user/:repo/subscription (getRepoSubscription)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repos/:user/:repo/subscription')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github" })
            .reply();
        client.activity.getRepoSubscription(
            {
                user: "kaizensoze",
                repo: "node-github"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /repos/:user/:repo/stargazers (getStargazersForRepo)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repos/:user/:repo/stargazers')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github" })
            .reply();
        client.activity.getStargazersForRepo(
            {
                user: "kaizensoze",
                repo: "node-github"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /user/starred (getStarredRepos)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/user/starred')
            .query({ access_token: token })
            .query({  })
            .reply();
        client.activity.getStarredRepos(
            {

            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /users/:user/starred (getStarredReposForUser)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/users/:user/starred')
            .query({ access_token: token })
            .query({ user: "kaizensoze" })
            .reply();
        client.activity.getStarredReposForUser(
            {
                user: "kaizensoze"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /user/subscriptions (getWatchedRepos)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/user/subscriptions')
            .query({ access_token: token })
            .query({  })
            .reply();
        client.activity.getWatchedRepos(
            {

            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /users/:user/subscriptions (getWatchedReposForUser)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/users/:user/subscriptions')
            .query({ access_token: token })
            .query({ user: "kaizensoze" })
            .reply();
        client.activity.getWatchedReposForUser(
            {
                user: "kaizensoze"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute GET /repos/:user/:repo/subscribers (getWatchersForRepo)",  function(next) {
        var expected = nock('https://api.github.com')
            .get('/repos/:user/:repo/subscribers')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github" })
            .reply();
        client.activity.getWatchersForRepo(
            {
                user: "kaizensoze",
                repo: "node-github"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute PATCH /notifications/threads/:id (markNotificationThreadAsRead)",  function(next) {
        var expected = nock('https://api.github.com')
            .patch('/notifications/threads/:id')
            .query({ access_token: token })
            .query({ id: "undefined" })
            .reply();
        client.activity.markNotificationThreadAsRead(
            {
                id: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute PUT /notifications (markNotificationsAsRead)",  function(next) {
        var expected = nock('https://api.github.com')
            .put('/notifications')
            .query({ access_token: token })
            .query({  })
            .reply();
        client.activity.markNotificationsAsRead(
            {

            }
        );
        expected.done();
        next();
    });


    it("should successfully execute PUT /repos/:user/:repo/notifications (markNotificationsAsReadForRepo)",  function(next) {
        var expected = nock('https://api.github.com')
            .put('/repos/:user/:repo/notifications')
            .query({ access_token: token })
            .query({  })
            .reply();
        client.activity.markNotificationsAsReadForRepo(
            {

            }
        );
        expected.done();
        next();
    });


    it("should successfully execute PUT /notifications/threads/:id/subscription (setNotificationThreadSubscription)",  function(next) {
        var expected = nock('https://api.github.com')
            .put('/notifications/threads/:id/subscription')
            .query({ access_token: token })
            .query({ id: "undefined" })
            .reply();
        client.activity.setNotificationThreadSubscription(
            {
                id: "undefined"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute PUT /repos/:user/:repo/subscription (setRepoSubscription)",  function(next) {
        var expected = nock('https://api.github.com')
            .put('/repos/:user/:repo/subscription')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github" })
            .reply();
        client.activity.setRepoSubscription(
            {
                user: "kaizensoze",
                repo: "node-github"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute PUT /user/starred/:user/:repo (starRepo)",  function(next) {
        var expected = nock('https://api.github.com')
            .put('/user/starred/:user/:repo')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github" })
            .reply();
        client.activity.starRepo(
            {
                user: "kaizensoze",
                repo: "node-github"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute DELETE /user/starred/:user/:repo (unstarRepo)",  function(next) {
        var expected = nock('https://api.github.com')
            .delete('/user/starred/:user/:repo')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github" })
            .reply();
        client.activity.unstarRepo(
            {
                user: "kaizensoze",
                repo: "node-github"
            }
        );
        expected.done();
        next();
    });


    it("should successfully execute DELETE /repos/:user/:repo/subscription (unwatchRepo)",  function(next) {
        var expected = nock('https://api.github.com')
            .delete('/repos/:user/:repo/subscription')
            .query({ access_token: token })
            .query({ user: "kaizensoze",
    repo: "node-github" })
            .reply();
        client.activity.unwatchRepo(
            {
                user: "kaizensoze",
                repo: "node-github"
            }
        );
        expected.done();
        next();
    });

});
