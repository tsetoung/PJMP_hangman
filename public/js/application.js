//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require underscore
//= require backbone
//= require handlebars.runtime
//= require_tree ./templates
//= require_tree ./backbone/routers
//= require_tree ./backbone/models
//= require_tree ./backbone/collections
//= require_tree ./backbone/views
//= require_tree .

$(document).ready(loadGrumblersApp);
		function loadGrumblersApp(){
			mainCollection = new GrumblersCollection();
			mainCollectionView = new GrumblersListView({collection: mainCollection})
			mainCollection.fetch();
			theForm = new FormView({collection: mainCollection});
		}