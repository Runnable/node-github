    it("should successfully execute <%name%>",  function(next) {
        var expected = nock('https://api.github.com')
            .<%method%>(<%name2%>)
            .query({ access_token: token })
            .query(<%params%>)
            .reply();
        client.<%funcName%>(
            <%params2%>
        );
        expected.done();
        next();
    });
