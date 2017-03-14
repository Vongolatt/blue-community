document.documentElement.style.fontSize =document.documentElement.clientWidth/6.4+'px';
document.body.addEventListener('touchmove', function () { });
// $(function () {
// 	//输入框获取焦点时隐藏底部栏
// 	$('input').focus(function(event) {
// 		$('footer').find('nav').css('display', 'none');
// 	})
// 	.blur(function(event) {
// 		$('footer').find('nav').css('display', 'block');
// 	});
// })

$(function(){
	var year = (new Date()).getFullYear()+1;
	$('.calendar').calendar({
		limitRange:[['today',year+'0101']],
		isRange:true,
		'onSelect':function(range){
			var start_time = range[0]['year']+'-'+range[0]['month']+'-'+range[0]['day'];
			var end_time = range[1]['year']+'-'+range[1]['month']+'-'+range[1]['day'];
			$('.date').children('span').first().html(start_time);
			$('.date').children('span').last().html(end_time);
			$('.calendar').slideUp('slow');
		}
	});
	$('.date').click(function(event) {
		$('.calendar').slideToggle('slow');
	});

})

