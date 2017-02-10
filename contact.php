<?php
if($_POST["message"]) {
    mail("alex@elevateunited.com", "Form to email message", $_POST["message"], "From: lead@magnet.com");
}
?>
