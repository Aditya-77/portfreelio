const mix = require('laravel-mix');


mix.disableNotifications()
.options({processCssUrls: false})



/* ----------------------------
Compile Portfreelio script
------------------------------ */

// Template related global css
.copy('portfreelio/develop/css/global.css','build/portfreelio/dist/global.css')

// Portfreelio builder css
.sass('portfreelio/develop/sass/portfreelio.scss','build/portfreelio/dist/gram.min.css')

// Template related global js
.copy('portfreelio/develop/js/global.js','build/portfreelio/dist/global.js')

// Portfreelio builder js
.js('portfreelio/develop/js/portfreelio.js','build/portfreelio/dist/gram.min.js')


// Comment this off when there is no change for Portfreelio fonts and svg.
// const assets_data = [
//     'fonts',
//     'svg'
// ]
// for(let asset of assets_data){
//     mix.copyDirectory(`portfreelio/develop/${asset}`,`portfreelio/dist/${asset}`)
// }