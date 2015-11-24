//弹出二维码
function createWeChat(){
	$('<div id="pop_page" style="display:none;position:fixed;top:0;right:0;bottom:0;left:0;background:transparent url(images/bg.png) 0 0 repeat;background-size:1px 1px;z-index:1000;"><img src="images/wechat.jpg" style="display:block;margin:0 auto;"></div>').appendTo('body');
	$('#pop_page').fadeIn(700);


	$('#pop_page').on('click',function(){
		$(this).fadeOut(700,function(){
			$(this).remove();
		});
	});

	fixImgMargin();
	$(window).resize(function(){
		fixImgMargin();
	});
}
function fixImgMargin(){
	var _containerHeight = parseInt($('#pop_page').height());
	var _marginTop = parseInt(_containerHeight-258)/2;
	$('#pop_page img').css({
		marginTop:_marginTop
	});
}