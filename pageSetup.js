let songName = new URLSearchParams(window.location.search);
songName = songName.get('s');
if (!pageList.includes(songName)) songName = 'main';

let albumName = songName.split('-')[0] + '/';
songName = songName.split('-')[1];

console.log(albumName);

if (albumName == 'main/') {
	albumName = '';
	songName = 'main'
}

function addScript(script) {
	let pageScript = document.createElement('script');
	pageScript.async = false;
	pageScript.src = script;
	textArea.append(pageScript);
}

addScript(`./lyrics/${albumName}${songName}.js`);
addScript(`./navbox.js`);
addScript(`./pageFinalizer.js`);
