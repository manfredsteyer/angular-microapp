//
// This script copies over UMD bundles to the project's assets folder
// It's called by the npm script npx-build-plus:copy-assets
// If you call it manually, call it from your projects root
// > node projects/client-a//copy-bundles.js
//

const copy = require('copy');

console.log('Copy UMD bundles ...');

copy('node_modules/@angular/*/bundles/*.umd.js', 'projects/client-a/src/assets', {}, _ => {});
copy('node_modules/rxjs/bundles/*.js', 'projects/client-a/src/assets/rxjs', {}, _ => {});
copy('node_modules/zone.js/dist/*.js', 'projects/client-a/src/assets/zone.js', {}, _ => {});
copy('node_modules/core-js/client/*.js', 'projects/client-a/src/assets/core-js', {}, _ => {});

