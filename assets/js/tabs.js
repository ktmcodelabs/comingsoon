var tabHolder = $("#tab-panel");
var tabNav = $(".tab-nav");

tabNav.find('li').click(function(){
	tabNav.find('li').removeClass('active');
	
	var id = $(this).data('id');
	if(!$('#tab-'+id).is(":visible")){
		$(this).addClass('active');
		$('.tab').hide(100);
	}
	$('#tab-'+id).slideToggle(200);
})