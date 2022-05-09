let sellinglater = {
	name: 'Selling Later',
	description: 'Created a hi-fi prototype of a web application for a real estate business',
	url: "sellinglater.html",
	accent: '#7B9741',
	background: '#F9F9F9',
	indicator: 'sellinglater-indicator',
}

let xpresso = {
	name: 'Xpresso',
	description: 'Designed and developed a website for a concept coffee subscription company',
	url: "xpresso.html",
	accent: '#361706',
	background: '#94877E',
	second: '#361706',
	indicator: 'xpresso-indicator'
}

let detour = {
	name: 'Daily Detour',
	description: 'Created a mobile application for trip planning driven by user centered research',
	url: "detour.html",
	accent: '#01A5A6',
	background: "#BBDEF1",
	indicator: 'dailydetour-indicator'
}

let dei = {
	name: 'Dietrich DEI',
	description: 'Designed and developed a data driven dashboard display that embodied Dietrich Colleges DEI Strategic Plan',
	url: "dei.html",
	accent: '#A6192E',
	background: '#FFFFFF',
	indicator: 'dei-indicator'
}

let tartordle = {
	name: 'Tartordle',
	description: 'Developed a Carnegie Mellon version of NYTimes popular game, Wordle',
	url: "tartordle.html",
	accent: '#FFFFFF',
	background: '#C3354A',
	second: '#2D2926',
	indicator: 'tartordle-indicator'
}

let projects = [sellinglater, xpresso, detour, dei, tartordle];

window.addEventListener('scroll', function() {
	var element = document.querySelector('#executive-summary');
    var bounding = element.getBoundingClientRect();
	var elementHeight = element.offsetHeight;
	var elementWidth = element.offsetWidth;

    if (bounding.top >= -elementHeight 
        && bounding.left >= -elementWidth
        && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) + elementWidth
        && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + elementHeight) {
			document.getElementById('executive-summary-link').style.color = '#01A5A6'
			document.getElementById('executive-summary-link').style.fontWeight = '600';
    } 
	else {
		document.getElementById('executive-summary-link').style.color = '#312C30'
		document.getElementById('executive-summary-link').style.fontWeight = '300';
    }
});

window.addEventListener('scroll', function() {
	var element = document.querySelector('#background-research');
	var position = element.getBoundingClientRect();

	if(position.top >= 0 && position.bottom <= window.innerHeight) {
		document.getElementById('background-research-link').style.color = '#01A5A6';
		document.getElementById('background-research-link').style.fontWeight = '600';
	}
	else {
		document.getElementById('background-research-link').style.color = '#312C30';
		document.getElementById('background-research-link').style.fontWeight = '300';
	}
});

window.addEventListener('scroll', function() {
	var element = document.querySelector('#synthesis-ideation');
    var bounding = element.getBoundingClientRect();
	var elementHeight = element.offsetHeight;
	var elementWidth = element.offsetWidth;

    if (bounding.top >= -elementHeight 
        && bounding.left >= -elementWidth
        && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) + elementWidth
        && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + elementHeight) {
			document.getElementById('synthesis-ideation-link').style.color = '#01A5A6'
			document.getElementById('synthesis-ideation-link').style.fontWeight = '600';
    } 
	else {
		document.getElementById('synthesis-ideation-link').style.color = '#312C30'
		document.getElementById('synthesis-ideation-link').style.fontWeight = '300';
    }
});

window.addEventListener('scroll', function() {
	var element = document.querySelector('#contextual-inquiry');
    var bounding = element.getBoundingClientRect();
	var elementHeight = element.offsetHeight;
	var elementWidth = element.offsetWidth;

    if (bounding.top >= -elementHeight 
        && bounding.left >= -elementWidth
        && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) + elementWidth
        && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + elementHeight) {
			document.getElementById('contextual-inquiry-link').style.color = '#01A5A6'
			document.getElementById('contextual-inquiry-link').style.fontWeight = '600';
    } 
	else {
		document.getElementById('contextual-inquiry-link').style.color = '#312C30'
		document.getElementById('contextual-inquiry-link').style.fontWeight = '300';
    }
});

window.addEventListener('scroll', function() {
	var element = document.querySelector('#speed-dating');
	var position = element.getBoundingClientRect();

	if(position.top >= 0 && position.bottom <= window.innerHeight) {
		document.getElementById('speed-dating-link').style.color = '#01A5A6';
		document.getElementById('speed-dating-link').style.fontWeight = '600';
	}
	else {
		document.getElementById('speed-dating-link').style.color = '#312C30';
		document.getElementById('speed-dating-link').style.fontWeight = '300';
	}
});

window.addEventListener('scroll', function() {
	var element = document.querySelector('#prototying-solution');
    var bounding = element.getBoundingClientRect();
	var elementHeight = element.offsetHeight;
	var elementWidth = element.offsetWidth;

    if (bounding.top >= -elementHeight 
        && bounding.left >= -elementWidth
        && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) + elementWidth
        && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + elementHeight) {
			document.getElementById('prototying-solution-link').style.color = '#01A5A6'
			document.getElementById('prototying-solution-link').style.fontWeight = '600';
    } 
	else {
		document.getElementById('prototying-solution-link').style.color = '#312C30'
		document.getElementById('prototying-solution-link').style.fontWeight = '300';
    }
});

window.addEventListener('scroll', function() {
	var element = document.querySelector('#conclusion');
	var position = element.getBoundingClientRect();

	if(position.top >= 0 && position.bottom <= window.innerHeight) {
		document.getElementById('conclusion-link').style.color = '#01A5A6';
		document.getElementById('conclusion-link').style.fontWeight = '600';
	}
	else {
		document.getElementById('conclusion-link').style.color = '#312C30';
		document.getElementById('conclusion-link').style.fontWeight = '300';
	}
});

function loadNext() {
	window.location = 'xpresso.html';
}