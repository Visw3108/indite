<?php
date_default_timezone_set('Asia/Kolkata');

// Local DB Config
// $servername = "localhost";
// $username = "root";
// $password = "";
// $dbname = "inditeindia";

// Live DB Config
$servername = "localhost";
$username = "inditein_admin";
$password = "sJerr6TqhD(3";
$dbname = "inditein_inditeindia";

// Send mail via PHPMailer
// Use correct path if your files are in PHPMailer/src/
require_once __DIR__ . '/PHPMailer/src/PHPMailer.php';
require_once __DIR__ . '/PHPMailer/src/SMTP.php';
require_once __DIR__ . '/PHPMailer/src/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Collect and sanitize
$fname = $conn->real_escape_string($_POST['fname']);
$lname = $conn->real_escape_string($_POST['lname']);
$email = $conn->real_escape_string($_POST['email']);
$mobile = $conn->real_escape_string($_POST['mobile']);
$message = $conn->real_escape_string($_POST['message']);
$createdDt = date("Y-m-d H:i:s");

// Insert into database
$sql = "INSERT INTO contactlist (fname, lname, email, mobile, message, createdDt)
        VALUES ('$fname', '$lname', '$email', '$mobile', '$message', '$createdDt')";

if ($conn->query($sql) === TRUE) {

  $mail = new PHPMailer(true);

  try {
    // Server settings
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com'; // or your SMTP server
    $mail->SMTPAuth   = true;
    $mail->Username   = 'nr.inditeindia@gmail.com'; // your SMTP username
    $mail->Password   = 'xqjl nyfb fbom heno'; // your SMTP password (App Password for Gmail)
    $mail->SMTPSecure = 'tls';
    $mail->Port       = 587;

    // Recipients
    $mail->setFrom('nr.inditeindia@gmail.com', 'Indite India Contact Form');
    $mail->addAddress('support@inditeindia.com'); // Receiver

    // Content
    $mail->isHTML(true);
    $mail->Subject = "New Contact Submission - $fname $lname";
    $mail->isHTML(true);
    $mail->Subject = "New Contact Submission - $fname $lname";
    $mail->Body = "
    <html>
    <head>
        <style>
            body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
                background-color: #f7f7f7;
            }
            .email-container {
                max-width: 600px;
                margin: 20px auto;
                background-color: #ffffff;
                padding: 20px;
                border-radius: 8px;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            }
            .header {
                background-color: #0044cc;
                color: #ffffff;
                padding: 15px;
                text-align: center;
                border-radius: 8px 8px 0 0;
            }
            .header h1 {
                margin: 0;
                font-size: 24px;
            }
            .content {
                padding: 20px;
                color: #333333;
            }
            .content p {
                line-height: 1.6;
                margin: 10px 0;
            }
            .footer {
                padding: 10px;
                text-align: center;
                background-color: #f4f4f4;
                border-radius: 0 0 8px 8px;
                font-size: 12px;
                color: #777777;
            }
            .footer a {
                color: #0044cc;
                text-decoration: none;
            }
            @media (max-width: 600px) {
                .email-container {
                    width: 100% !important;
                    padding: 10px;
                }
                .header h1 {
                    font-size: 20px;
                }
            }
        </style>
    </head>
    <body>
        <div class='email-container'>
            <div class='header'>
                <h1>New Message Received</h1>
            </div>
            <div class='content'>
                <p><strong>Name:</strong> $fname $lname</p>
                <p><strong>Email:</strong> $email</p>
                <p><strong>Mobile:</strong> $mobile</p>
                <p><strong>Message:</strong> $message</p>
                <p><em>Submitted on: $createdDt</em></p>
            </div>
            <div class='footer'>
                <p>&copy; 2025 Indite India | <a href='http://www.inditeindia.com'>Visit Website</a></p>
            </div>
        </div>
    </body>
    </html>
";

    $mail->send();
    echo "Thank you! Your message has been submitted.";
  } catch (Exception $e) {
    echo "Message saved but email failed. Mailer Error: {$mail->ErrorInfo}";
  }
} else {
  echo "Error: " . $conn->error;
}

$conn->close();
