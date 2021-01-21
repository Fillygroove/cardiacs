let songName = new URLSearchParams(window.location.search);
songName = songName.get('l');
if (!pageList.includes(songName)) songName = 'main';

function addScript(script) {
	let pageScript = document.createElement('script');
	pageScript.async = false;
	pageScript.src = script;
	textArea.append(pageScript);
}

addScript(`./lyrics/${songName}.js`);
addScript(`./navbox.js`);
addScript(`./pageFinalizer.js`);