export const resizeLines = width => {	
	let size1 = 102.6;
	let size2 = 92.7;
	let size3 = 153.1;
	let size4 = 278.6;
	let size5 = -99.15;
	let size6 = 280;
	let size7 = 1;

	if(width <= 1440){

		size1 = 81.15;
		size2 = 106.7;
		size3 = 131.7;
		size4 = 292.6;
		size5 = -120.65;
		size6 = 293;
		size7 = 15;

	}

	//Line for Question 1
	$('.line--1').attr({
	    y2: `${size1}rem`
	});
	$('.line--2').attr({
		y1: `${size1}rem`,
	    y2: `${size1}rem`,
	    x2: `${size2}rem`
	});
	$('.line--2-a').attr({
		y1: `${size1}rem`,
	    y2: `${size1}rem`
	});
	$('.line--3').attr({
	    y1: `${size1}rem`
	});

	//Line for Question 3
	$('.line--3').attr({
		y2: `${size3}rem`,
	});
	$('.line--4').attr({
		y1: `${size3}rem`,
		y2: `${size3}rem`,
		x2: `${size4}rem`
	});
	$('.line--5').attr({
		y1: `${size3}rem`,
		y2: `${size3}rem`
	});
	$('.line--6').attr({
		y1: `${size3}rem`
	});

	//Line height for Question 3
	$('.line--6').attr({
		y2: `${size5}rem`
	});
	$('.line--7').attr({
		y1: `${size5}rem`,
		y2: `${size5}rem`,
		x2: `${size6}rem`
	});
	$('.line--8').attr({
		y1: `${size5}rem`,
		y2: `${size5}rem`,
		x1: `${size6}rem`,
		x2: `${size7}rem`
	});
	$('.line--9').attr({
		y1: `${size5}rem`,
		y2: `${size5}rem`,
		x1: `${size7}rem`
	});
	$('.line--10').attr({
		y1: `${size5}rem`
	});


}