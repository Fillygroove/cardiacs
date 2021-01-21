let pageList = ['main', 'toGoOffAndThingsSeaside', 'aLittleManAndAHouseSeaside', 'jibberAndTwitchSeaside', 'silveryRadioSession', 'aBusABFABOTB'];

function correctLinks() {
	let pageLinks = document.getElementsByTagName('a');
	
	for (let i = 0; i < pageLinks.length; i++) {
		let pageLinkName = pageLinks[i].href.substring(pageLinks[i].href.indexOf('=') + 1, pageLinks[i].href.length);
		if (pageLinkName.includes('#')) pageLinkName = pageLinkName.substring(0, pageLinkName.indexOf('#'));
		if (pageLinks[i].className == '') {
			if (pageList.includes(pageLinkName)) pageLinks[i].className = 'y';
			else pageLinks[i].className = 'n';
		}
	}
}

let textArea = document.createElement('div');
textArea.className = 'text-area';

let metaCss = document.createElement('link');
metaCss.rel = 'stylesheet';
metaCss.href = `index.css`;

document.head.append(metaCss);

scriptLoader = document.createElement('script');
scriptLoader.src = `./pageSetup.js`;
textArea.append(scriptLoader);

document.getElementsByTagName('body')[0].append(textArea);

