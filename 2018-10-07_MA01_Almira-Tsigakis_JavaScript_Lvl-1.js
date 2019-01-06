// JavaScript Document



// Question 01
var myColor = "orange";
if ( myColor === "orange" ) {
	console.log( "The color is orange" );
} else {
	console.log( "The color is not orange, try again" );
}


// Question 02
var months = "December";
var text;

switch ( months ) {
	case "January":
		text = "31 days";
		break;
	case "February":
		text = "28 days";
		break;
	case "March":
		text = "31 days";
		break;
	case "April":
		text = "30 days";
		break;
	case "May":
		text = "31 days";
		break;
	case "June":
		text = "30 days";
		break;
	case "July":
		text = "31 days";
		break;
	case "August":
		text = "30 days";
		break;
	case "September":
		text = "31 days";
		break;
	case "October":
		text = "30 days";
		break;
	case "November":
		text = "31 days";
		break;
	case "December":
		text = "30 days";
		break;
	default:
		text = "Are you a time traveler?";
		break;
}
console.log( text.months );




// Question 03 & 04 
var frontend = [ {
	personName: 'Laura',
	age: '24',
	hobbies: 'Dancing'
}, {
	personName: 'Tom',
	age: '55',
	hobbies: 'Cooking'
}, {
	personName: 'Garder',
	age: '18',
	hobbies: 'Science'
} ];

for ( var stuff of frontend ) {
	console.log( stuff.hobbies );
}




// Question 05
var run;
for ( run = 0; run < 10; run++ ) {
	console.log( 'Is this correct?' );
}


// Question 06
try{
   console.log(myFail);
}

catch(error){
   console.log(error);
}

finally{
   console.log('Is this correct fail? Or is this fail not correct?');
}