<?php if(isset($_POST["bookingEmail"]))
{
	// Read the form values
	$success = false;
	$name = isset( $_POST['bookingName'] ) ? preg_replace( "/[^\s\S\.\-\_\@a-zA-Z0-9]/", "", $_POST['bookingName'] ) : "";
	$senderEmail = isset( $_POST['bookingEmail'] ) ? preg_replace( "/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['bookingEmail'] ) : "";
	$senderTel = isset( $_POST['bookingTel'] ) ? preg_replace( "/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['bookingTel'] ) : "";
	$date = isset( $_POST['bookingDate'] ) ? preg_replace( "/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['bookingDate'] ) : "";
	$time = isset( $_POST['bookingTime'] ) ? preg_replace( "/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['bookingTime'] ) : "";
	$seats = isset( $_POST['bookingSeats'] ) ? preg_replace( "/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['bookingSeats'] ) : "";
	$message = isset( $_POST['contactsMessage'] ) ? preg_replace( "/(From:|To:|BCC:|CC:|Subject:|Content-Type:)/", "", $_POST['contactsMessage'] ) : "";

	//Headers
	$to = "youremail@domain.com";
    $subject = 'Contact Us';
	$headers = "MIME-Version: 1.0\r\n";
	$headers .= "Content-type: text/html; charset=iso-8859-1\r\n";

	//body message
	$message = "Name: ". $firstName . "<br>Email: ". $senderEmail . "<br>Phone: ". $senderTel . "<br>Booking date: ". $date . "<br>Booking time: ". $time . "<br>Seats: ". $seats . "<br> Message: " . $message . "";

	//Email Send Function
    $send_email = mail($to, $subject, $message, $headers);
}
else
{
	echo '<div class="failed">Failed: Email not Sent.</div>';
}