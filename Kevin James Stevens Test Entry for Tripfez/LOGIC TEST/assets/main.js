
// LOGIC TEST
// jQuery Solution

(function($){

	$('#hotel-form').on('submit',function(){
		//VARIABLES
		let adults = ($('#adults').val() == '') ? 0 : parseInt($('#adults').val());
		let children = ($('#children').val() == '') ? 0 : parseInt($('#children').val());
		let infant = ($('#infant').val() == '') ? 0 : parseInt($('#infant').val());
		
		let adultAndChildren = adults + children;
		let adultInfantRatio = adults / infant;

		let rooms = 0;
		let rejected = 0;
		
		let msg = '';
		const sumAbove = ' Please refer to the summary above.';

		//THE RULES
		if(adults <= 0){
			msg = 'Booking rejected : We require at least 1 adult per booking.' + sumAbove;
			rejected++;
		} 
		else if(adultAndChildren > 7) {
			msg = 'Booking rejected : Guests may only be up to 7 pax(excluding infants) per booking.' + sumAbove;
			rejected++;
		}
		else if(adultInfantRatio < 1){
			msg = 'Booking rejected : The adult count must be either greater than or equal to infant count per room' + sumAbove;
			rejected++;
		}
		// if booking rules were met
		else if(rejected < 1){
			rooms = 1;
			if(adults > 3 || children > 3){
				rooms = 2;
			}
			if(adults > 6 || children > 6){
				rooms = 3;
			}
			let childText = (children > 0) ? ', ' + children + ' children' : ''; 
			let infantText = (infant > 0) ? ', ' + infant + ' infant/s' : ''; 
			msg = 'Booking approved : ' + adults + ' adults' + childText + infantText + ' can fit in ' + rooms + ' room/s. Enjoy your stay at Hotel Transylvania!';
		}

		// Display results
		$('#summary').css('display','block');
		$('#displayAdult').empty().append(`${adults} adult/s`);
		$('#displayChildren').empty().append(`${children} children`);
		$('#displayInfant').empty().append(`${infant} infant/s`);

		$('#booking-result').empty().append(`${msg}`);
	});

})(jQuery);
