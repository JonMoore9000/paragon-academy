function getAboutPage() {
$('.about-go').on('click', function() {
	$('.title').fadeOut(800, function() {
	   $('.about').fadeIn(800);
  });
});
}

function gethomePage1() {
  $('.goHome1').on('click', function() {
  	$('.about').fadeOut(800, function() {
  	   $('.title').fadeIn(800);
     });
   });
}

function getHomePage() {
$('.goHome').on('click', function() {
	$('.coaches').fadeOut(800, function() {
	$('.title').fadeIn(800);
});
});
}

function getCoachesPage() {
$('.coach-go').on('click', function() {
	$('.title').fadeOut(800, function() {
	   $('.coaches').fadeIn(800);
  });
});
}

$(function() {
  gethomePage1();
	getAboutPage();
	getHomePage();
	getCoachesPage();
});
