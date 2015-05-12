'use strict';

SwaggerUi.Views.RequestExampleView = Backbone.View.extend({

  events: {
    'click a'                 : 'fillParamsWithExample',
  },

  render: function(){
    $(this.el).html(Handlebars.templates.resource(this.model));
  },

  fillParamsWithExample: function(e) {
    if (e !== null) {
      e.preventDefault();
    }
    $('a.btn-restore', $(this.el.parentNode.parentNode)).click();

    for (var uriParamName in this.model.uriParams) {
      if (this.model.uriParams.hasOwnProperty(uriParamName)) {
        $('input[name='+uriParamName+']', this.options.parametersView).val(this.model.uriParams[uriParamName]);
      }
    }

    for (var headerName in this.model.headers) {
      if (this.model.headers.hasOwnProperty(headerName)) {
        $('input[name='+headerName+']', this.options.parametersView).val(this.model.headers[headerName]);
      }
    }

    var textArea = $('textarea', this.options.parametersView);
    if ((typeof this.model.body !== 'undefined') && $.trim(textArea.val()) === '' ){
      textArea.val(this.model.body);
    }
  }


});
