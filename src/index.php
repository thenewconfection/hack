<?php


	$URI = explode('/', $_SERVER['REQUEST_URI']);
	array_shift($URI);

	define('ROOT', '/');
	define('ST', '/');
	//print_r($URI);

	switch($URI[0]){

		case '':
			$page_title = "Hack Battle"; 
			require('views/start.html.php');
			break;
		default:
			$page_title = "Sorry that page is not found";
			require('views/404.html.php');
			break;
	}


?>