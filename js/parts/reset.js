function reset() {
		//Сбросить результаты
		
	let resetBtn = document.querySelector('#reset');

	resetBtn.addEventListener('click', function() {
		newMainCardsItem.remove();
		newChooseWinnerFor();
		checkErrors();
	});
	resetBtn.addEventListener('click', toCustomize);
}

module.exports = reset;