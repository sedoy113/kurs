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