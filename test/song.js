// import Song from '../src/song.mjs'
var Song = require('../src/song.js');
var assert = require('assert');
describe('Song', function() {
  describe('#loadTrack()', function() {
    it('should load a track', function() {
        new Song().loadTrack("./samples/songs/rainingMen/Expert.json");
        assert.ok(true);
    });
  });
});
