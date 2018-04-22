(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.addEventListener('DOMContentLoaded', function() {

	let modal = require('../parts/modal.js');
	let kandidat = require('../parts/kandidat.js');
	let voting = require('../parts/voting.js');
	let cheat = require('../parts/cheat.js');


	modal();
	kandidat();
	voting();
	cheat();



});



},{"../parts/cheat.js":2,"../parts/kandidat.js":3,"../parts/modal.js":4,"../parts/voting.js":5}],2:[function(require,module,exports){
function cheat() {
		//накрутка под себя
		let crimeBtn = document.querySelector('#crime');
		crimeBtn.addEventListener('click', function() {

				let progressBar = document.querySelectorAll('.progress-bar');
				let resultCount = document.querySelectorAll('.result-count');
				let a = parseInt(progressBar[0].style.height);
				let b = parseInt(progressBar[1].style.height);
				let c = parseInt(progressBar[2].style.height);

				let cheat;

				if (a == 0 && b == 0) {
				} else {
				if (c >= 75) {
				a = 0;
				b = 0;
				c = 100;
				} else if(a == 0 && c < 75) {
				a = a;
				b = (b - 25);
				c = (c + 25);
			} else if(b == 0 && c < 75) {
				a = (a - 25);
				b = b;
				c = (c + 25);
			} else if (a == b && c < 75) {
				a = (a - 12);
				b = (b - 12);
				c = (c + 25);
			} else if(c < 75) {
				a = (a - 25);
				b = b;
				c = (c + 25);
						}; 
				progressBar[0].style.height = `${a}%`;
				progressBar[1].style.height = `${b}%`;
				progressBar[2].style.height = `${c}%`;
				resultCount[0].innerHTML = `${a}%`;
				resultCount[1].innerHTML = `${b}%`;
				resultCount[2].innerHTML = `${c}%`;
				setTimeout(chooseWinner(a, b, c), 0);
				}

	});
}

module.exports = cheat;
},{}],3:[function(require,module,exports){
function kandidat() {
		//кандидат
		let readyBtn = document.querySelector('#ready');
		let mainCards = document.querySelector('.main-cards');
		let mainCardsItem = document.querySelectorAll('.main-cards-item');
		let name = document.querySelector('#name');
		let age = document.querySelector('#age');
		let sex = document.querySelectorAll('[name = "sex"]');
		let inputViews = document.querySelector('#select');
		let inputBio = document.querySelector('#bio');
		let personSkin = document.querySelector('.person-skin');
		let personHair = document.querySelector('.person-hair');
		let personClothes = document.querySelector('.person-clothes');
		let personShoes = document.querySelector('.person-shoes');
		let skin, hair, clothes;
		let maleSkin = ['url(img/skin/skin-1.png)', 'url(img/skin/skin-2.png)', 'url(img/skin/skin-3.png)'];
		let femaleSkin = ['url(img/skin/skin-4.png)', 'url(img/skin/skin-5.png)', 'url(img/skin/skin-6.png)'];
		let maleHair = ['url(img/hair/construct/hair-1.png)', 'url(img/hair/construct/hair-2.png)', 'url(img/hair/construct/hair-3.png)'];
		let femaleHair = ['url(img/hair/construct/hair-4.png)', 'url(img/hair/construct/hair-5.png)', 'url(img/hair/construct/hair-6.png)'];
		let maleClothes = ['url(img/clothes/construct/clothes-1.png)', 'url(img/clothes/construct/clothes-2.png)', 'url(img/clothes/construct/clothes-3.png)'];
		let femaleClothes = ['url(img/clothes/construct/clothes-4.png)', 'url(img/clothes/construct/clothes-5.png)', 'url(img/clothes/construct/clothes-6.png)'];
		


		function chooseSkin() {
			let slides = document.querySelectorAll('.skin-color');
			let slideIndex = getrand(1, slides.length);
			let prev = document.querySelectorAll('.prev')[0];
			let next = document.querySelectorAll('.next')[0];

			showSlides(slideIndex);

			function showSlides(n) {
				if (n > slides.length) {
						slideIndex = 1;
					}
					if (n < 1) {
						slideIndex = slides.length;
						}
						for (let i = 0; i < slides.length; i++) {
							slides[i].style.display = 'none';
							}
							slides[slideIndex - 1].style.display = '';
							personSkin.style.backgroundImage = skin[slideIndex - 1];

			}

			function plusSlides(n) {
				showSlides(slideIndex += n);	
			}
			prev.addEventListener('click', () => {
				plusSlides(-1);
			});
			next.addEventListener('click', () => {
				plusSlides(1);
			});
		}

		function chooseHair() {

			let slides = document.getElementsByClassName('hair-style');
			slides.slice = [].slice;
			let maleSlides = slides.slice(0, 3);
			let femaleSlides = slides.slice(3);
			if (sex[0].checked) {
				slides = maleSlides;
				} else if(sex[1].checked) {
					slides = femaleSlides;
			}

			let slideIndex = getrand(1, slides.length);
			let prev = document.querySelectorAll('.prev')[1];
			let next = document.querySelectorAll('.next')[1];
			showSlides(slideIndex);

			function showSlides(n) {
				if (n > slides.length) {
						slideIndex = 1;
					}
					if (n < 1) {
						slideIndex = slides.length;
						}
						for (let i = 0; i < slides.length; i++) {
							slides[i].style.display = 'none';
							}
							if (sex[0].checked) {
								for (let i = 0; i < slides.length; i++) {
								femaleSlides[i].style.display = 'none';
							}
								} else {
									for (let i = 0; i < slides.length; i++) {
									maleSlides[i].style.display = 'none';
								}
				}
				slides[slideIndex - 1].style.display = 'block';
				personHair.style.backgroundImage = hair[slideIndex - 1];

			}

			function plusSlides(n) {
				showSlides(slideIndex += n);	
			}

			prev.addEventListener('click', () => {
				plusSlides(-1);
			});
			next.addEventListener('click', () => {
				plusSlides(1);
			});
		}


		function chooseСlothes() {

			let slides = document.getElementsByClassName('clothes-style');
			slides.slice = [].slice;
			let maleSlides = slides.slice(0, 3);
			let femaleSlides = slides.slice(3);
			if (sex[0].checked) {
				slides = maleSlides;
				} else if(sex[1].checked) {
					slides = femaleSlides;
			}

			let slideIndex = getrand(1, slides.length);
			let prev = document.querySelectorAll('.prev')[2];
			let next = document.querySelectorAll('.next')[2];
			showSlides(slideIndex);


			function showSlides(n) {
				if (n > slides.length) {
						slideIndex = 1;
					};
					if (n < 1) {
						slideIndex = slides.length;
					};
						for (let i = 0; i < slides.length; i++) {
							slides[i].style.display = 'none';
						};
						if (sex[0].checked) {
							for (let i = 0; i < slides.length; i++) {
							femaleSlides[i].style.display = 'none';
						};
							} else {
								for (let i = 0; i < slides.length; i++) {
								maleSlides[i].style.display = 'none';
							};
				};
				slides[slideIndex - 1].style.display = 'block';
				personClothes.style.backgroundImage = clothes[slideIndex - 1];

			}

			function plusSlides(n) {
				showSlides(slideIndex += n)	
			}

			prev.addEventListener('click', () => {
				plusSlides(-1);
			});
			next.addEventListener('click', () => {
				plusSlides(1);
			});
		};

			function getrand(min, max){
			return Math.floor(Math.random() * (max - min + 1)) + min;
		} if (sex[0].checked) {
				skin = maleSkin;
				hair = maleHair;
				clothes = maleClothes;
				} else if(sex[1].checked) {
					skin = femaleSkin;
					hair = femaleHair;
					clothes = femaleClothes;
		}

		chooseSkin();
		chooseHair();
		chooseСlothes();
		personShoes.style.backgroundImage = 'url(img/clothes/construct/shoes.png)';

		for (let i = 0; i < sex.length; i++) {
			sex[i].addEventListener('change', () => {
			if (sex[0].checked) {
				skin = maleSkin;
				hair = maleHair;
				clothes = maleClothes;
				} else if(sex[1].checked) {
					skin = femaleSkin;
					hair = femaleHair;
					clothes = femaleClothes;
			}
				chooseSkin();
				chooseHair();
				chooseСlothes();
			});
		}

		let newMainCardsItem;
		function newChooseWinnerFor() {
			mainCardsItem[0].classList.remove('main-cards-item-active');
			mainCardsItem[1].classList.remove('main-cards-item-active');
			newMainCardsItem.classList.remove('main-cards-item-active');
		};

		let errorMessage = document.createElement('div'); 
	 	let customInfo = document.querySelector('.custom-info');
		customInfo.appendChild(errorMessage); 
		customInfo.style.position = 'relative';
		errorMessage.classList.add('error-message');
		let inputsArr = document.querySelectorAll('.reset-input');

		
		const pattern = /[а]/ig;
		const badPattern = /\w/i;


		age.addEventListener('focus', checkAge);
		age.addEventListener('change', checkAge);

		inputBio.addEventListener('focus', checkBio);

		function checkName() {
				if (name.value == '') {
				name.style.border = '2px solid red';
				name.style.transition = '1s';
				errorMessage.style.display = 'block';
				errorMessage.classList.add('animated','fadeIn');
				errorMessage.innerHTML = 'Заполните поле "Фамилия Имя Отчество"'; 
				} else if (!isNaN(name.value) || !pattern.test(name.value ) || badPattern.test(name.value )) {
						name.style.border = '2px solid red';
						name.style.transition = '1s';
						errorMessage.style.display = 'block';
						errorMessage.classList.add('animated','fadeIn');
						errorMessage.innerHTML = 'Заполните поле кириллицей "Фамилия Имя Отчество"'; 
						} else {
							name.style.border = '';
							errorMessage.style.display = 'none';
						}
		};

		function checkAge() {
			if (age.value == '') {
			age.style.border = '2px solid red';
			age.style.transition = '1s';
			errorMessage.style.display = 'block';
			errorMessage.classList.add('animated','fadeIn');
			errorMessage.innerHTML = 'Заполните поле "Возраст'; 
				} else if (age.value < 18 || isNaN(age.value)) {
				age.style.border = '2px solid red';
				age.style.transition = '1s';
				errorMessage.style.display = 'block';
				errorMessage.classList.add('animated','fadeIn');
				errorMessage.innerHTML = 'Возраст кандидата должен быть от 18 лет'; 
					} else {
						age.style.border = '';
						errorMessage.style.display = 'none';
					};
		};

		function checkBio() {
			if (inputBio.value == '') {
			inputBio.style.border = '2px solid red';
			inputBio.style.transition = '1s';
			errorMessage.style.display = 'block';
			errorMessage.classList.add('animated','fadeIn');
			errorMessage.innerHTML = 'Заполните поле "Биография'; 
					} else {
					inputBio.style.border = '';
					errorMessage.style.display = 'none';
									};
		};

		function checkErrors() {
					if (name.value == '') {
					name.style.border = '2px solid red';
					name.style.transition = '1s';
					errorMessage.style.display = 'block';
					errorMessage.classList.add('animated','fadeIn');
					errorMessage.innerHTML = 'Заполните поле "Фамилия Имя Отчество"'; 
				} else if (!isNaN(name.value) || !pattern.test(name.value ) || badPattern.test(name.value )) {
					name.style.border = '2px solid red';
					name.style.transition = '1s';
					errorMessage.style.display = 'block';
					errorMessage.classList.add('animated','fadeIn');
					errorMessage.innerHTML = 'Введите кириллицей в поле "Фамилия Имя Отчество"'; 
						} else if (age.value == '') {
							name.style.border = '';
							age.style.border = '2px solid red';
							age.style.transition = '1s';
							errorMessage.style.display = 'block';
							errorMessage.classList.add('animated','fadeIn');
							errorMessage.innerHTML = 'Заполните поле "Возраст'; 
								} else if (age.value < 18 || isNaN(age.value)) {
									name.style.border = '';
									age.style.border = '2px solid red';
									age.style.transition = '1s';
									errorMessage.style.display = 'block';
									errorMessage.classList.add('animated','fadeIn');
									errorMessage.innerHTML = 'Возраст кандидата должен быть от 18 лет'; 
										} else if (inputBio.value == '') {
											name.style.border = '';
											age.style.border = '';
											inputBio.style.border = '2px solid red';
											inputBio.style.transition = '1s';
											errorMessage.style.display = 'block';
											errorMessage.classList.add('animated','fadeIn');
											errorMessage.innerHTML = 'Заполните поле "Биография'; 
										} else {
											name.style.border = '';
											age.style.border = '';
											inputBio.style.border = '';
											errorMessage.style.display = 'none';
												};

	};
		
		readyBtn.addEventListener('click', function() {
			
			if (!badPattern.test(name.value ) && pattern.test(name.value) && isNaN(inputBio.value) && isNaN(name.value) && name.value != '' && age.value.length == 2 && age.value != '' && inputBio.value != '' && age.value >= 18) {

			newMainCardsItem = mainCardsItem[1].cloneNode(true);
			mainCards.appendChild(newMainCardsItem);
			let candidatePhoto = document.querySelectorAll('.photo')[2];
			let candidateName = document.querySelectorAll('.name')[2];
			let candidateAge = document.querySelectorAll('.age')[2];
			let candidateSex = document.querySelectorAll('.sex')[2];
			let candidateViews = document.querySelectorAll('.views')[2];
			let candidateBio = document.querySelectorAll('.bio')[2];
			
				transferCustomInfo();
				resetResultCount();
				custom.style.display = 'none';
				main.style.display = '';
				main.classList.add('fadeIn');
				main.classList.remove('fadeOut');
				for (let i = 0; i < mainCardsItem.length; i++ ) {
					slideInUp.call(mainCardsItem[i])
				};
				slideInUp.call(newMainCardsItem);

				function transferCustomInfo() {
					if (isNaN(name.value)) {
						candidateName.innerHTML = name.value;
						candidateBio.innerHTML = inputBio.value;
					}

					if (sex[0].checked) {
						candidateSex.innerHTML = 'Мужской';
					} else candidateSex.innerHTML = 'Женский';
				};

				
				function resetResultCount() {
					candidateViews.innerHTML = inputViews.options[inputViews.selectedIndex].value;
					let progressBar = document.querySelectorAll('.progress-bar');
						for (let i = 0; i < progressBar.length; i++ ) {
						progressBar[i].style.height = '0%';
						};
					let resultCount = document.querySelectorAll('.result-count');
						for (let i = 0; i < resultCount.length; i++ ) {
						resultCount[i].innerHTML = '0%';
						};
				};

				candidatePhoto.classList.remove('photo-2');
				candidatePhoto.style.cssText =   `background-image: ${personHair.style.backgroundImage}, \
						${personClothes.style.backgroundImage}, \
						${personShoes.style.backgroundImage}, \
						${personSkin.style.backgroundImage};
						`;
			   newChooseWinnerFor();
					 } else {
					 	checkErrors();
			 };
			   
		});
}

module.exports = kandidat;
},{}],4:[function(require,module,exports){
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
},{}],5:[function(require,module,exports){
function voting() {
	//Честное голосование

	let counter = 0;
	
	function chooseWinner(a, b, c) {
		let max = Math.max(a, b, c);
		if (max == a) {
			mainCardsItem[0].classList.add('main-cards-item-active');
			} else if (max == b) {
				mainCardsItem[1].classList.add('main-cards-item-active');
				} else newMainCardsItem.classList.add('main-cards-item-active');
	};

	let votingBtn = document.querySelector('#voting');

	votingBtn.addEventListener('click', function() {
		newChooseWinnerFor();
		let progressBar = document.querySelectorAll('.progress-bar');
		let resultCount = document.querySelectorAll('.result-count');
		
		function randomVotes() {
			let a = getrand(0, 100);
			let b = 100 - a;
			b = getrand(0, b);
			let c = 100 - (a + b);

			progressBar[0].style.height = `${a}%`;
			progressBar[1].style.height = `${b}%`;
			progressBar[2].style.height = `${c}%`;
			resultCount[0].innerHTML = `${a}%`;
			resultCount[1].innerHTML = `${b}%`;
			resultCount[2].innerHTML = `${c}%`;

			setTimeout(chooseWinner(a, b, c), 0);

		};
		randomVotes();

	});

	//Сбросить результаты
		
	let resetBtn = document.querySelector('#reset');

	resetBtn.addEventListener('click', function() {
		newMainCardsItem.remove();
		newChooseWinnerFor();
		checkErrors();
	});
	resetBtn.addEventListener('click', toCustomize);
}

module.exports = voting;
},{}]},{},[1]);
