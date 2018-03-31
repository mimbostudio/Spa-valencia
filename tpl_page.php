<?/*
Template Name: Номера и Услуги
Template Post Type: post, page, product
*/?>
<?php get_header(); ?>
<?php if (have_posts()) : while (have_posts()) : the_post(); ?>	
<div class="menuinnomer">
		<a href="<? if(in_category('Номера')):?>/#nomers<? else: ?>/#uslugy<? endif;?>" class="nazad">Вернуться назад</a>
		<div class="socseti">
			<?if(getContacts()["facebook"]!=""):?><a href="<?=getContacts()["facebook"];?>"><div class="fb fb2"></div></a><?endif;?>
			<?if(getContacts()["inst"]!=""):?><a href="<?=getContacts()["inst"];?>"><div class="inst inst2"></div></a><?endif;?>
			<?if(getContacts()["vk"]!=""):?><a href="<?=getContacts()["vk"];?>"><div class="vk vk2"></div></a><?endif;?>
		</div>
	</div>
	<div class="relative">
	<div class="bggrey bggrey2"></div>
	<div class="opisnomer">	
		<div class="gallnomer">
			<div class="glavfoto" style="">
				<div class="btnprev"></div>
				<div class="btnnext"></div>				
			</div>
		<?php 
		if( have_rows('slider') ):
		while( have_rows('slider') ) : the_row(); ?>	
			<div class="fotonone" style="background: url(<?the_sub_field('slider_photo');?>) no-repeat;"></div>
			<?endwhile;endif;?>
		</div>
		<div class="opis">
			<? if(in_category('Номера')):?><h4>Тип номера:</h4><? endif;?>
			<h1><?php the_title(); ?></h1>
			<h2><?the_field('price');?><? if(in_category('Номера')):?><span>Р/сутки</span><? endif;?></h2>
			<? if(in_category('Номера')):?><div class="btnbron" data="<? the_ID(); ?>">Забронировать</div><? else: ?>
			<div class="btnbron">Забронировить</div>
			<? endif;?>
			<ul>
				<?if( have_rows('children') ):
				while( have_rows('children') ) : the_row(); ?>
				<li><?the_sub_field('desc');?></li>
				<?endwhile; endif; ?>
			</ul>
			<div class="lineopis"></div>
			<?if( have_rows('inf_icn') ):
				while( have_rows('inf_icn') ) : the_row(); ?>
			<h3 style="background: url(<?the_sub_field('icon');?>) no-repeat; background-size: 29px auto; background-position: left center;"><?the_sub_field('des_icon');?></h3>
			<?endwhile; endif; ?>
			<p><?php the_content(); ?></p>
		</div>
		<?php endwhile; else: ?>
<p><?php _e('Извините, все очень плохо('); ?></p>
<?php endif; ?>
	</div>
	
	<? if(in_category('Номера')):?>
		<div class="nomera nomeratwo">
			<h1>Другие номера</h1>
			<div class="linenomer"></div>
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
				<br><br><br><br><br><br>
			</div>

			</div>	
<?php endif; ?>			
			
	</div>
<input type="text" class="form-control none" />
<input type="text" class="form-control none" />	
<?php get_footer(); ?>