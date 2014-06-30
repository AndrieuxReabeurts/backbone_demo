$(document).ready(function(){

	var Experiment = Backbone.Model.extend({
		redClass: 'red',
		blueClass: 'blue'
	})

	var ExperimentView = Backbone.View.extend({
		el: $('body'),

		events: {
			'click button#change': 'changeClass'
		},

		initialize: function(){
			this.render();
		},

		render: function(){
			$(this.el).append("<button id='change'>Change</button>");
			$('#change').css('background-color', colorChange.blueClass);
		},

		changeClass: function(){
			console.log(colorChange.redClass)
			$('button', this.el).css('background-color', colorChange.redClass)
		}

	})

	var colorChange = new Experiment();
	var colorChangeView = new ExperimentView({model: colorChange});

});