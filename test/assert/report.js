'use strict';
var fs = require('fs');
var chai = require('chai');
chai.use(require('chai-fs'));
var expect = chai.expect;

module.exports = {

    assert: function(htmlFile) {
        var jsonFile = htmlFile + '.json';

        function assertJsonContents() {
            var jsonOutput = require('../../' + jsonFile);
            var jsonOutputStringify = JSON.stringify(jsonOutput);
            expect(jsonOutputStringify).to.contain('mime_type":"image/png"', 'screenshot was not attached to report');
            expect(jsonOutputStringify).to.contain('mime_type":"text/plain"', 'test data was not attached to report');
        }

        expect(jsonFile).to.be.a.file('expected a file to be Json').with.json;
        expect(htmlFile).to.be.a.path('HTML report was not created');

        return assertJsonContents();
    }
};