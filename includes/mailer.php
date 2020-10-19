<?php
/**
 * Mailer
 * 
 * @author Matt West
 * @link http://blog.teamtreehouse.com/create-ajax-contact-form
 */

// Only process POST requests.
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form fields and remove whitespace.
    $name = strip_tags(trim($_POST["name"]));
            $name = str_replace(array("\r","\n"),array(" "," "),$name);
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    // Check that data was sent to the mailer.
    if ( empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Set a 400 (bad request) response code and exit.
        http_response_code(400);
        echo "Es gab ein Problem mit Ihrer Einreichung. Bitte füllen Sie das Formular aus und versuchen Sie es erneut.";
        exit;
    }

    // Set the recipient email address.
    // FIXME: Update this to your desired email address.
    $recipient = "contact@kdomaratius.com";

    // Set the email subject.
    $subject = "Neuer Kontakt von $name";

    // Build the email content.
    $email_content = "Name: $name\n";
    $email_content .= "E-Mail: $email\n\n";
    $email_content .= "Nachricht:\n$message\n";

    // Build the email headers.
    $email_headers = "Von: $name <$email>";

    // Send the email.
    if (mail($recipient, $subject, $email_content, $email_headers)) {
        // Set a 200 (okay) response code.
        http_response_code(200);
        echo "Ich danke Ihnen! Ihre Nachricht wurde gesendet.";
    } else {
        // Set a 500 (internal server error) response code.
        http_response_code(500);
        echo "Etwas ist schief gelaufen, ich konnte Ihre Nachricht nicht übermitteln.";
    }

} else {
    // Not a POST request, set a 403 (forbidden) response code.
    http_response_code(403);
    echo "Es gab ein Problem mit Ihrer Einreichung, bitte versuchen Sie es erneut.";
}
