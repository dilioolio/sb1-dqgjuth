<?php
/**
 * Plugin Name: Marketing Calculators
 * Description: A collection of marketing calculators including CPC Calculator
 * Version: 1.0.0
 * Author: Your Name
 */

if (!defined('ABSPATH')) {
    exit;
}

function marketing_calculators_enqueue_scripts() {
    wp_enqueue_style(
        'marketing-calculators-styles',
        plugins_url('dist/marketing-calculators.css', __FILE__),
        array(),
        '1.0.0'
    );

    wp_enqueue_script(
        'marketing-calculators-js',
        plugins_url('dist/marketing-calculators.js', __FILE__),
        array(),
        '1.0.0',
        true
    );
}
add_action('wp_enqueue_scripts', 'marketing_calculators_enqueue_scripts');

function marketing_calculators_shortcode($atts) {
    $calculator = isset($atts['type']) ? $atts['type'] : 'cpc';
    
    return sprintf(
        '<div id="marketing-calculator-%s" class="marketing-calculator"></div>',
        esc_attr($calculator)
    );
}
add_shortcode('marketing_calculator', 'marketing_calculators_shortcode');
?>