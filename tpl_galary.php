<?/*
Template Name: Галерея
Template Post Type: post, page, product
*/?>
<?php get_header(); ?>
	<nav>
		<div class="menublock">
			<div class="menublock2">
				<div class="btnclose">
					<div class="lineclose"></div>
					<div class="lineclose"></div>
				</div>
				<h1>Меню
					<div class="ellipse"></div>
					<div class="ellipse"></div>
				</h1>
				<?getmenu();?>
				<div class="socseti2">
					<a href="<?=getContacts()["facebook"];?>"><div class="fb fb2"></div></a>
					<a href="<?=getContacts()["inst"];?>"><div class="inst inst2"></div></a>
					<a href="<?=getContacts()["vk"];?>"><div class="vk vk2"></div></a>
				</div>			
			</div>
		</div>
	</nav>
	<div class="menuinnomer">
		<div class="gamb">
			<div class="linemenu"></div>
			<div class="linemenu"></div>
			<div class="linemenu"></div>
		</div>
		<div class="slovo">
			<h1>Меню</h1>
		</div>
		<div class="socseti">
			<a href=""><div class="fb fb2"></div></a>
			<a href=""><div class="inst inst2"></div></a>
			<a href=""><div class="vk vk2"></div></a>
		</div>
	</div>
	<div class="gallery">
	</div>
<?php get_footer(); ?>