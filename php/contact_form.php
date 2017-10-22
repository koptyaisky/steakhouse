<?php 
header ("Content-type: text/html; charset=utf-8");


include_once('bd_steakhouse.php');
	
		
$email = $_POST['email'];
$name = $_POST['name'];
$theme = $_POST['sub'];
$text = $_POST['mess'];
			
mysql_query(" INSERT INTO contact_form(email, name, subject, text) VALUES('$email', '$name', '$theme', '$text') ");
			
mysql_close();
				
echo 'Ваше сообщение успешно отправлено!';
		
?>		
