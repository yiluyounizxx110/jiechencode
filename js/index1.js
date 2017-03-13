$(function(){
	pageInit();
});

function pageInit(){
	/**banner**/
	var width = $(window).width();
	$(".carousel").width(width);
	$(".slide_img").width(width);
	
	/**slider**/
	slider.init();
	cycle_slider.init();
	$(".index_num .index_rect").mouseover(function(){
		slider.stop();
		slider.cur_index = parseInt($(this).attr('data-cur-index'));
		slider.showIndexSlider(parseInt($(this).attr('data-cur-index')));
	});
	$(".index_num .index_rect").mouseout(function(){
		slider.init();
	});
	$(".new_product_list").mouseover(function(){
		cycle_slider.stop();
	});
	$(".new_product_list").mouseout(function(){
		cycle_slider.init();
	});
}
var slider = {
	cur_index:1,
	sliderEvent:null,
	init:function(){
		var total = slider.getTotal();
		if(total <= 1){
			return false;
		}
		slider.sliderEvent = setInterval(slider.start,3000);
	},
	stop:function(){
		clearInterval(slider.sliderEvent);
	},
	start:function(){
		var index = slider.cur_index;
		var total = slider.getTotal();
		var next = index + 1;
		if(index == total){
			next = 1;
		}
		slider.showIndexSlider(next);
		slider.cur_index = next;
	},
	getTotal:function(){
		return $(".slide_continer .slide_img").length;
	},
	showIndexSlider:function(index){
		var left = $($(".slide_continer .slide_img")[0]).width() * (-1) * (index -1);
		$(".slide_continer").animate({'left':left + 'px'},400);
//		$(".slide_continer").css("left",left + 'px')
		$(".index_num .index_rect[data-cur-index='"+ index +"']").addClass('cur').siblings().removeClass('cur');
	}
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
		var total = cycle_slider.getTotal() * 118;
		var next = index + 1;
		if(index == total){
			next = 1;
		}
		cycle_slider.showIndexSlider(next);
		cycle_slider.cur_index = next;
	},
	getTotal:function(){
		return $(".new_product_list .new_product_item").length;
	},
	showIndexSlider:function(left){
//		var left = $($(".slide_continer .slide_img")[0]).width() * (-1) * (index -1);
//		$(".slide_continer").animate({'left':left + 'px'},400);
		$(".new_product_list").css("left",-left + 'px');
//		$(".index_num .index_rect[data-cur-index='"+ index +"']").addClass('cur').siblings().removeClass('cur');
	}
}
