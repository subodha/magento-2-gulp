# magento-2-gulp
Gulp for Magento 2


/* ================ Comparing with Grunt ============ */

Compilation of all themes (10 files):<br/>
  Gulp: 16sec<br/>
  Grunt 33sec<br/>

Custom theme compilation (2 files):<br/>
  Gulp: 4.5s<br/>
  Grunt: 11.2s<br/>

/* ================ Installation ==================== */

1. Download as a zip file or clone this in to ur pc.

2. Copy "gulpfile.js" and "package.json" in to the root directory (codepool)

3. Install node.js for your OS: https://nodejs.org/en/

4. Install modules: run a command in a root directory of your project "npm install".
<br/>(If you alrady instaled Grunt please remove node_module directory)
   
/* ================ How to run ====================== */

1. Run : php bin\magento dev:source-theme:deploy --locale="en_AU" --area="frontend" <br/>--theme="Netstarter/YOURTHEMENAME"
    <br/>
    Or
    <br/>
    gulp exec --theme  ex: gulp exec --luma

2. Run : php bin\magento setup:static-content:deploy en_AU

3. Run gulp command in the root directory with arguments or without. Examples:<br/>
3.a. Compilation of all themes: gulp<br/>
3.b. Compilation of certain theme: gulp less --luma<br/>
3.c. Watcher of certain theme: gulp watch --luma<br/>
3.d. Compilation of certain theme with minification (+~2.5s): gulp less --luma --min<br/>
3.e. Compilation of certain theme with sourcemap(+~1.5s), can't be used with minification: gulp less --luma --map<br/>
3.f. Compilation with live reload: gulp less --luma --live<br/>
3.g. Watcher with liveReload: gulp watch --luma --live<br/>
    
4. For using liveReload install extension for your browser: http://livereload.com/
<br/>4.a. Turn on the extension on the page of project.
