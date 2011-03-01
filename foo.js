(function() {
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  $(function() {
    var ApplicationController;
    ApplicationController = (function() {
      __extends(ApplicationController, Backbone.Controller);
      ApplicationController.prototype.routes = {
        'help': 'help',
        'search/:bloodType/:latitude/:longitude': "search"
      };
      function ApplicationController() {
        console.log("constructor called");
        return;
      }
      ApplicationController.prototype.help = function() {
        return console.log('help called');
      };
      ApplicationController.prototype.search = function(bloodType, latitude, longitude) {};
      return ApplicationController;
    })();
    new ApplicationController();
    Backbone.history.start();
  });
}).call(this);
