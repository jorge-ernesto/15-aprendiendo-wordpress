<?php
/**
 * Template Name: CosmosWP Full Width
 *
 * @since 1.4.0
 * @package CosmosWP
 */
get_header();

/* Start the Loop */
while ( have_posts() ) :
	the_post();
	the_content();
endwhile; // End of the loop.

get_footer();
