$(function(){
	
	var _showTab = 0;
	$('#tabs').each(function(){
	
		var $tab = $(this);
 
		var $defaultPage = $('#pagelabel a', $tab).eq(_showTab).addClass('active');
		$($defaultPage.attr('href')).siblings().hide();
		$($defaultPage).css({"border-bottom": "3px solid black"});
		$('#pagelabel a', $tab).click(function() {
			var $this = $(this),
			_clickTab = $this.attr('href');
			$this.addClass('active').siblings('.active').removeClass('active');
		
			$(_clickTab).stop(false, true).fadeIn().siblings().hide();
			$this.css({"border-bottom": "3px solid black"});
			$($this.siblings()).css({"border-bottom": "3px solid white"});
			return false;
		});
		
	});
	
	var w = $("#sideContent").width();
	var imgClicked =0;
	$('#sideContent').css('height', ($(window).height() - 20) + 'px' ); //將區塊自動撐滿畫面高度
	
	$("header .photo").click(function(){
		if(imgClicked == 0){
			imgClicked = 1;
			$("#side").animate({ left:'0px' }, 600 ,'swing');
			$(".flex-container").animate({ left: '360px' }, 600 ,'swing');
		}
		else{
			imgClicked=0;
			$("#side").animate( { left:'-'+w+'px' }, 600 ,'swing');	
			$(".flex-container").animate({ left: '0px' }, 600 ,'swing');
		}
	});
	
	
	
});