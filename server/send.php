<?php
  error_reporting(0);
  $name = $_POST['recruiterName'];
  $lastName=$_POST['recruiterLastName'];
  $email= $_POST['recruiterEmail'];
  $company = $_POST['recruiterCompany'];
  $subject = $_POST['recruiterSubject'];
  $description = $_POST['recruiterDescription']

  $header = 'From: ' . $email . "\r\n";
  $header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
  $header .= "Mime-Version: 1.0 \r\n";
  $header .= "Content-Type: text/plain";

  $message = "Este mensaje fue enviado por " . $name . " \r\n";
  $message .= "Su e-mail es: " . $email . " \r\n";
  $message .= "Empresa: " . $company . " \r\n";
  $message .="Comentario: " . $description " \r\n";
  $message .= "Enviado el " . date('d/m/Y', time());

  $targetEmail = 'javier.mora.alcazar@gmail.com';


  mail($targetEmail, $subject, utf8_decode($message), $header);

  echo 'Message successfully sent';
?>
