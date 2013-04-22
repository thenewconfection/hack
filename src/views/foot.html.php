		<footer>
			
		</footer>
	</div>
	<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
  	<script type="text/javascript">window.jQuery || document.write('<script src="<?=ST?>js/libs/jquery-1.9.1.min.js"><\/script>')</script>
	<script type="text/javascript" src="<?=ST?>js/main.js"></script>
	<script type="text/javascript">
		<?=!empty($incJSFiles)?implode(';',$incJSFiles):''?>;Site.init();
		<?=!empty($jsLog)?'console.log("var ", '.json_encode($jsLog).')':''?>
	</script>
</body>
</html>