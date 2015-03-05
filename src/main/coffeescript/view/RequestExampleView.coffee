
class RequestExampleView extends Backbone.View

  events: {
    'click a'           : 'fillParamsWithExample'
  }

  initialize: ->

  render: ->
    template = @template()

    $(@el).html(template(@model))

    @

  template: ->
    Handlebars.templates.request_example

  fillParamsWithExample: (e) ->
    e?.preventDefault()
    $('a.btn-restore', $(@el.parentNode.parentNode)).click()

    # Check for errors
    for name, value of @model.uriParams
        $( "input[name="+name+"]" , @options.parametersView).val(value)
    
    for name, value of @model.headers
        $( "input[name="+name+"]" , @options.parametersView).val(value)

    textArea = $("textarea", @options.parametersView);
    if ( @model.body isnt 'undefined' && $.trim(textArea.val()) == '' )
        textArea.val(@model.body)