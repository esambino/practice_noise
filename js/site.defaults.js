(function($){
	



    // var $topnavbar = $(".expanded"),
    //  $menubar = $(".nav"),
    //     $scrtop;
    // $(window).scroll(function() {
    //     $scrtop = $(window).scrollTop();
    //     if ($scrtop > 0) {
    //        $topnavbar.stop(true).removeClass("expanded").addClass("retracted").animate({
    // 		    top:'-125px'
    // 		  }, 300, function() {
    // 		    // Animation complete.
    //  	 });
    //        $menubar.animate({
    // 		    top:'40px'
    // 		  }, 200, function() {});
    //     } else {	
    //         $topnavbar.stop(true).removeClass("retracted").addClass("expanded").animate({
    // 		    top:'0'
    // 		  }, 300, function() {
    // 		    // Animation complete.
    //  	 });
    //         $menubar.animate({
    // 		    top:'0'
    // 		  }, 200, function() {});
    //     }
    // });


    var $scrtop;
    $(window).scroll(function() {
        $scrtop = $(window).scrollTop();
        if ($scrtop > 0) {
            $("#mainHead").stop(true).removeClass("expanded").addClass("retracted").animate({
                top:'-125px'
            }, { duration: 300, queue: false });
            $(".nav").addClass("shortnav").animate({
                top:'64px'
            }, { duration: 200, queue: false });
			 
            // $(".centeredColumn").animate({
            //       top:'200px'
            //    }, { duration: 0, queue: false });
            // $(".fullwidthColumn").animate({
            //       top:'200px'
            //    }, { duration: 0, queue: false });
            $(".noiselogo").removeClass("uncropped").addClass("cropped").animate({
                width:'60px',
                top:'123px',
                height:'55px'
            }, { duration: 0, queue: false });
        }
        else {
            $("#mainHead").stop(true).removeClass("retracted").addClass("expanded").animate({
                top:'0'
            }, { duration: 300, queue: false });
            $(".nav").removeClass("shortnav").animate({
                top:'0'
            }, { duration: 200, queue: false });
			
            // $(".centeredColumn").animate({
            //       top:'0'
            //    }, { duration: 0, queue: false });
            // $(".fullwidthColumn").animate({
            //       top:'0'
            //    }, { duration: 0, queue: false });
            $(".noiselogo").removeClass("cropped").addClass("uncropped").animate({
                width:'172px',
                top:'0',
                height: '174px'
            }, { duration: 0, queue: false });
        }
    });


    $('#Next').click(function() {
        $('#video').animate({
            marginLeft: '-=985',
        }, 500, function() {
            // Animation complete.
        });
    });

    $('#Prev').click(function() {
        $('#video').animate({
            marginLeft: '+=985',
        }, 500, function() {
            // Animation complete.
        });
    });





    $(".master").children(".sub").hide();
    $(".master").hover(function(){
        $(this).children(".sub").stop(true,true).delay(0).slideDown(300);
    },function(){
        $(this).children(".sub").stop(true,true).slideUp(0);
    });







    // // make all the sub lis display none
    // $('.sub li').css('display', 'none'); 
    // // bind event for the master li
    // $(".master").hover(function(){       
		
    // 	var btn = $(this).find('.btn.m');
    // 	btn.animate({color: "#b8a78a", backgroundColor: "#61513a"}, 300); 
		
    // 	var list = $(this).find('.sub'); 
    // 	var items = list.find('li'); 
    // 	var time = 0; 
    // 	items.each(function(){     
    // 		time+= 50;
    // 		var j = $(this);
    // 		window.setTimeout(function() {j.fadeIn(300);}, time);
    // 	});               
		
		
    // }, function(){   
    // 	$('.sub li').css('display', 'none');
    // 	var btn = $(this).find('.btn.m'); 
    // 	var retColor = "#a58a5b"
    // 	var retBGColor = "#000000"  
    // 	if(btn.hasClass("current")){
    // 		var retColor = "#ad9e85"
    // 		var retBGColor = "#453518"
    // 	}
    // 	btn.animate({color: retColor, backgroundColor: retBGColor}, 300);
    // }); 
		
		
    // main navigation level one	
    /*$(".master > .btn").hover(function(){    
		$(this).animate({color: "#b7a689", backgroundColor: "#61513a"}, 300);
	}, function(){
		var retColor = "#a58a5b"
		var retBGColor = "#000000" 
		var sub = $(this).parent().find('.sub');
		if(sub.length > 0){
			return;
		}
		if($(this).hasClass("current")){
			var retColor = "#ad9e85"
			var retBGColor = "#453518"
		}
		$(this).animate({color: retColor, backgroundColor: retBGColor}, 300);
	});*/
	     
	
    // main navigation level two	
    // $(".sub .btn").hover(function(){  
    // 	$(this).animate({color: "#b8a78a", backgroundColor: "#61513a"}, 300);
    // }, function(){
    // 	var retColor = "#A58A5B"
    // 	var retBGColor = "#3c3122"     
    // 	if($(this).hasClass("current")){
    // 		var retColor = "#ad9e85"
    // 		var retBGColor = "#453518"
    // 	}
    // 	$(this).animate({color: retColor, backgroundColor: retBGColor}, 300);
    // }); 
	
    // // tag cloud buttons
    // // categories 
    // // hover	
    // $(".tagcloud .btn").hover(function(){
    // 	$(this).animate({color: "#94856d", backgroundColor: "#3B3327"}, 300);
    // }, function(){  
    // 	var retColor = "#544E32"
    // 	var retBGColor = "#221E18"  
    // 	if($(this).hasClass("current")){
    // 		var retColor = "#94856d"
    // 		var retBGColor = "#3B3327"
    // 	}
    // 	$(this).animate({color: retColor, backgroundColor: retBGColor}, 300); 
    // });  
	
    // // Full list buttons
    // // side bar
    // $(".sideBar .linkButton .btn").hover(function(){  
    // 	$(this).animate({color: "#94856d", backgroundColor: "#3B3327"}, 300); 
    // }, function(){               
    // 	$(this).animate({color: "#544E32", backgroundColor: "#221E18"}, 300);
    // });
	
	
    // // sub navigation, 
    // // for sidebar navigation
    // // for recent work items widget.	
    // $(".subNav").find(".btn").hover(function(){ 
    // 	$(this).animate({ backgroundColor: "#221E18"}, 300);
    // }, function(){               
    // 	var retBGColor = "#000000"  
    // 	if($(this).hasClass("current")){ 
    // 		var retBGColor = "#221E18"
    // 	}
    // 	$(this).animate({ backgroundColor: retBGColor }, 300); 
    // });
		
	
    // Footer social bookmark links, hover	
    $(".socialMedia a:not(#subscribeBtn)").hover(function(){
        $(this).animate({opacity: 0.7}, 100);
    }, function(){
        $(this).animate({opacity: 1}, 100);
    });      
              
    if(navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPhone/i)){
        $('.footerMain, #mc_embed_signup').css('position', 'absolute');   
        $(window).scroll(function(){
            $('.footerMain').css('top', (window.pageYOffset + window.innerHeight - 39) + 'px');
            $('#mc_embed_signup').css('top', (window.pageYOffset + window.innerHeight - 78) + 'px');
        });                                                                           
    } 
	
    $('#subscribeBtn').hover(function(){
        $(this).animate({
            'backgroundColor': '#6b5a3c',
            'color': '#181510'
        }, 300);
    }, function (){
        if($(this).hasClass('active'))
            return true;
        $(this).animate({
            'backgroundColor': '#181510',
            'color': '#615A3A'
        }, 300);
    }); 
	
    $('#subscribeBtn').toggle(function(){
        $('#mc_embed_signup').show().animate({
            height: '39px'
        }, 500);
        $(this).addClass('active');
    }, function(){
        $('#mc_embed_signup').animate({
            height: '0px'
        }, 500, function(){ $('#mc_embed_signup').hide(); });     
        $(this).removeClass('active');
    });
	
    $('#mc_embed_signup .btn').hover(function() {
        $(this).animate({
            backgroundColor: '#6b5a3c',
            color: '#181510'
        }, 300);  
    }, function(){	
        $(this).animate({
            backgroundColor: '#21190F',
            color: '#615A3A'
        }, 300);
    });  
	
    $('#mc-embedded-close').click(function(){
        $('#mc_embed_signup').animate({
            height: '0px'
        }, 500, function(){ $('#mc_embed_signup').hide(); });     
        $('#subscribeBtn').removeClass('active').animate({
            'backgroundColor': '#181510',
            'color': '#615A3A'
        }, 300);
    });
	
})(jQuery); 