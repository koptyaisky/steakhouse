<?php
$connection = mysql_connect("localhost", "user", "1234");
$bd = mysql_select_db("steak_house");
mysql_set_charset('utf8');
			
if(!$connection || !$bd) 
{
	exit(mysql_error());
}
?>