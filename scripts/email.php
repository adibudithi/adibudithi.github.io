<?php
    if(isset($_POST['send'])) {
        // prepare the email
        $to = 'adibudithi@gmail.com';
        $subject = 'Message sent from website';
        $message = 'Name: ' . $_POST['name'] . '\n'
         . 'Email: ' . $_POST['email'] . '\n'
         . 'Phone: ' . $_POST['phone'] . '\n'
         . htmlspecialchars($_POST['message']);
        // send it
        $sent = mail($to, $subject, $message);
        if($sent) {
            echo 'Your message has been sent successfully!';
        } else {
            echo 'Sorry, your message could not send.';
        }
    }
?>