// ==========================================================================
// Project:   Todos - mainPage
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Todos */

// This page describes the main user interface for your application.  
Reader.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'topView1 middleView bottomView'.w(),
    
	topView1: SC.ToolbarView.design({
		layout:{ top:0, left:0, right:0, height:36},
		childViews: 'labelView'.w(),
		anchorLocation:SC.ANCHOR_TOP,
		
		labelView: SC.LabelView.design({
		        layout: { centerY: 0, height: 24, left: 8, width: 200 },
		        controlSize: SC.LARGE_CONTROL_SIZE,
		        fontWeight: SC.BOLD_WEIGHT,
		        value:   'Reader'
		      }),
	}),
	

		
		 middleView: SC.View.design({
			touchStart:function(event){
				console.log("[mouse down] " + event.pageX);
				console.log("[mouse down] " + event.screenX);
				return YES;
			},
			
			touchesDragged: function(event, touches){
				console.log("[dragged] " + event.pageX);
				console.log("[dragged] "+ event.screenX);
				console.log(this);
				this.imageView.set("screenX", event.screenX);
				this.imageView.adjust("right", event.screenX);
				
				return false;
			},
			
			touchEnd: function(event){
			//	alert('touch up');
				console.log("[up] " + event.pageX);
				console.log("[up] " + event.pageY);
				if(event.pageX < 156)
					Reader.pagesController.previous();
				if(event.pageX > 230)	
					Reader.pagesController.next();
				return false;
			},
			
			mouseDown:function(event){
			//	for(property in event){
			//		console.log(property);
			//	}
				
			console.log("[mouse down] " + event.pageX);
			console.log("[mouse down] " + event.screenX);
			return YES;	
				
			},
			
			mouseDragged: function(event){				
				console.log("[dragged] " + event.pageX);
				console.log("[dragged] "+ event.screenX);
				console.log(this);
				this.imageView.set("screenX", event.screenX);
				this.imageView.adjust("right", event.screenX);
				return false;
			},
			
			mouseUp: function(event){
			//	alert('mouse up');
				console.log("[up] " + event.pageX);
				console.log("[up] " + event.pageY);
				if(event.pageX < 156)
					Reader.pagesController.previous();
					
				if(event.pageX > 300)	
					Reader.pagesController.next();
					
				return false;
			},
			
			layout:{ top:50, bottom:50, left:50, right:50},
			backgroundColor:'lightGray',
			anchorLocation:SC.ANCHOR_CENTER,
			childViews: 'imageView addLeftButtonView addRightButtonView'.w(),
			
			imageView: SC.ImageView.design(SC.Animatable,{
				transitions : {
					left: {duration:0.5, timing: SC.Animatable.TRANSITION_EASE_IN_OUT },
					opacity: { duration:2, timing:SC.Animatable.TRANSITION_EASE_IN_OUT},
					display: 0.75					
				},
				classname: 'image_i',
				layout: {top:50, bottom:50, left:50, right:50},
				anchorLocation:SC.ANCHOR_CENTER,
				backgroundColor:'white',
     	        value: '/static/reader/en/current/resources/images/lightsaber.jpg?1298436545',
				canLoadInBackground: true,
	            useImageCache: NO
				
			}).bind('value', 'Reader.pagesController.current_page'),
			
			addLeftButtonView: SC.ButtonView.design({
					layout:{ left:40, top:500, width:100},
					title: 'Back',
					target: 'Reader.pagesController',
					action: 'Reader.pagesController.previous'					
			}),
			
			addRightButtonView:SC.ButtonView.design({
				layout: {left:490,top:500, width:100},
				title: 'Right'
			}),
			
			
	      }),

	
	bottomView: SC.ToolbarView.design({
		layout: { bottom:0, left:0, right:0, height:32},		
		anchorLocation: SC.ANCHOR_BOTTOM

		
	})	
    
  })

});

SC
; if ((typeof SC !== 'undefined') && SC && SC.scriptDidLoad) SC.scriptDidLoad('reader');