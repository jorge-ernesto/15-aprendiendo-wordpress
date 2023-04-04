<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'aprendiendo-wp' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'Z2p=Y[XC:FjQ#8D!J*9WUW74y(cJ{>adO&xH(s(9kc5rwcRPnDD#9%(<8##j[xr>' );
define( 'SECURE_AUTH_KEY',  'qF8[}@0=+}gL[ZmmJ4#ch9M:kWv!hE-wgK8aXkKyfGus{VG3nd9QYtKKA-.1KteK' );
define( 'LOGGED_IN_KEY',    '8iHiwg4f.9SX-HSu@YfRINu(SzV=8711fXU)6YI&tEX>LPn.C2PFAvP^`g{/:Div' );
define( 'NONCE_KEY',        '<lsA/tb:=hF<gu/NHK{rfvq`_,*qJpX;1j*i#k0@QE!HyhMax/hrt-3wl=PQ@hS)' );
define( 'AUTH_SALT',        'R;0 ]Jr]?*NDSu%%z<5(|j;5[@sWxL`k58VHh*xLAT*Au,3_:i)buJ,1]8KCj}1r' );
define( 'SECURE_AUTH_SALT', 'Mfpbz.v,fgiOUmw8#>lvf~;T.Am1?=mf6Crhh|y}HtQ$kUb+SseNeDv;c}UF39o:' );
define( 'LOGGED_IN_SALT',   'O&ciJ}vag2--btiN.R;2yHpK{:A`q#$){3ahn3?rIP79I1eQh@56&:ac]0kvZ=4B' );
define( 'NONCE_SALT',       'mJqRH^]p;EgH5Dj~Sfc=4bvhl=rlc4UW4GFLKg5gA>.[e=pmpei^CUiZnDU9CxK&' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
