# Magento 2 Gulp Integration

As a Magento 2 frontend developer you might have noticed that less to css compilation process is slow with grunt and it
takes more time to rebuild everything making you an inefficient developer.

However, you could solve this problem with Gulp. Gulp is a task / build runner which uses Node.js for web development.
The main difference between Gulp and Grunt lies in how they deal with their automation tasks inside.

Gulp uses Node Stream while Grunt uses temp files. Therefore, Gulp compilation is faster compared to Grunt.

## Comparing with Grunt

<table>
<tr><th></th><th>Gulp</th><th>Grunt</th></tr>
<tr><td>Compilation of all themes (10 files):</td><td>16sec</td><td>33sec</td></tr>
<tr><td>Custom theme compilation (2 files)</td><td>4.5s</td><td>11.2s</td></tr>
</table>

## Installation

### Method 1: Install using composer (only for Magento >= 2.2.2)

1. Ensure Node is used in Version 11: `nvm install v11`

2. Add the composer repository `composer config repositories.gulp vcs https://github.com/subodha/magento-2-gulp.git`

3. Install the module `composer require subodha/magento-2-gulp:"1.*"`

4. Add these scripts to your composer.json:

```json
{
    "scripts": {
        "post-update-cmd": [
            "cd vendor/subodha/magento-2-gulp && npm install"
        ],
        "post-install-cmd": [
            "cd vendor/subodha/magento-2-gulp && npm install"
        ]
    }
}
```

5. Run `composer install`

6. Define your theme configuration in `dev/tools/grunt/configs/themes.js`

7. You can now run `vendor/bin/gulpm2 build --your_theme` to compile your styles

### Method 2: Copying to your Magento installation (old method for Magento <= 2.2.1)

1. Download as a zip file or clone this repository.

2. Copy "gulpfile.js" and "package.json" in to the root directory (code pool).

   If you are using Magento 2.2.1 or lower comment line number 47 - 48.

3. Install node.js for your OS: https://nodejs.org/en/

4. Install gulp globally using `npm install -g gulp-cli`

5. Install modules: run a command in a root directory of your project "npm install".

   (If you already installed Grunt please remove node_module directory)

## How to run

1. Run `gulp exec --theme` ex: `gulp exec --luma`
   <br>Or:  `php bin/magento dev:source-theme:deploy --locale="en_AU" --area="frontend" <br>--theme="
   VendorName/themeName"`

2. Run : `gulp deploy --theme` ex: `gulp deploy --luma`
   <br>Or: `php bin/magento setup:static-content:deploy en_AU`

3. Run gulp command in the root directory with arguments or without. Examples:<br>
   3.a. Compilation of all themes: `gulp`<br>
   3.b. Compilation of certain theme: `gulp less --luma`<br>
   3.c. Watcher of certain theme: `gulp watch --luma`<br>
   3.d. Compilation of certain theme with minification (+~2.5s): `gulp less --luma --min`<br>
   3.e. Compilation of certain theme with sourcemap(+~1.5s), can't be used with
   minification: `gulp less --luma --map`<br>
   3.f. Compilation with live reload: `gulp less --luma --live`<br>
   3.g. Watcher with liveReload: `gulp watch --luma --live`<br>
   3.h. For clear the magento cache: `gulp cache-flush`<br>

4. For using liveReload install extension for your browser: https://livereload.com/
   <br>4.a. Turn on the extension on the page of project.

5. For clear the magento cache: `gulp cache-flush`
6. For clear the magento static files cache: `gulp clean --luma`

### How to run (with composer integration)

See above, but replace `gulp` with `vendor/bin/gulpm2`.
