function modal() {
	//Модальное окно
		let overlay = document.querySelector('.overlay');
		let create = document.querySelector('#popup-btn');
		let main = document.querySelector('.main');
		let custom = document.querySelector('.custom');
		let customTools = document.getElementsByClassName('custom-press');

		function toCustomize() {
			overlay.classList.add('animated', 'fadeOut');
			setTimeout(function() {
				overlay.style.display = 'none';
			}, 1500);
				main.classList.add('animated','fadeOut');
				main.style.display = 'none';
				custom.style.display = 'flex';
			for (let i = 0; i < customTools.length; i++ ) {
			slideInUp.call(customTools[i]);
			}

		}

		create.addEventListener('click', toCustomize);

	function slideInUp() {
		this.classList.add('animated','slideInUp');
		this.style.display = 'block';
	}

}

module.exports = modal;