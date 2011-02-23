// ==========================================================================
// Project:   Reader.pagesController
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Reader */

/** @class

  (Document Your Controller Here)

  @extends SC.ArrayController
*/


Reader.pagesController = SC.ArrayController.create(
/** @scope Reader.pagesController.prototype */ {

  	// TODO: Add your own code here.
	 pages: ["/static/reader/en/current/resources/images/lightsaber.jpg",
			 "/static/reader/en/current/resources/images/shoe.jpg",
           	 "/static/reader/en/current/resources/images/frame.png",
			 "/static/reader/en/current/resources/images/ajile_ref.pdf",
             "/static/reader/en/current/resources/images/ajile_scrum.pdf"
			],
			
	current_index: 0,
	current_page: '/static/reader/en/current/resources/images/lightsaber.jpg', //'http://g-ecx.images-amazon.com/images/G/01/kindle/merch/gw/shasta/kindle-international-475x398._V168861771_.png',
   
	previous: function(current_index, current_page){
	//	alert('previous called');
		console.log(this.get('current_page'));
		var _current_index = this.get('current_index');
		console.log(_current_index);
		var _current_page = this.get('current_page');
		_current_page = this.get('pages')[_current_index + 1];
		this.set('current_index', (_current_index + 1));
		this.set('current_page', _current_page);
		console.log(this.get('current_page') + " " + this.get('current_index'));
			
	},
	
	next: function(current_index, current_page){
			console.log(this.get('current_page'));
			var _current_index = this.get('current_index');
			console.log(_current_index);
			var _current_page = this.get('current_page');
			_current_page = this.get('pages')[_current_index - 1];
			this.set('current_index', (_current_index - 1));
			this.set('current_page', _current_page);
			console.log(this.get('current_page') + " " + this.get('current_index'));
	},

				
		
}) ;
