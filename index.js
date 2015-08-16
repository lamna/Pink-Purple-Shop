$(document).ready(function(){
	
	$('#search').on('click',function(){
		$('#search_here').show();
		
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
	
	
	/*---------------added to cart message  */
	
	$('.addCartButton').click(function(){
		$(".addedToCart").show();
	});
	
	/*---------------my cart ------------------ */
	

	
  
  
	
	
	
});