<?php
echo'<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	
	<link href="https://fonts.googleapis.com/css?family=Roboto|Roboto+Mono" rel="stylesheet"> 
	<link type="text/css" rel="stylesheet" href="css/style.css"/>	
	<script type="text/javascript" src="js/script.js"></script>
	
    <title>Reddit</title>
	<script src="https://www.google.com/recaptcha/api.js" async defer></script>
</head>
<body>
	<div id="header">
		<div id="top_bar">';
		
		// top bar content goes here
		include"templates/top_bar.html";
		
echo'</div>
		<div id="blue_bar">';
		
		// blue bar content goes here
		include"templates/top_blue_bar.html";
		
echo'</div>
	</div>
	<div id="main">
		<div id="content">';
		
		// main content goes here
		
		include"templates/main_threads.html";
		
echo'</div>
		<div id="sidebar">
			<div id="drag_bar">';
			
		// drag bar content goes here
		include'templates/dragbar.html';
		
echo'</div>
			<div id="actual_sidebar">';
			
		// actual sidebar content goes here
		include'templates/sidebar.html';
		
echo'</div>
		</div>
	</div>
	<div id="footer">
		<div id="footer_box">';
		
		// each footer boxes go here
		include"templates/footer_content.html";
		
echo'	</div>
		<div id="copy_right">
			Use of this site constitutes acceptance of our <a href="#">User Agreement</a> and <a href="#">Privacy Policy</a>. © 2017 reddit inc. All rights reserved. REDDIT and the ALIEN Logo are registered trademarks of reddit inc.
		</div>
	</div>';
	
include"templates/modal_signup.html";
echo'</body>
</html>';	
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
?>