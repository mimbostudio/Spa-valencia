<?/*
Template Name: Главная страница
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
			<div class="gamb">
				<div class="linemenu"></div>
				<div class="linemenu"></div>
				<div class="linemenu"></div>
			</div>
	</nav>
	<div class="bgheader">		
		<div class="slovo">
			<h1>Меню</h1>
		</div>
		<div class="socseti">
			<a href="<?=getContacts()["facebook"];?>"><div class="fb"></div></a>
			<a href="<?=getContacts()["inst"];?>"><div class="inst"></div></a>
			<a href="<?=getContacts()["vk"];?>"><div class="vk"></div></a>
		</div>	
		<div class="logo"></div>
		<div class="forma">
			<div class="punkt">
				<h2>Дата заезда</h2>
				<h1><span>25/</span>июля</h1>
				<div class="form-group inline">
				  <div class="input-group date inline" id="datetimepicker1">
					<input type="text" class="form-control none" />
					<span class="input-group-addon strdown">
					</span>
				  </div>
				</div>
			</div>
			<div class="punkt">
				<h2>Дата выезда</h2>
				<h1><span>25/</span>июля</h1>
				<div class="form-group inline">
				  <div class="input-group date inline" id="datetimepicker2">
					<input type="text" class="form-control none" />
					<span class="input-group-addon strdown">
					</span>
				  </div>
				</div>
			</div>
			<div class="punkt">
				<h2>Кол-во людей</h2>
				
					<h1><span>2/</span>чел</h1>
					<div class="countmenu">
						<ul>
							<li><span>1/</span>чел</li>
							<li class="activecount"><span>2/</span>чел</li>
							<li><span>3/</span>чел</li>
							<li><span>> 3x</span></li>
						</ul>						
					</div>				
				<div class="strdown2"></div>
			</div>
			<div class="btnzayavka">Оставить заявку</div>
		</div>
	</div>
	<div class="valensia">
		<div class="col-md-6 col-sm-6 ptl">
			<h1><?the_field('title')?></h1>
			<p><?the_field('desс')?></p>
			<a href="/галерея" class="btnfoto">Больше фото 
				<div class="longline">
					<div class="smallline"></div>
					<div class="smallline"></div>
				</div>
			</a>
		</div>
		<div class="col-md-6 col-sm-6 pt0">
			<? 	$z=0;while( have_rows('photoekran2') ) : the_row(); 
			$photo[$z++]=get_sub_field('photo');
			endwhile;
			?>
			<div class="foto1" style="background: url(<?=$photo[0]?>) no-repeat center;"></div>
			<div class="foto2" style="background: url(<?=$photo[1]?>) no-repeat center;"></div>
			<div class="foto3" style="background: url(<?=$photo[2]?>) no-repeat center;"></div>
		</div>
	</div>	
	<div class="relative">
	<div class="bggrey"></div>
		<div class="nomera" id="nomers">
			<h1><?the_field('title3')?></h1>
			<div class="linenomer"></div>
			<p><?the_field('des3')?></p>
			
			<?php
$id=3; 
$n=20; 
$t=0;
$recent = new WP_Query("cat=$id&showposts=$n");
while($recent->have_posts()) : $recent->the_post();
if( have_rows('slider') ):
while( have_rows('slider') ) : the_row(); 
$pht = get_sub_field('slider_photo');
break;
endwhile;endif;?>
			
			<div class="col-md-4 col-sm-6 width <?if($t>2)echo 'nonenomer';?>">
				<div class="nomer">
					<div class="topnomer" style="background: url(<?=$pht?>) no-repeat center;"></div>
					<div class="botnomer">
						<div class="leftnomer">
							<h1><?php the_title(); ?></h1>
							<h2><?the_field('price');?><span>руб/сутки</span></h2>
						</div>
						<div class="rightnomer">
							<a href="<?the_permalink();?>"><div class="btnnomer">Подробнее
								<div class="longline">
									<div class="smallline"></div>
									<div class="smallline"></div>
								</div>
							</div></a>
							<?if( have_rows('inf_icn') ):
				while( have_rows('inf_icn') ) : the_row(); ?>
			<h2 style="background: url(<?the_sub_field('icon');?>) no-repeat; background-size: 29px auto; background-position: left center;"><?the_sub_field('des_icon');?></h2>
			<?endwhile; endif; ?>		
						</div>
					</div>
				</div>
			</div>
<?php $t++; endwhile; 
wp_reset_postdata();
 ?>
			<div class="centertxt">
				<div class="btnnomera">Посмотреть все номера</div>
			</div>
		</div>
	</div>
	
	<?if(have_rows('slider')):?>
	<div class="bgak">	
		<div class="infaak">
			<h1><?the_field('title4')?> </h1>
			<div class="linenomer"></div>
			<p><?the_field('des4')?> </p>
		</div>
		<div class="sliderak">
			<div class="leftslide"></div>
			<div class="rightslide"></div>
			<div class="overhidden">
				<div class="akfoto1"></div>
				<div class="akfoto2"></div>
				<div class="akfoto3"></div>
				<?  while( have_rows('slider') ) : the_row(); ?>
				<div class="akfoto" style="background: url(<?php the_sub_field('photo_news'); ?>) no-repeat center;">
					<div class="opisak">
						<div class="dataak">
							<h1><?php the_sub_field('news_day'); ?></h1>
							<h2><?php the_sub_field('news_m'); ?></h2>
						</div>
						<div class="opisak2">
							<h1><?php the_sub_field('name_news'); ?></h1>
							<p><?php the_sub_field('des_news'); ?></p>
						</div>
					</div>
				</div>
				<?  endwhile;?>
			</div>
		</div>
	</div>
	<?endif;?>
	
		<?if( have_rows('usl') ):
				while( have_rows('usl') ) : the_row(); ?>
				
			<?php

$post_object = get_sub_field('name_usl');

if( $post_object ): 
	// override $post
	$post = $post_object;
	setup_postdata( $post ); 

while( have_rows('slider') ) : the_row(); 
$pht = get_sub_field('slider_photo');
break; endwhile;?>		
		<div class="viduotduha" id="uslugy">		
			<a href="<?the_permalink();?>" class="otduh">
				<div class="bgotduh" style="background: url(<?=$pht?>) no-repeat center;"></div>
				<div class="brown"></div>
				<h1><?php the_title(); ?></h1>
			</a>			
		</div>
		
		<?php wp_reset_postdata(); // IMPORTANT - reset the $post object so the rest of the page works correctly ?>
<?php endif; ?>
		
		
		<?endwhile; endif; ?>	
<?php get_footer(); ?>