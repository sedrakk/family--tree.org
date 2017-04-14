/**
var w = jQuery(window).height();

jQuery(window).on('resize', function() {
	w = jQuery(window).height();
})
jQuery(window).on('scroll', function() {
	if(w > 634) {
		var s = jQuery(window).scrollTop(),
			stepSize = 220 / w,
			calcPos = s * stepSize,
			unsigned = calcPos - 300;
		jQuery('#Rocket').css('bottom', unsigned);
	}
}) **/

jQuery('.number').each(function() {
	var input = jQuery('input', this), val,
		step = parseInt(input.attr('step')) || 1;

	jQuery('.top', this).on('click', function() {
		val = parseInt(input.val()) || 0;
		input.val(val + step) ;
	});
	jQuery('.bottom', this).on('click', function() {
		val = parseInt(input.val()) || 0;
		input.val(val - step) ;
	});
});

function calculateData() {
	var nod = parseInt(jQuery("input[name='numberOfDevs']").val()) || 0;
	var rph = parseInt(jQuery("input[name='redeploysPerHour']").val()) || 0;
	var das = parseInt(jQuery("input[name='avgDevAnnualSalary']").val()) || 0;
	
	jQuery('#q1').text(nod * rph * das);
	jQuery('#q2').text(nod * rph * das);
	jQuery('#q3').text(nod * rph * das);
	jQuery('#q4').text(nod * rph * das);
	jQuery('#q5').text(nod * rph * das);
	jQuery('#q6').text(nod * rph * das);
	jQuery('#q7').text(nod * rph * das);
}

jQuery('.top, .bottom', '.number').on('click', function() {
	calculateData();
});
jQuery('.number input').on('keyup', function() {
	calculateData();
});

$('body > header').mousemove(function(e){
	var amountMovedX = (e.pageX / e.delegateTarget.clientWidth * 10) * -1;
	var amountMovedY = (e.pageY / e.delegateTarget.clientHeight * 10) * -1;

	$('#Paralax').css({left : amountMovedX + '%', top : amountMovedY + '%'});
});

$(".fancybox").fancybox({
	afterLoad   : function() {
		this.inner.prepend( '<h1>1. My custom title</h1>' );
		this.content = '<h1>2. My custom title</h1>' + this.content.html();
	}
});

jQuery('a[href^="#"]').on("click",function(){
	var target = jQuery(this).attr('href');
	jQuery('html, body').animate({scrollTop: jQuery(target).offset().top}, 1500);
	return false;
})
