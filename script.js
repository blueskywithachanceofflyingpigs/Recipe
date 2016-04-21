$(document).ready(function() {
  console.log("Script included!");
});

$(document).ready(function(){
    $(".span_1").click(function(){
        $("div").hide(1000);
    });
    $(".span_2").click(function(){
        $("div").show(1000);
    });
});

$(document).ready(function(){
	$( "ol li" ).addClass(function( index ) {
  		return "item-" + index;
  	});	
});

$(document).ready(function() {
   $('div').mouseenter(function() {
       $(this).animate({
           height: '+=10px'
       });
   });
   $('div').mouseleave(function() {
       $(this).animate({
           height: '-=10px'
       }); 
   });
   $('div').click(function() {
       $(this).toggle(1000);
   }); 
});

$(document).ready(function(){
    $('ol').selectable();    
    
});