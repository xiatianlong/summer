$(function(){
	$(".zzc").height(pageHeight());
	$(".zzc").width(pageWidth());
	$(".zzc2").height(pageHeight());
	$(".zzc2").width(pageWidth());
});
/* 当前页面高度 */
function pageHeight() {
	return document.body.scrollHeight;
}

/* 当前页面宽度 */
function pageWidth() {
	return document.body.scrollWidth;
}

function showWechat(){
	$(".loading-img").css("top",pageHeight()/2-172);
	$(".loading-img").css("left",pageWidth()/2-172);
	/** 显示loading  begin*/
	$(".zzc").show();
	$(".zzc2").show();
	$(".loading-img").show();
	$(".close-btn").show();
	/** 显示loading  end*/
}

function hideWechat(){
	$(".zzc").hide();
	$(".zzc2").hide();
	$(".loading-img").hide();
	$(".close-btn").hide();
}