

$(() ->
    class ApplicationController extends Backbone.Controller
        routes: {
            'help': 'help',
            'search/:bloodType/:latitude/:longitude': "search",
        }

        constructor: () ->
            console.log "constructor called"
            return

        help: () -> 
            console.log('help called')

        search: (bloodType, latitude, longitude) ->
            return

    new ApplicationController()
    Backbone.history.start()
    return
)
