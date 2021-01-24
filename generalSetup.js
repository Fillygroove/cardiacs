let pageList = ['main',
	// Cardiac Arrest EP
	'bus-bus', 'bus-cake', 'bus-food',
	// Toy World
	'toy-life',
	// The Seaside
	'seaside-jibber', 'seaside-littleManAndAHouse', 'seaside-toGoOffAndThings', 'seaside-hopeDay', 'seaside-sparrow',
	// Songs For Ships And Irons
	'sfsai-blind',
	// Sing To God
	'stg-eden', 'stg-wormsHero', 'stg-sparky', 'stg-fieryGunHand', 'stg-lassie', 'stg-fairyMaryMag', 'stg-bellyeye', 'stg-horsesTail', 'stg-manhoo', 'stg-wireless', 'stg-dirtyBoy', 'stg-billion', 'stg-oddEven',
	// Special Garage Concerts vol 1
	'sgc-hopeDay',
	// Rarities
	'misc-silveryRadioSession', 'misc-piffol5', 'misc-piffol6',
	// Archives
	'archives-piffol1', 'archives-tvtv', 'archives-piffol3', 'archives-piffol4',
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
