<?php


/**
 * Добавление нового виджета Foo_Widget.
 */

function getContacts() {
$query = new WP_Query('page_id=21');
while ( $query->have_posts() ) {
	$query->the_post();
	$a['adress'] = get_field('adress');
	$a['phone'] = get_field('phone');
	$a['email'] = get_field('email');
	$a['facebook'] = get_field('facebook').'" target="_blank"';
	$a['inst'] = get_field('inst').'" target="_blank"';
	$a['vk'] = get_field('vk').'" target="_blank"';
}
wp_reset_postdata();
return $a;
}

 
 
// конец класса Foo_Widget

// регистрация Foo_Widget в WordPress
function register_foo_widget() {
	register_widget( 'Foo_Widget' );
}


function getmenu(){
$current_menu = 'MenuHead';
$array_menu = wp_get_nav_menu_items($current_menu);
	$menu = array();
	foreach ($array_menu as $m) {
		if (empty($m->menu_item_parent)) {
			$menu[$m->ID] = array();
			$menu[$m->ID]['ID']      =   $m->ID;
			$menu[$m->ID]['title']       =   $m->title;
			$menu[$m->ID]['url']         =   $m->url;	
		}
	}
	
	
	global $wp;
	$current_url = add_query_arg($wp->query_string, '', home_url($wp->request));
	$current_url = split('[\?][p][a][g][e]',$current_url);
	foreach ($menu as $m) {
		?> 
		<a <? if($current_url[0].'/'==$m['url']) echo 'class="menublockactive"';?> href="<?=$m['url'];?>"><?=$m['title'];?></a>
		 <div></div>
		 <?
	}
	}

/*******************************
 Хлебные крошки
********************************/
 
function the_breadcrumb() {
 echo '';
 if (!is_front_page()) {
 echo '<h3><a href="';
 echo get_option('home');
 echo '">Блог';
 echo "</a> > ";
 if (is_category() || is_single()) {
 the_category(' > ');
 if (is_single()) {
 echo " </h3> ";
 }
 } elseif (is_page()) {
 echo the_title('');
 
 }
 }
 else {
 echo 'Home';
 }
}
 
/*******************************
 Меню
********************************/
if ( function_exists( 'wp_nav_menu' ) ){
 if (function_exists('add_theme_support')) {
 add_theme_support('nav-menus');
 add_action( 'init', 'register_my_menus' );
 function register_my_menus() {
 register_nav_menus(
 array(
 'primary-menu' => __( 'Primary Menu' ),
 
 )
 );
 }
 }
}
 
/* CallBack functions for menus in case of earlier than 3.0 WordPress version or if no menu is set yet*/
 
function primarymenu(){ ?>
 <div class="ddsmoothmenu">
 <ul>
 <?php wp_list_categories('hide_empty=1&exclude=1&title_li='); ?>
 </ul>
 </div>
<?php }
 
function secondarymenu(){ ?>
 <ul>
 <?php wp_list_pages('&title_li='); ?>
 </ul>
<?php }
 
/*******************************
 Миниатюры
********************************/
 
add_theme_support( 'post-thumbnails' );
set_post_thumbnail_size( 800, 300, true );
 
add_image_size('loopThumb', 140, 80, true);
 
/*******************************
 Количество символов в пост бокс
********************************/
 
function home_excerpt_length($length) {
 return 20;
}
add_filter('excerpt_length', 'home_excerpt_length');
/*******************************
 Виджеты
********************************/
 
if ( function_exists('register_sidebar') )
register_sidebar(array(
 'name' => 'sidebar',
 'before_widget' => '<div class="rightBox">
 
 <div class="rightBoxMid">',
 'after_widget' => '</div>
 
 </div>',
 'before_title' => '<h2> ',
 'after_title' => '</h2><div class="rightBoxtumbline"></div>',
));
 
register_sidebar(array(
 'name' => 'footer',
 'before_widget' => '<div class="boxFooter">',
 'after_widget' => '</div>',
 'before_title' => '<h2>',
 'after_title' => '</h2>',
));
 
/*******************************
 Навигация
********************************
 * Retrieve or display pagination code.
 *
 * The defaults for overwriting are:
 * 'page' - Default is null (int). The current page. This function will
 * automatically determine the value.
 * 'pages' - Default is null (int). The total number of pages. This function will
 * automatically determine the value.
 * 'range' - Default is 3 (int). The number of page links to show before and after
 * the current page.
 * 'gap' - Default is 3 (int). The minimum number of pages before a gap is
 * replaced with ellipses (...).
 * 'anchor' - Default is 1 (int). The number of links to always show at begining
 * and end of pagination
 * 'before' - Default is '<div class="emm-paginate">' (string). The html or text
 * to add before the pagination links.
 * 'after' - Default is '</div>' (string). The html or text to add after the
 * pagination links.
 * 'title' - Default is '__('Pages:')' (string). The text to display before the
 * pagination links.
 * 'next_page' - Default is '__('&raquo;')' (string). The text to use for the
 * next page link.
 * 'previous_page' - Default is '__('&laquo')' (string). The text to use for the
 * previous page link.
 * 'echo' - Default is 1 (int). To return the code instead of echo'ing, set this
 * to 0 (zero).
 *
 * @author Eric Martin <eric@ericmmartin.com>
 * @copyright Copyright (c) 2009, Eric Martin
 * @version 1.0
 *
 * @param array|string $args Optional. Override default arguments.
 * @return string HTML content, if not displaying.
 */
 
