<div class="zayavka" id="contacts">
		<p>Мы рады новым клиентам. Звоните в любое время.</p>
		<a href="tel:<?=getContacts()["phone"]?>"><?=getContacts()["phone"];?></a>
		<div class="btnzayavka2">Оставить заявку</div>
	</div>
	<div class="karta">
		<div class="position">
			<span>Мы тут</span>
			<p><?=getContacts()["adress"];?></p>
			<div class="treug"></div>
		</div>
	</div>
	
			<div class="error1">
				<div class="errorwhite">Ошибка!
					<span> Выберите номер.</span>
				</div>
			</div>
			<div class="error2">
				<div class="errorwhite">Ошибка!
					<span>Заполните поля</span>
				</div>
			</div>
	
			<div class="centertxt2">
				<div class="closeblock2"></div>
				<div class="formanomer">
					<div class="centercenter">
						<div class="closeform">
							<div class="linecloseform"></div>
							<div class="linecloseform"></div>
						</div>
						<div class="itogo">
							<h2>Итого:</h2>
							<h1>0<span>руб</span></h1>
						</div>
						<div class="allpunkts">
							<div class="punkt2">
								<h2>Дата заезда</h2>
								<h1><span>25/</span>июля</h1>
								<div class="form-group inline">
								  <div class="input-group date inline" id="datetimepicker3">
									<input type="text" class="form-control none" />
									<span class="input-group-addon strdown">
									</span>
								  </div>
								</div>
							</div>
							<div class="punkt2">
								<h2>Дата выезда</h2>
								<h1><span>25/</span>июля</h1>
								<div class="form-group inline">
								  <div class="input-group date inline" id="datetimepicker4">
									<input type="text" class="form-control none" />
									<span class="input-group-addon strdown">
									</span>
								  </div>
								</div>
							</div>
							<div class="punkt2">
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
						</div>
						<form class="formainput" action="">
							<div class="btnzayavka3">Отправить заявку</div>
							<input type="text" placeholder="Ваше имя" name="name">
							<input type="text" placeholder="Ваш телефон"  name="number">
							<input type="hidden" name="zaezd">
							<input type="hidden" name="vuezd">
							<input type="hidden" name="count">
							<input type="hidden" name="nomer">
							<input type="hidden" name="itogo">
						</form>
						<h3>Выберите желаемый номер:</h3>										
							<div class="nomera2">	
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
								endwhile;endif;
								?>
								<div class="nomer2" data="<? the_ID();?>">
									<div class="topnomer2" style="background: url(<?=$pht?>) no-repeat center;">
										<div class="bg">
											<div class="vubor"></div>
											<h1>Выбранный номер</h1>
										</div>
									</div>
									<div class="botnomer2">
										<h1><?php the_title(); ?></h1>
										<h2><?the_field('price');?><span>руб/сутки</span></h2>
									</div>
								</div>	
								
								<?php endwhile; 
wp_reset_postdata();
 ?>
								<style>
.formainput {
display:inline-table;}
</style
							</div>		
					</div>			
				</div>
			</div>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
	<script type="text/javascript" src="<?php bloginfo('stylesheet_directory'); ?>/js/moment-with-locales.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
	<script src="<?php bloginfo('stylesheet_directory'); ?>/js/script.js"></script>
	<script src="<?php bloginfo('stylesheet_directory'); ?>/js/swipe.js"></script>
	<script type="text/javascript" src="<?php bloginfo('stylesheet_directory'); ?>/js/bootstrap-datetimepicker.min.js"></script>
  </body>
</html>