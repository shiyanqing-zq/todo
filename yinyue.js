$(function(){
	var xin=$(".xin");
	var hz=$(".hz");
	var bai=$(".bai");

	
	xin.on("touchend",function(){
	

	  	xin.removeClass("xh")
	  	$(this).addClass("xh")

		
		
	})
	
	hz.on("touchend",function(){
		
		hz.removeClass("box")
	  	$(this).addClass("box")
//	  	$(".bai").show().siblings(".bai").hide();
	})
	
//hz.on("touchend","bai",function(){
//	
//		bai.removeClass("bs")
//	  	$(this).addClass("bs")	
//	})
//		
	
	
	
	
	
	
	
	
	
	
	
})
