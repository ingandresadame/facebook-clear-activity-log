var param 	= window.location.href;
$(document).ready(function(){
	$('body').prepend('<button class="bye-activity-log">Delete (posts, pokes), Unlike (pages & posts)</button>');

	$('.bye-activity-log').on('click', function(){
		alert('Here we go!');
		if(param.includes('allactivity')){
			var removeReaction = $('span:contains("Remove Reaction")').closest('a');
			$.each(removeReaction, function(k, v){
				var enlace = $(v).attr('data-ajaxify-href');
				if(enlace.indexOf('/allactivity/removecontent/') >= 0){ $(v)[0].click(); }
			});

			var unlike = $('span:contains("Unlike")').closest('a');
			$.each(unlike, function(k, v){
				var enlace = $(v).attr('data-ajaxify-href');
				if(enlace.indexOf('/allactivity/removecontent/') >= 0){ $(v)[0].click(); }
			});

			var eliminar = $('span:contains("Delete")').closest('a');
			$.each(eliminar, function(k, v){
				var enlace = $(v).attr('data-ajaxify-href');
				if(enlace.indexOf('/allactivity/delete/') >= 0){ $(v)[0].click(); }
				else if(enlace.indexOf('/allactivity/removecontent/') >= 0){ $(v)[0].click(); }
			});
		}
	});

	setInterval(function(){
		var loadMoreFrom = $('div:contains("Load more from")');
		$.each(loadMoreFrom, function(k, v){ $(v)[0].click(); });
		/*var clickMonths = $('[id^="month_"] > div');
		$.each(clickMonths, function(k, v){ $(v)[0].click(); });*/
	}, 1000);
});