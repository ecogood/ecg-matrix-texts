'use strict';
var expect = require('chai').expect;
var fs = require('fs');

var indicatorsShortCodes = [
  'a1', 'b1', 'c1', 'c2', 'c3', 'c4', 'c5', 'd1', 'd2', 'd3', 'd4', 'd5',
  'e1', 'e2', 'e3', 'e4', 'e5', 'n1', 'n2', 'n3', 'n4', 'n5', 'n6', 'n7',
  'n8', 'n9', 'n10', 'n11', 'n12', 'n13', 'n14', 'n15', 'n16', 'n17'
];

/* jshint -W030 */
describe('All indicators', function() {

  var indicators = [];
  var lastIndicator = null;

  before(function() {
    var path = 'lib/4.1/de/indicators/';
    var fileNames = fs.readdirSync(path);
    fileNames.forEach(function(fileName) {
      var fileContents = fs.readFileSync(path + fileName);
      var jsonObject = JSON.parse(fileContents);
      indicators.push(jsonObject);
    });
  });

  it('should be 34', function() {
    expect(indicators.length).to.equal(34);
  });

  it('should have shortcode and shortcodeSlug', function() {
    indicators.forEach(function(indicator) {
      lastIndicator = indicator.shortcode;

      expect(indicator.shortcode).to.exist;
      expect(indicatorsShortCodes).to.contain(indicator.shortcode.toLowerCase());

      expect(indicator.shortcodeSlug).to.exist;
      expect(indicatorsShortCodes).to.contain(indicator.shortcodeSlug);
    });
  });

  it('should have points between -201 and 91', function() {
    indicators.forEach(function(indicator) {
      lastIndicator = indicator.shortcode;

      var points = indicator.points;
      expect(points).to.exist;
      expect(typeof points).to.equal('number');
      expect(points).to.be.below(91);
      expect(points).to.be.above(-201);
    });
  });

  it('should have name', function() {
    indicators.forEach(function(indicator) {
      lastIndicator = indicator.shortcode;

      expect(indicator.name).to.exist;
    });
  });

  it('should have soleProprietorship of boolean type', function() {
    indicators.forEach(function(indicator) {
      lastIndicator = indicator.shortcode;

      var soleProprietorship = indicator.soleProprietorship;
      expect(soleProprietorship).to.exist;
      expect(typeof soleProprietorship).to.equal('boolean');
    });
  });


  after(function() {
    // if there was an error, this message will show the indicator with the error
//    console.log('lastIndicator = ' + lastIndicator);
  });

});

describe('Indicator Bundle', function() {

  var indicatorBundle;

  before(function() {
    var path = 'lib/4.1/de/ecg-indicators.json';
    indicatorBundle = JSON.parse(fs.readFileSync(path));
  });

  it('should contain all indicators', function() {

    indicatorsShortCodes.forEach(function(indicatorShortCode) {
      expect(indicatorBundle[indicatorShortCode]).to.exist;
    });
  });


});