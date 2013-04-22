<?php	
	function getTitle(){
		global $page_title;
		if(isset($page_title)){ return $page_title; } else { return "Title"; }
	}
	$local = ($_SERVER['SERVER_ADDR'] == '127.0.0.1');
?>
<!DOCTYPE html>
<html class="no-js<?=($local?' local':'')?>" lang="en">
<head>  
	<meta charset="utf-8">
	<title><?=getTitle()?></title>
	<meta name="description" content="" />
	<meta name="keywords" content="" />
	<link rel="shortcut icon" href="<?=ROOT?>favicon.ico" type="image/x-icon" />
	<script type="text/javascript" src="http://fast.fonts.com/jsapi/53742d97-692e-4a40-9ba1-2b9e1a6fbd15.js"></script>
	<link rel="stylesheet" href="<?=ST?>gfx/default.css" />
	<script type="text/javascript" src="<?=ST?>js/libs/respond.min.js"></script>
	<link rel="apple-touch-icon" sizes="144x144" href="<?=ST?>gfx/images/apple-touch-icon-144x144.png" />
	<link rel="apple-touch-icon" sizes="114x114" href="<?=ST?>gfx/images/apple-touch-icon-114x114.png" />
	<link rel="apple-touch-icon" sizes="72x72" href="<?=ST?>gfx/images/apple-touch-icon-72x72.png" />
	<link rel="apple-touch-icon" href="<?=ST?>gfx/images/apple-touch-icon-57x57.png" />
	<link rel="shortcut icon" href="<?=ROOT?>favicon.ico" />
	<meta name="author" content="Young / Skilled www.youngskilled.com" />
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="HandheldFriendly" content="true" />
	<meta name="viewport" content="width = device-width, initial-scale = 1.0, minimum-scale = 1.0"/>
	<script type="text/javascript" src="<?=ST?>js/libs/modernizr-2.6.2.dev.js"></script>
	<script type="text/javascript">
		var ROOT = '<?=ROOT?>', ST = '<?=ST?>';
	</script>
</head>