(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; }, __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  $(function() {
    var ApplicationController, ButtonView;
    ButtonView = (function() {
      __extends(ButtonView, Backbone.View);
      ButtonView.prototype.tagName = 'div';
      ButtonView.prototype.id = 'foobar';
      ButtonView.prototype.events = {
        'click #whatever': 'onButtonClicked'
      };
      function ButtonView() {
        this.render = __bind(this.render, this);;
        this.onButtonClicked = __bind(this.onButtonClicked, this);;        ButtonView.__super__.constructor.call(this);
        console.log('View constructor called');
        console.log($(this.el).html());
      }
      ButtonView.prototype.onButtonClicked = function() {
        console.log('whatever clicked');
      };
      ButtonView.prototype.render = function(event) {
        console.log("something to render");
        return this;
      };
      return ButtonView;
    })();
    ApplicationController = (function() {
      __extends(ApplicationController, Backbone.Controller);
      ApplicationController.prototype.routes = {
        'help': 'help'
      };
      function ApplicationController() {
        ApplicationController.__super__.constructor.call(this);
        console.log("ApplicationController constructor called");
        this.buttonView = new ButtonView();
        return;
      }
      ApplicationController.prototype.help = function() {
        return console.log('help called');
      };
      return ApplicationController;
    })();
    new ApplicationController();
    Backbone.history.start();
  });
}).call(this);
