// import Song from '../src/song.mjs'
require('../src/song.js');
//var assert = require('assert');
describe('Song', function() {
  describe('#loadTrack()', function() {
    it('should load a track', function() {
        Song.loadTrack("../samples/songs/rainingMen/Expert.json");
        chai.assert.ok(true);
    });
  });
});
