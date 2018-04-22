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

}

module.exports = voting;