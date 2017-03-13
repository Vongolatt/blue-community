window.onload = function () {
	var del = document.querySelectorAll('.delete');
	for (var i = 0; i < del.length; i++) {
		del[i].addEventListener('click',function () {
			var del_page = document.querySelector('#delete-page');
			del_page.style.display = 'block';
			document.querySelector('footer').style.display = 'none';
			//禁用触摸事件
			$('body').on('touchmove',function(event){event.preventDefault();})
			del_page.querySelector('button').addEventListener('click',function () {
				/* body... */
				del_page.style.display = 'none';
				document.querySelector('footer').style.display = 'block';
				$('body').off('touchmove');
			})
		});
	}
}