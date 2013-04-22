<?php
	require('head.html.php');	
	//phpinfo();
	$incJSFiles[] = 'Site.start()';
?>
	<div class="full-cont">
		<section>
			<h1>¶ Typography</h1>
			<h1>Heading 1</h1>
			<h2>Heading 2</h2>
			<h3>Heading 3</h3>
			<h4>Heading 4</h4>
			<h5>Heading 5</h5>
			<h6>Heading 6</h6>
			<p>Paragraph <a href="#">text Lorem ipsum dolor</a> sit amet, consectetur adipisicing elit. Dolorem, repellat quam dolorum totam deleniti doloremque eaque aut tenetur exercitationem saepe! Veritatis, perferendis voluptatibus sequi autem voluptatem facilis deserunt soluta voluptate?</p>
		</section>
		<section>
			<h1># Colors</h1>
			<div class="color-swatch">
				<span class="grey"></span><span class="yellow"></span><span class="light-green"></span><span class="green"></span><span class="pink"></span>
			</div>
		</section>
		<section>
			<h1><?=htmlentities('<>')?> Forms</h1>
			<form action="<?=ROOT?>">
				<input type="hidden" name="ajax" />
				<input type="text" name="" id="" />
				<input type="email" name="" id="" />
				<input type="number" name="" id="" />
				<div class="error">
					<p>This is an error.</p>
				</div>
				<button type="sumbit">Submit</button>
			</form>
		</section>
		<section>
			<h1>&middot; Lists</h1>
			
			<ul class="ul-clean">
				<li>Lorem ipsum dolor sit amet.</li>
				<li>Lorem ipsum dolor sit amet, consectetur.</li>
				<li>Lorem ipsum dolor.</li>
				<li>Lorem ipsum dolor sit amet.</li>
			</ul>
		</section>
	</div>

<?php
	require('foot.html.php');