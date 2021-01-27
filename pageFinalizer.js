function addText(text) {
	let paragraph = document.createElement('p');
	paragraph.innerHTML = text;
	textArea.append(paragraph);
}

let mainH1 = document.createElement('h1');
mainH1.style = 'font-family: courier; line-height: 1;';
mainH1.innerHTML = songInfo.title;

let lineBreak = document.createElement('hr');

textArea.append(mainH1, lineBreak);

if (songInfo.navbox != undefined) {
	let navbox = document.createElement('table');
	navbox.className = "infobox";
	navbox.style = "width: 22em";
	
	let caption = document.createElement('caption');
	caption.innerHTML = songInfo.navbox.name ? songInfo.navbox.name : songInfo.title;
			
	let navbody = document.createElement('tbody');
	
	let imagetr = document.createElement('tr');
	let imagetd = document.createElement('td');
	let imgnav = document.createElement('img');
	let capdiv = document.createElement('div');
	let capa = document.createElement('span');
	
	imagetd.colSpan = "2";
	imagetd.style = "text-align: center";

	imgnav.alt = songInfo.navbox.file;
	imgnav.src = `./covers/${songInfo.navbox.file}`;
	imgnav.style = 'max-width: 300px; width: 300px;';
	
	capa.innerHTML = songInfo.navbox.caption;
	capa.style = 'font-size: 0.8em;';
	
	capdiv.append(capa);
	
	imagetd.append(imgnav, capdiv);
	
	imagetr.append(imagetd);
	
	navbody.append(imagetr);
	
	for (let k = 0; k < songInfo.navbox.info.length; k++) {
		let headingtr = document.createElement('tr');
		let headingth = document.createElement('th');
		
		headingth.colSpan = "2";
		headingth.innerHTML = songInfo.navbox.info[k].heading;
		
		headingtr.append(headingth);
		
		navbody.append(headingtr);
		
		for (let i = 0; i < songInfo.navbox.info[k].info.length; i++) {
			let navboxtr = document.createElement('tr');
			
			let navboxth = document.createElement('th');
			navboxth.scope = "row";
			navboxth.style = "max-width: 11em;";
			
			let navleftdiv = document.createElement('div');
			navleftdiv.style = "display: inline-block; padding: 0.1em 0; line-height: 1.2em;";
			navleftdiv.innerHTML = songInfo.navbox.info[k].info[i].name;


			navboxth.append(navleftdiv);

			let navboxtd = document.createElement('td');

			let navrightdiv = document.createElement('div');
			navrightdiv.className = "plainlist";

			let navrightul = document.createElement('ul');
			let navrightli = document.createElement('li');
			
			for (let j = 0; j < songInfo.navbox.info[k].info[i].info.length; j++) {
				let navrightspan = document.createElement('span');
				
				navrightspan.innerHTML = songInfo.navbox.info[k].info[i].info[j];
								
				if (j != songInfo.navbox.info[k].info[i].info.length - 1) navrightspan.innerHTML += '</br>';
				
				navrightli.append(navrightspan);
			}
			navrightul.append(navrightli);
			navrightdiv.append(navrightul);
			navboxtd.append(navrightdiv);

			navboxtr.append(navboxth, navboxtd);
						
			navbody.append(navboxtr);
		}
		
		navbox.append(caption, navbody);
	}
	
	textArea.append(navbox);
}

for (let i = 0; i < songInfo.lyrics.length; i++) {
	addText(songInfo.lyrics[i]);
}


for (let i = 0; i < bottomBoxes.length; i++) {	
	let table = bottomBoxes[i];
	
	let endTable = document.createElement('table');
	endTable.className = "navbox";
	endTable.style = "width: 95%;";
	
	let caption = document.createElement('caption');
	caption.innerHTML = table.heading;
	
	let tableBody = document.createElement('tbody');
	
	for (let i = 0; i < table.categories.length; i++) {
		let tableRow = document.createElement('tr');
		
		let tableHeader = document.createElement('th');
		tableHeader.scope = "row";
		tableHeader.style = "padding:0.25em 1em; line-height:1.5em; text-align:center; width: 1%; border: solid; border-width: 1px;"
		tableHeader.innerHTML = table.categories[i].category;
		
		let tableData = document.createElement('td');
		let innerTable = document.createElement('table');
		
		tableData.append(innerTable);
		
		let innerTableBody = document.createElement('tbody');
		
		for (let j = 0; j < table.categories[i].info.length; j++) {
			let innerTableRow = document.createElement('tr');
			
			let innerTableHeader = document.createElement('th');
			innerTableHeader.scope = "row";
			innerTableHeader.style = "padding:0.25em 1em; line-height:1.5em; text-align:center; border: solid; border-width: 1px; width: 200px; max-width: 200px;";
			innerTableHeader.innerHTML = table.categories[i].info[j].name;
			
			let innerTableData = document.createElement('td');
			
			let innerTableDiv = document.createElement('div');
			innerTableDiv.style = "text-align: left; padding-left: 8px;";
			
			for (let k = 0; k < table.categories[i].info[j].info.length; k++) {
				let innerTableSpan = document.createElement('span');
				innerTableSpan.innerHTML = table.categories[i].info[j].info[k];
				
				if (k != table.categories[i].info[j].info.length - 1) innerTableSpan.innerHTML += ' &bull; ';
				
				innerTableDiv.append(innerTableSpan);
			}
			
			innerTableData.append(innerTableDiv);
			
			innerTableRow.append(innerTableHeader, innerTableData);
			
			innerTableBody.append(innerTableRow);
		}
		
		innerTable.append(innerTableBody);
		
		tableRow.append(tableHeader, tableData);
		
		tableBody.append(tableRow);
	}
	
	endTable.append(caption, tableBody);
	
	textArea.append(endTable);
}

correctLinks();

if (songInfo.navbox) {
	console.log(songInfo.navbox.file);
	//<link rel="icon" type="image/png" href="./favicon.png">
	let favicon = document.createElement('link');
	favicon.rel = 'icon';
	favicon.type = 'image/png';
	favicon.href = `./covers/${songInfo.navbox.file}`;
	document.head.append(favicon);
}