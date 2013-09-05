var DefaultConfiguration = require('./default');

var PLOSConfiguration = function() {

};

PLOSConfiguration.Prototype = function() {

  // Resolve figure urls
  // --------
  // 
  this.resolveFigureURLs = function(state, figure) {

    var graphic = figure.querySelector("graphic");
    var url = graphic.getAttribute("xlink:href");

    url = [
      "http://www.plosone.org/article/fetchObject.action?uri=",
      url,
      "&representation=PNG_M"
    ].join('');

    return {
      url: url,
      large_url: url
    };
  };

  this.resolveFileURL = function(state, supplement) {
    return "http://mickey.com/mouse.pdf"
  };
};


PLOSConfiguration.Prototype.prototype = DefaultConfiguration.prototype;
PLOSConfiguration.prototype = new PLOSConfiguration.Prototype();
PLOSConfiguration.prototype.constructor = PLOSConfiguration;

module.exports = PLOSConfiguration;