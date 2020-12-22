function _pageLoad() {
	
	/*tag változóba mentése ID kapcsolat alapján*/
	const root = document.getElementById("rootDiv");
	
	/*új tag és content létrehozása és elmentése egy változóba*/
	root.insertAdjacentHTML('afterbegin', '<h2 class="second-title">3-as példák a legfontosabbakról</h2>');
	secondTitle = document.querySelector('.second-title');

	/*esemény figyelő használata*/
	secondTitle.addEventListener('click', changeTitle);

	function changeTitle() {
		secondTitle.classList.toggle('toggled-second-title');
	}

	/*tömbök és objektumok*/

	let notes = [];	
	
	notes.push({
		tag: "code",
		content: `Az, ami példa lenne`
	});


	notes.push({
		tag: "div",
		content: `lorem ipsum lorem dolore`
	});
	

	/*ciklusok*/

	for (note of notes) {
		console.log(notes);
		rootDiv.insertAdjacentHTML('afterbegin', `<${note.tag}>${note.content}</${note.tag}>`);
	}
	console.log(notes);

	hljs.initHighlightingOnLoad();

	/*document.addEventListener('DOMContentLoaded', (event) => {*/
		document.querySelectorAll().forEach((load) => {
			hljs.highlightBlock(load);
		});
	/*});*/

}

window.addEventListener('load', _pageLoad);