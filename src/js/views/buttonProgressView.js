export const animateStuff = (btnVal) => {
	if(btnVal === 1){
		$('.landing__container').addClass('landing__container--fadeout');
		$('.landing__title').addClass('landing__title--fadeout');
		$('.landing__subtitle').addClass('landing__subtitle--fadeout');
		
		setTimeout(function(){
			$('.page--2').addClass('activate');				
		},7500);		
	}else if(btnVal === 2){
		$('.page--2').removeClass('activate');

		setTimeout(function(){
			$('.page--3').addClass('activate');				
		},7500);		
	}else if(btnVal === 3){
		$('.page--3').removeClass('activate');

		setTimeout(function(){
			$('.page--4').addClass('activate');				
		},9000);		
	}else if(btnVal === 4){
		$('.page--4').removeClass('activate');

		setTimeout(function(){
			$('.page--5').addClass('activate');				
		},6000-1000);		
	}else if(btnVal === 5){
		$('.page--5').removeClass('activate');
		
		setTimeout(function(){
			$('.page--6').addClass('activate');				
		},6000-1000);		
	}else if(btnVal === 6){
		$('.page--6').removeClass('activate');
		
		setTimeout(function(){
			$('.page--7').addClass('activate');				
		},7500);	
	}












	;
};