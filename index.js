$(document).ready(function(){
	
	$('#search').on('click',function(){
		$('#search_here').slideToggle( "slow" );		
	});
	
	$(function() {
		var availableTags = [
		  "Sundress",
		  "Maxis",
		  "Party Dress",
		  "Sweaters",
		  "Coats",
		  "Leggings"
		];
		$( "#tags" ).autocomplete({
		  source: availableTags
		});
	}); 
	
	/*---------------selectmenu function  */ 
	
	$(function() {
		$( "#sizeshop" ).selectmenu();	 
		$( "#color" ).selectmenu();
    });
		
	/*---------------added to cart message/ saraDressCart  */
	
	$('.SaraDressCart').on('click',function(){
		$('.addedToCart').show();
		$('.saraDress').show();
	});

		
	/*---------------size guide ------------------ */
	
	$('#sizeTable table tr:nth-child(odd)').css( "background-color", "pink");
	
	/*---------------search box ------------------ */
	
	function runSearch(){
		
		//var a = [ "Sundress", "Maxis", "Party Dress", "Sweaters", "Coats", "Leggings" ];
		var result = $('#tags').val();
		
			if ( result !== "" ){
				window.location = "dress.html";
			}
			else if ( result === "" ) {
				alert("No Results Found" );
			}
		
	}
		
	$('#tags').on('keyup',function(ev){
		var ENTER_KEY = 13;
		if ( ev.keyCode == 13 ){
			runSearch();
		}
	}); 
});