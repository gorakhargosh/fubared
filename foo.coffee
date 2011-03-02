

$(() ->
    class ButtonView extends Backbone.View        
        id: 'foobar'
        
        events: {
            'click #whatever': 'onButtonClicked'
        }
        
        constructor: () ->
            super()
            console.log('View constructor called')
            console.log($(@el).html())
            
        onButtonClicked: () =>
            console.log('whatever clicked')
            return
            
        render: (event) =>
            console.log("something to render")
            return this

    class ApplicationController extends Backbone.Controller
        routes: {
            'help': 'help',
        }

        constructor: () ->
            super()
            console.log "ApplicationController constructor called"
            @buttonView = new ButtonView()
            return

        help: () -> 
            console.log('help called')

    new ApplicationController()
    Backbone.history.start()
    return
)
