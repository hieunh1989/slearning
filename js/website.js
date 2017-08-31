jQuery(function($){
	$('.toggle_search').click(function(){
		$('#searchForm').toggleClass('show');
	});

	$('.home_page .course .owl-carousel').owlCarousel({
	    loop:true,
	    margin:15,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	            nav:true
	        },
	        600:{
	            items:3,
	            nav:false
	        },
	        1000:{
	            items:4,
	            nav:true,
	            loop:false
	        }
	    }
	})
})