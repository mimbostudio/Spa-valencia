<?/*
Template Name: Ресторан
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
					<?if(getContacts()["facebook"]!='" target="_blank"'):?><a href="<?=getContacts()["facebook"];?>"><div class="fb fb2"></div></a><?endif;?>
					<?if(getContacts()["inst"]!='" target="_blank"'):?><a href="<?=getContacts()["inst"];?>"><div class="inst inst2"></div></a><?endif;?>
					<?if(getContacts()["vk"]!='" target="_blank"'):?><a href="<?=getContacts()["vk"];?>"><div class="vk vk2"></div></a><?endif;?>
				</div>			
			</div>
		</div>
			<div class="gamb">
				<div class="linemenu"></div>
				<div class="linemenu"></div>
				<div class="linemenu"></div>
			</div>
	</nav>
	<div class="bgheader bgheader2">
		<div class="slovo">
			<h1>Меню</h1>
		</div>
		<div class="socseti">
            <?if(getContacts()["facebook"]!='" target="_blank"'):?><a href="<?=getContacts()["facebook"];?>"><div class="fb"></div></a><?endif;?>
			<?if(getContacts()["inst"]!='" target="_blank"'):?><a href="<?=getContacts()["inst"];?>"><div class="inst"></div></a><?endif;?>
			<?if(getContacts()["vk"]!='" target="_blank"'):?><a href="<?=getContacts()["vk"];?>"><div class="vk"></div></a><?endif;?>
		</div>
		<div class="logo"></div>
	</div>
	<div class="bggr">
		<div class="bgwh">
			<div class="deg"></div>
			<div class="deg"></div>
			<div class="deg"></div>
			<div class="deg"></div>
			<div class="pomidorka"></div>
			<div class="salad"></div>
			<h1>Ресторан</h1>
			<div class="linenomer"></div>
			<p><?the_content();?></p>
			<form action="">
				<input id="name" type="text" placeholder="ВАШЕ ИМЯ:" name="name">
				<input id="tel" type="text" placeholder="ВАШ ТЕЛЕФОН:" name="number">
				<input type="hidden" name="type">
				<div class="typemerop"><span>Тип мероприятия</span>
					<div class="typemenu">
						<ul>
							<li>Корпоратив</li>
							<li>Свадьба</li>
							<li>День рождения</li>
							<li>Детские мероприятия</li>
						</ul>						
					</div>
				</div>
				<div class="btnzayavka4">Отправить заявку</div>
			</form>
		</div>
	</div>
	<div class="container">
	<div class="menurst">
	
	<?$x = 0; if( have_rows('меню') ):
		while( have_rows('меню') ) : the_row(); ?>	
		<div class="polosamenu">
			<div class="vid <?if($x == 0) echo 'vidactive';?>">
				<img src="<?the_sub_field('icon');?>" alt=""/> 
				<h1><?the_sub_field('name_punct');?></h1>
			</div>
		</div>
		<?
		$x++;
		endwhile;endif;?>
		
	</div>
	<div class="allopismenu">
		<div class="col-md-6 col-sm-5">
			<div class="fotomenu">
				<div class="tenfoto"></div>
			</div>
			
			<div class="fotomenunone"style="background: url(<?php bloginfo('stylesheet_directory'); ?>/img/fotomenu1.jpg) no-repeat center;"></div>	
		</div>
		<div class="col-md-6 col-sm-6">
			<div class="menurestorana"></div>		
	
	
		<? if( have_rows('меню') ):
		while( have_rows('меню') ) : the_row(); ?>	
			<div class="menurestorananone">
				<h1><?the_sub_field('name_punct');?><span></span><span></span></h1>
				<ul>
				
				<? if( have_rows('bluds') ):
		while( have_rows('bluds') ) : the_row(); ?>	
					<li>
						<div class="point"></div>
						<div class="leftopismenu">
							<h2><?the_sub_field('name_bluda');?></h2>
							<div class="clear"></div>
							<p><?the_sub_field('soder');?></p>
						</div>
						<div class="rightopismenu">
						<? if( get_sub_field('price')):?>	<h2><?the_sub_field('price');?><span>руб</span></h2>	<?endif;?>
							<h3><?the_sub_field('ves');?></h3>
						</div>
					</li>		
						<?	endwhile;endif;?>
		
				</ul>
			</div>
			<?	
		endwhile;endif;?>
			
			
					
		</div>
	</div>
	<? if( have_rows('slider2') ):?>
		<div class="slider">
			<div class="slide">
				<div class="opisslide"></div>
				<div class="prevslide"></div>
				<div class="nextslide"></div>
			</div>
	<?	while( have_rows('slider2') ) : the_row(); ?>	
		
			<div class="slidenone" style="background: url(<?the_sub_field('photo');?>) no-repeat;">
				<h1><?the_sub_field('name');?></h1>
				<h2><?the_sub_field('desc');?></h2>
			</div>	
			<?	endwhile;?>
		</div>
		<?endif;?>
	</div>
<?php get_footer(); ?>
