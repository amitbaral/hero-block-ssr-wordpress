<?php
/**
 * Plugin Name:       Hero Section
 * Plugin URI:        https://wppro.au
 * Description:       Manage Hero Section
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Amit Baral
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       hero-section
 *
 * @package HeroSection
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

/**
 * Render callback function for the Hero Section block.
 */
function render_hero_section_block( $attributes ) {
    $image_url = esc_url( $attributes['imageUrl'] );
    $heading = sanitize_text_field( $attributes['heading'] );
	$description = wp_kses_post( $attributes['description'] ); // Ensure safe HTML
    $button_text = sanitize_text_field( $attributes['buttonText'] );
    $button_url = esc_url( $attributes['buttonUrl'] );
    ob_start();
    ?>
    <section class="hero-section">
        <div class="hero-image">
            <img src="<?php echo $image_url; ?>" alt="<?php echo esc_attr( $heading ); ?>" />
        </div>
        <div class="hero-content">
            <h1><?php echo $heading; ?></h1>
            <p><?php echo $description; ?></p>
			<div class="hero-button-wrapper">
				<a href="<?php echo $button_url; ?>" class="hero-button"><?php echo $button_text; ?></a>
				<a href="tel:0289993353" class="hero-button"> 02 8999 3353</a>
			</div>
        </div>
		<div class="hero-section__overlay"></div>
    </section>
    <?php
    return ob_get_clean();
}

/**
 * Registers the block using the metadata loaded from the `block.json` file
 * and associates it with the render callback function.
 */
function hero_section_hero_section_block_init() {
    register_block_type( __DIR__ . '/build', array(
        'render_callback' => 'render_hero_section_block',
    ) );
}
add_action( 'init', 'hero_section_hero_section_block_init' );
