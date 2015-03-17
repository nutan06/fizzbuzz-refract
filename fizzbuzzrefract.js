$(document).ready(function(){
  var $content=$('.content');
	var $error=$('.errormessage');
	var $inputForm=$('#inputform');
	function fizzbuzz(n){
    var n=+n;
    if( !isNaN(n) && n % 1 === 0 ) {
			$error.html('');
			$content.html('');
    for (var i=1; i<n; i++){
		if(i%3===0 && i%5===0){
			
			$('.content').append('<li>Fizz Buzz</li>');
		}
		else if(i%5===0){
			
			$('.content').append('<li>Buzz</li>');
		}
		else if(i%3===0){
			
			$('.content').append('<li>Fizz </li>');
		}
		else {
			$('.content').append('<li>'+i+'</li>');
		}
    }
	}else {
			// Display the error message if the user input is not valid and clear the results div
			$error.html("Please enter whole number to continue..");
			$content.html('');
		}
  }
  	$inputForm.submit(function(e){
      e.preventDefault();
      var $inputNumber=$('#inputnumber').val();
			fizzbuzz($inputNumber);
    });
});