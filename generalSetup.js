let pageList = ['main',
	// Cardiac Arrest EP
	'bus-bus', 'bus-cake', 'bus-food',
	// The Seaside
	'seaside-jibber', 'seaside-littleManAndAHouse', 'seaside-toGoOffAndThings', 'seaside-hopeDay', 'seaside-sparrow',
	// Songs For Ships And Irons
	'sfsai-blind',
	// Special Garage Concerts V1
	'sgc-hopeDay',
	// Rarities?
	'misc-silveryRadioSession',
];

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
