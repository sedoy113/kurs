/*test*/
let a = 24;
console.log('Тест пройден, переменная =  ', a);
/*end test*/
//Diplom beginning

	//Modal Press
	window.addEventListener('DOMContentLoaded', function () {

			let overlay = document.querySelector('.overlay');
			let create = document.querySelector('#popup-btn');
			let main = document.querySelector('.main');
			let custom = document.querySelector('.custom');
			let customPress = document.getElementsByClassName('custom-press');

			create.addEventListener('click', function() {

				overlay.classList.add('animated', 'fadeOut');
				setTimeout(function() {
					overlay.style.display = 'none';
				}, 1500);
				main.classList.add('animated','fadeOut');
				main.style.display = 'none';
				custom.style.display = 'flex';
				for (let i = 0; i < customPress.length; i++ ) {
				showCustomPress.call(customPress[i])
				};

			});

		function showCustomPress() {
			this.classList.add('animated','slideInUp');
			this.style.display = 'block';
		};

})