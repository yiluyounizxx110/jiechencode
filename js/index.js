$(function(){
	pageInit();
});
function pageInit(){
	var width = $(window).width();
	
	cycle_slider.init();
	$(".new_product_list").mouseover(function(){
		cycle_slider.stop();
	});
	$(".new_product_list").mouseout(function(){
		cycle_slider.init();
	});
}
var cycle_slider = {
	cur_index:0,
	sliderEvent:null,
	init:function(){
		var total = cycle_slider.getTotal();
		if(total <= 1){
			return false;
		}
		cycle_slider.sliderEvent = setInterval(cycle_slider.start,10);
	},
	stop:function(){
		clearInterval(cycle_slider.sliderEvent);
	},
	start:function(){
		var index = cycle_slider.cur_index;
		var total = cycle_slider.getTotal() * 186/2;
		var next = index + 1;
		if(index == total){
			next = 1;
		}
		cycle_slider.showIndexSlider(next);
		cycle_slider.cur_index = next;
	},
	getTotal:function(){
		return $(".new_product_list .product_item").length;
	},
	showIndexSlider:function(left){
		$(".new_product_list").css("left",-left + 'px');
	}
}