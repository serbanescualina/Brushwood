	
$(document).ready(function(e){
	$(".menu").click(function(e){
    $(".mobile-menu").show();
     e.stopPropagation();
});

$(".mobile-menu").click(function(e){
    e.stopPropagation();
});

$(document).click(function(){
    $(".mobile-menu").hide();
});
	
});
	
