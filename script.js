// New Script //

// Main Angular Application
var App = angular.module("myApp", []);

// Master Angular Controller
App.controller('masterCtrl', function($scope) {



});

$(document).ready(function(){

	var topBar = $('#topbar');
	var uList = $('#top-links');
	var dropArrow = $('#drop-arrow');

	dropArrow.click(function(){

		if( uList.css('display') == 'none' ) {
			uList.show('fast');
			dropArrow.toggleClass('rotate');
		}
		else {
			uList.hide('fast');
			dropArrow.toggleClass('rotate');
		}

	});

	$(window).resize(function() {

		var cWidth = $(window).width();

		if( cWidth > 701 ) {
			if( uList.css('display') == 'none' ) {
				uList.show();
			}
    }
		else {
			if( uList.css('display') != 'none' ) {
				uList.hide();
			}
		}

	});

});
