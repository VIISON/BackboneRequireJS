define([
	'underscore',
	'backbone',
	'plugin/text!templates/not-found.tmpl'
], function(_, Backbone, notFoundTemplate) {
	return Backbone.View.extend({
		/*
		 * Render the template content into a new div-element
		 */
		render: function() {
			var template = _.template(notFoundTemplate, {});
			$(this.el).html(template);

			return this;
		}
	});
});
