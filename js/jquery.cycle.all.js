$(document).ready(function(){
	$('#shuffle').cycle({
		fx:     'shuffle',
		easing: 'easeOutBack',
		delay:  -4000
	});
});

$(document).ready(function(){
	$('#zoom').cycle({
		fx:    'zoom',
		sync:  false,
		delay: -2000
	});
});

$(document).ready(function(){
	$('#fade').cycle();
});

$(document).ready(function(){
	$("#img_cycle").cycle({
		fx:'turnDown',
		delay:-4000
	});
});

$(document).ready(function(){
	$('#up').cycle({
		fx:    'curtainX',
		sync:  false,
		delay: -2000
	});
 });

$(document).ready(function(){
	$('#right').cycle({
		fx:      'scrollRight',
		next:   '#right',
		timeout:  0,
		easing:  'easeInOutBack'
	});
});