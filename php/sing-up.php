<?php 
header ("Content-type: text/html; charset=utf-8");

include_once('bd_steakhouse.php');

$email = $_POST['email'];

$res = mysql_query(" SELECT 1 FROM sing_up WHERE email = '$email' ");

$number = mysql_num_rows($res);

if($number == 0)
{
	mysql_query(" INSERT INTO sing_up(email) VALUES ('$email') ");
	
	echo "Ваш E-mail: ".$_POST['email']." успешно подписан на нашу новостную рассылку!";
}
else 
{
	echo 'Вы уже подписаны на нашу рассылку';
}
			
//mysql_query(" INSERT INTO sing_up(email) VALUES ('$email') ");
			
mysql_close();
				
			
//echo "Ваш E-mail: ".$_POST['email']." успешно подписан на нашу новостную рассылку!";

?>	