function emm_paginate($args = null) {
 $defaults = array(
 'page' => null, 'pages' => null,
 'range' => 3, 'gap' => 3, 'anchor' => 1,
 'before' => '<div class="emm-paginate">', 'after' => '</div>',
 'title' => __(''),
 'nextpage' => __('&raquo;'), 'previouspage' => __('&laquo'),
 'echo' => 1
 );
 
$r = wp_parse_args($args, $defaults);
 extract($r, EXTR_SKIP);
 
if (!$page && !$pages) {
 global $wp_query;
 
$page = get_query_var('paged');
 $page = !empty($page) ? intval($page) : 1;
 
$posts_per_page = intval(get_query_var('posts_per_page'));
 $pages = intval(ceil($wp_query->found_posts / $posts_per_page));
 }
 
 $output = "";
 if ($pages > 1) {
 $output .= "$before<span class='emm-title'>$title</span>";
 $ellipsis = "<span class='emm-gap'>...</span>";
 
if ($page > 1 && !empty($previouspage)) {
 $output .= "<a href='" . get_pagenum_link($page - 1) . "' class='emm-prev'>$previouspage</a>";
 }
 
 $min_links = $range * 2 + 1;
 $block_min = min($page - $range, $pages - $min_links);
 $block_high = max($page + $range, $min_links);
 $left_gap = (($block_min - $anchor - $gap) > 0) ? true : false;
 $right_gap = (($block_high + $anchor + $gap) < $pages) ? true : false;
 
if ($left_gap && !$right_gap) {
 $output .= sprintf('',
 emm_paginate_loop(1, $anchor),
 $ellipsis,
 emm_paginate_loop($block_min, $pages, $page)
 );
 }
 else if ($left_gap && $right_gap) {
 $output .= sprintf('',
 emm_paginate_loop(1, $anchor),
 $ellipsis,
 emm_paginate_loop($block_min, $block_high, $page),
 $ellipsis,
 emm_paginate_loop(($pages - $anchor + 1), $pages)
 );
 }
 else if ($right_gap && !$left_gap) {
 $output .= sprintf('',
 emm_paginate_loop(1, $block_high, $page),
 $ellipsis,
 emm_paginate_loop(($pages - $anchor + 1), $pages)
 );
 }
 else {
 $output .= emm_paginate_loop(1, $pages, $page);
 }
 
if ($page < $pages && !empty($nextpage)) {
 $output .= "<a href='" . get_pagenum_link($page + 1) . "' class='emm-next'>$nextpage</a>";
 }
 
$output .= $after;
 }
 
if ($echo) {
 echo $output;
 }
 
return $output;
}
 
/**
 * Helper function for pagination which builds the page links.
 *
 * @access private
 *
 * @author Eric Martin <eric@ericmmartin.com>
 * @copyright Copyright (c) 2009, Eric Martin
 * @version 1.0
 *
 * @param int $start The first link page.
 * @param int $max The last link page.
 * @return int $page Optional, default is 0. The current page.
 */
function emm_paginate_loop($start, $max, $page = 0) {
 $output = "";
 for ($i = $start; $i <= $max; $i++) {
 $output .= ($page === intval($i))
 ? "<span class='emm-page emm-current'>$i</span>"
 : "<a href='" . get_pagenum_link($i) . "' class='emm-page'>$i</a>";
 }
 return $output;
}
 
/*******************************
 Комментарии
********************************/
 
function mytheme_comment($comment, $args, $depth) {
 $GLOBALS['comment'] = $comment; ?>
 <li <?php comment_class('clearfix'); ?> id="li-comment-<?php comment_ID() ?>">
 <?php echo get_avatar($comment,$size='60',$default='http://www.gravatar.com/avatar/61a58ec1c1fba116f8424035089b7c71?s=32&d=&r=G' ); ?>
 <div id="comment-<?php comment_ID(); ?>">
 <div class="comment-meta commentmetadata clearfix">
 <?php printf(__('%s'), get_comment_author_link()) ?><?php edit_comment_link(__('(Edit)'),' ','') ?> <span><?php printf(__('%1$s at %2$s'), get_comment_date(), get_comment_time()) ?>
 </span>
 </div>
 
 <div class="text">
 <?php comment_text() ?>
 </div>
 
 <?php if ($comment->comment_approved == '0') : ?>
 <em><?php _e('Your comment is awaiting moderation.') ?></em>
 <br />
 <?php endif; ?>
 
<div class="reply">
 <?php comment_reply_link(array_merge( $args, array('depth' => $depth, 'max_depth' => $args['max_depth']))) ?>
 </div>
 </div>
<?php }