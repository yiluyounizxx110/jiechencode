$(function(){
	init();
});
function init(){
	$(".category_list_show span").on('click',function(){
		$(this).addClass('current').siblings().removeClass('current');
		$(".current_category").text($(this).text());
	})
}
