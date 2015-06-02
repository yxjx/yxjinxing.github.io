/**
 * @author apple
 */
$(function(){
	
	
	
	  
	 //主菜单切换
	 $(".header>ul li").click(function(){
	 	
	 	$(this).addClass("select");
	 	
	 	$(this).siblings().removeClass("select");
	 })

	
	
	//其他

	//banner pic width
	$(".banner img").each(function(){
		
		var maxWidth = $(window).width();
		
		var c =$(this).width(maxWidth);

	});
	$(".typebanner img").each(function(){
		
		var maxWidth = $(window).width();
		
		var c =$(this).width(maxWidth);

	});
	
	//锚点平滑过渡

	$(".yh").click(function(){
		
		$(this).parents().addClass("select");
		
		$(this).parents().siblings().removeClass("select");
		
	    var href = $(this).attr("href");
	    
	    var pos = $(href).offset().top;
	    
	    $("html,body").animate({scrollTop: pos}, 1000);
	    
	    return false;
	});
	
	$(".sx").click(function(){
		
		$(this).parents().addClass("select");
		
		$(this).parents().siblings().removeClass("select");
		
	    var href = $(this).attr("href");
	    
	    var pos = $(href).offset().top;
	    
	    $("html,body").animate({scrollTop: pos}, 1000);
	    
	    return false;
	});
	
	$(".my").click(function(){
		
		$(this).parents().addClass("select");
		
		$(this).parents().siblings().removeClass("select");
		
	    var href = $(this).attr("href");
	    
	    var pos = $(href).offset().top;
	    
	    $("html,body").animate({scrollTop: pos}, 1000);
	    
	    return false;
	});
	
	$(".yx").click(function(){
		
		$(this).parents().addClass("select");
		
		$(this).parents().siblings().removeClass("select");
		
	    var href = $(this).attr("href");
	    
	    var pos = $(href).offset().top;
	    
	    $("html,body").animate({scrollTop: pos}, 1000);
	    
	    return false;
	});
		
	$(".levelnav li").click(function(){
		
		$(this).addClass("select");
		
		$(this).siblings().removeClass("select");		
		
	})

	$("#c1").click(function(){
		
		$(".wrap.type img").attr("src","img/c1.png");
		
		$(".typebanner img").attr("src","img/banner1.jpg")
		
	})
	
	$("#c2").click(function(){
		
		$(".wrap.type img").attr("src","img/c2.png");
		
		$(".typebanner img").attr("src","img/banner2.jpg");
		
	})
	
	$("#c3").click(function(){
		
		$(".wrap.type img").attr("src","img/c3.png");
		
		$(".typebanner img").attr("src","img/banner3.jpg")
		
	})
	
	$("#c4").click(function(){
		
		$(".wrap.type img").attr("src","img/c4.png");
		
		$(".typebanner img").attr("src","img/banner4.jpg")
		
	});
	
	$(".navleft li").click(function(){
		
		$(this).addClass("select");
		
		$(this).siblings().removeClass("select");		
		
	});
	
	
})
