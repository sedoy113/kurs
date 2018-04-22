function cheat() {
		//накрутка под себя
		let crimeBtn = document.querySelector('#crime');
		crimeBtn.addEventListener('click', function() {

				let progressBar = document.querySelectorAll('.progress-bar');
				let resultCount = document.querySelectorAll('.result-count');
				let a = parseInt(progressBar[0].style.height);
				let b = parseInt(progressBar[1].style.height);
				let c = parseInt(progressBar[2].style.height);

				let multiplier;

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
			} else if(b == 0.00 && c < 75) {
				a = (a - 25);
				b = b;
				c = (c + 25);
			} else if (a == b && c < 75) {
				a = (a - 12.5);
				b = (b - 12.5);
				c = (c + 25);
			} else if(c < 75) {
			let a1 = ((a * 100) / (a + b)).toFixed(1);
			let b1 = (100 - a1).toFixed(1);
				a1 = (a1 * 25 / 100).toFixed(1);
				a = (a - a1).toFixed(1);
				b1 = (25 - a1).toFixed(1);
				b = (b - b1).toFixed(1);
				c = (c + 25).toFixed(1);
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