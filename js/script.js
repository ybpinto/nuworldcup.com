$(document).ready(function() {

	// Smooth scrolling code
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 600, 'swing');
	});

	// Biopics arrays
	var team = [];

	var exec = [["Radhika Kalra", "img/headshots/radhika"],
				["Adyut Khazanchi", "img/headshots/adyut"],
				["Levin Zhu", "img/headshots/levin"],
				["Sofia Rada", "img/headshots/sofiarada"],
				["Aashrey Tiku", "img/headshots/aashrey"],
				["Edwin Argueta", "img/headshots/placeholder"],
				["Milaap Mehta", "img/headshots/milaap"],
				["Mihir Swaroop", "img/headshots/mihir"],
				["Armaan Shah", "img/headshots/armaan"],
				["Ashna Mehta", "img/headshots/ashna"],				
				["Aruj Chaudhry", "img/headshots/aruj"],
				["Abhi Shekhawat", "img/headshots/placeholder"],
				["Chris Ebhogiaye", "img/headshots/placeholder"],
				["Akhil Shanishetti", "img/headshots/placeholder"],
				["Ashwin Kulkarni", "img/headshots/placeholder"],
				["Emma Lane", "img/headshots/placeholder"],
				["Shikhar Soni", "img/headshots/placeholder"],
				["Aman Parikh", "img/headshots/placeholder"],
				["Iris Pinto", "img/headshots/placeholder"],
				["Chaitra Subramaniam", "img/headshots/placeholder"],
				["Peter Beer", "img/headshots/placeholder"],
				["Samantha Cohen", "img/headshots/placeholder"],
				["Zain Syedain", "img/headshots/placeholder"],
				["Anna Kubacsek", "img/headshots/placeholder"],
				["Matthew Celentano", "img/headshots/placeholder"],
				["Kristian Farinha", "img/headshots/placeholder"],
				["David Lee", "img/headshots/placeholder"],
				["Catherine Kang", "img/headshots/placeholder"],
				["Alisha Gandhi", "img/headshots/placeholder"],
				["Justine Kim", "img/headshots/placeholder"],
				["Astrid Goh", "img/headshots/placeholder"],
				["Cameron Braverman", "img/headshots/placeholder"],
				["Ellis Yun", "img/headshots/placeholder"],
				["Ankita Chowdhry", "img/headshots/placeholder"],
				["Mustafa Alimumal", "img/headshots/placeholder"],
				["Bee Nirundonpruk", "img/headshots/placeholder"],				
				["Sofia Lopez Franco", "img/headshots/placeholder"],
				["Gabriel Rojas-Westall", "img/headshots/placeholder"],
				["Rafi Wasserman", "img/headshots/placeholder"],
				["Esteban Mercado", "img/headshots/placeholder"],
				["Jaiveer Kothari", "img/headshots/placeholder"],
				["Yoni Pinto", "img/headshots/placeholder"]];

	// Biopics addition code
	for (var i = 0; i < exec.length; i++) {
		$("#exec").append(
			"<div class=\"exec-pic-div\"> <img class=\"exec-pic-img\" src=\"" + exec[i][1] + ".jpg\"><p class=\"pic-name team-content-color\">" + exec[i][0] + "</p></div>");
	}

	for (var i = 0; i < team.length; i++) {
		$("#team-members").append("<div class=\"ipa-pic-div\"><img class=\"ipa-pic-img\" src=\"" + team[i][1] + "\"><p class=\"pic-name team-content-color\">" + ipas[i][0] + "</p></div>");
	}

});
