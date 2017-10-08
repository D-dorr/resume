// JavaScript Document

$(function(){
	//点击动画
	(function(){
		var st = $(window).scrollTop();
		$(".butn").click(function(){
			console.log(1);
			$("html,body").animate({"scrollTop":$(".box2").offset().top+"px"},200)
		})
	})();
	
	//手风琴效果
	(function(){
		$(".voice_2 ul li").each(function(){
		var fold = $(this).find(".fold");
		var unfold = $(this).find(".unfold");
		if(fold.is(":hidden")){
			$(this).width(680);
		}else{
			$(this).width(100);
		}
		})
		$(".voice_2 ul li").click(function(){
			var li_index = $(this).index();
			$(this).animate({width:680},200);
			$(this).find(".unfold").show();
			$(this).find(".fold").hide();
			$(this).siblings().animate({width:100},200);
			$(this).siblings().find(".unfold").hide();
			$(this).siblings().find(".fold").show();
		})
	})();
	
})
