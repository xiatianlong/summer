$(function(){
	$(".zzc").height(pageHeight());
	$(".zzc").width(pageWidth());
	$(".zzc2").height(pageHeight());
	$(".zzc2").width(pageWidth());
});
/* ��ǰҳ��߶� */
function pageHeight() {
	return document.body.scrollHeight;
}

/* ��ǰҳ���� */
function pageWidth() {
	return document.body.scrollWidth;
}

function showWechat(){
	$(".loading-img").css("top",pageHeight()/2-172);
	$(".loading-img").css("left",pageWidth()/2-172);
	/** ��ʾloading  begin*/
	$(".zzc").show();
	$(".zzc2").show();
	$(".loading-img").show();
	$(".close-btn").show();
	/** ��ʾloading  end*/
}

function hideWechat(){
	$(".zzc").hide();
	$(".zzc2").hide();
	$(".loading-img").hide();
	$(".close-btn").hide();
}