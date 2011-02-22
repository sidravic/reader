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
			layout:{ top:50, bottom:50, left:50, right:50},
			backgroundColor:'lightGray',
			anchorLocation:SC.ANCHOR_CENTER,
			childViews: 'imageView'.w(),
			
			imageView: SC.ImageView.design({
				layout: {top:50, bottom:50, left:50, right:50},
				anchorLocation:SC.ANCHOR_CENTER,
				backgroundColor:'white',
     	        value: '/../agile_ref.pdf',
	            useImageCache: NO
			}),
			
	      }),

	
	bottomView: SC.ToolbarView.design({
		layout: { bottom:0, left:0, right:0, height:32},		
		anchorLocation: SC.ANCHOR_BOTTOM

		
	})	
    
  })

});

SC
