

 $(window).on("load",function(){
 	// preloader
 	$(".preloader").fadeOut(600);

 	// home section slideshow
 	let slideIndex = $(".slide.active").index();
 	const slideLen = $(".slide").length;
 	
 	function slideShow(){
 		$(".slide").removeClass("active").eq(slideIndex)
 		.addClass("active");
 		if(slideIndex == slideLen-1){
 			slideIndex = 0;
 		}
 		else{
 			slideIndex++;
 		}
 		setTimeout(slideShow,5000);
 	}
 	slideShow();

  // audio
   $(".fa-music").click(function(){
     if($(this).hasClass("pause")){
        $("#myAudio")[0].play();
     }
     else{
       $("#myAudio")[0].pause();
     }
    $(this).toggleClass("pause");
   })
 })

 $(document).ready(function(){

 	// nav toggle
 	$(".hamburger-btn").click(function(){
 		$(".header .nav").slideToggle();
 	})
 	$(".header .nav a").click(function(){
 		if($(window).width() < 768){
 	     $(".header .nav").slideToggle();		
 		}
 	})

 	// fixed header
 	$(window).scroll(function(){
 		if($(this).scrollTop() > 100){
 			$(".header").addClass("fixed");
 		}
 		else{
 		   $(".header").removeClass("fixed");	
 		}
 	})

 	// scrollIt 
     $.scrollIt({
     	 topOffset: -50 
     }); 

 	// people filter
 	peopleFilter($(".filter-btn.active").attr("data-target"))
 	$(".filter-btn").click(function(){
 		if(!$(this).hasClass("active")){
 		  peopleFilter($(this).attr("data-target"))
 	    }
 	})
 	function peopleFilter(target){
      $(".filter-btn").removeClass("active");
      $(".filter-btn[data-target='"+target+"']").addClass("active");
      $(".people-item").hide();
      $(".people-item[data-category='"+target+"']").fadeIn();
 	}

 	// gallery popup
 	const wHeight = $(window).height();
 	$(".gallery-popup .gp-img").css("max-height",wHeight + "px");
    
    let itemIndex = 0;
    const totalGalleryItems = $(".gallery-item").length;

    $(".gallery-item").click(function(){
    	itemIndex = $(this).index();
        $(".gallery-popup").addClass("open");
        $(".gallery-popup .gp-img").hide();
         gpSlideShow();

    })
    $(".gp-controls .next").click(function(){
    	if(itemIndex == totalGalleryItems-1){
    		itemIndex = 0;
    	}
    	else{
    		itemIndex++;
    	}
    	$(".gallery-popup .gp-img").fadeOut(function(){
           gpSlideShow();    		
    	})
    })

    $(".gp-controls .prev").click(function(){
    	if(itemIndex === 0){
    		itemIndex = totalGalleryItems-1;
    	}
    	else{
    		itemIndex--;
    	}
    	$(".gallery-popup .gp-img").fadeOut(function(){
           gpSlideShow();    		
    	})
    })

    function gpSlideShow(){
      const imgSrc = $(".gallery-item").eq(itemIndex).find("img").attr("data-large");
      $(".gallery-popup .gp-img").fadeIn().attr("src",imgSrc);
      $(".gp-counter").text((itemIndex+1) +"/"+ totalGalleryItems);
    }

    // hide gallery popup
    $(".gp-close").click(function(){
    	$(".gallery-popup").removeClass("open");
    })

    //  hide gallery popup when clicked outside of gp-container
    $(".gallery-popup").click(function(event){
         if($(event.target).hasClass("open")){
            $(".gallery-popup").removeClass("open");   	
         }
    })

	//thiep popup
	$(".thiep-popup .tp-img").css("max-height",wHeight + "px");
   
	const totalThiepItems = $(".thiep-item").length;

	$(".thiep-item").click(function(){
		itemThiep = $(this).index();
		$(".thiep-popup").addClass("open");
		$(".thiep-popup .tp-img").hide();
			tpSlideShow();

	})
	$(".tp-controls .next").click(function(){
		if(itemThiep == totalThiepItems-1){
			itemThiep = 0;
		}
		else{
			itemThiep++;
		}
		$(".thiep-popup .tp-img").fadeOut(function(){
			tpSlideShow();    		
		})
	})

	$(".tp-controls .prev").click(function(){
		if(itemThiep === 0){
			itemThiep = totalThiepItems-1;
		}
		else{
			itemThiep--;
		}
		$(".thiep-popup .tp-img").fadeOut(function(){
			tpSlideShow();    		
		})
	})

	function tpSlideShow(){
		const imgSrc = $(".thiep-item").eq(itemThiep).find("img").attr("data-large");
		$(".thiep-popup .tp-img").fadeIn().attr("src",imgSrc);
		$(".tp-counter").text((itemThiep+1) +"/"+ totalThiepItems);
	  }
  
	  // hide gallery popup
	  $(".tp-close").click(function(){
		  $(".thiep-popup").removeClass("open");
	  })
  
	  //  hide gallery popup when clicked outside of gp-container
	  $(".thiep-popup").click(function(event){
		   if($(event.target).hasClass("open")){
			  $(".thiep-popup").removeClass("open");   	
		   }
	  })

	// Set the date we're counting down to
	var countDownDate = new Date("May 25, 2024 17:30").getTime();

	// Update the countdown every 1 second
	var x = setInterval(function() {

	// Get the current date and time
	var now = new Date().getTime();
		
	// Calculate the remaining time
	var distance = countDownDate - now;
		
	// Calculate days, hours, minutes, and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	// var seconds = Math.floor((distance % (1000 * 60)) / 1000);
		
	// Display the result in the element with id="countdown"
	document.getElementById("countdown").innerHTML = days + " ngày " + hours + " tiếng "
	+ minutes + " phút ";
		
	// If the countdown is finished, display some text
	if (distance < 0) {
		clearInterval(x);
		document.getElementById("countdown").innerHTML = "EXPIRED";
	}
	}, 1000);
 })



