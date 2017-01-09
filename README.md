# magento-2-gulp
Gulp for Magento 2


<h2>Comparing with Grunt</h2>

Compilation of all themes (10 files):<br/>
  Gulp: 16sec<br/>
  Grunt 33sec<br/>

Custom theme compilation (2 files):<br/>
  Gulp: 4.5s<br/>
  Grunt: 11.2s<br/>

<h2>Installation</h2>

1. Download as a zip file or clone this in to ur pc.

2. Copy "gulpfile.js" and "package.json" in to the root directory (codepool)

3. Install node.js for your OS: https://nodejs.org/en/

4. Install modules: run a command in a root directory of your project "npm install".
<br/>(If you alrady instaled Grunt please remove node_module directory)
   
<h2>How to run</h2>

1. Run : <code>gulp exec --theme</code>  ex: gulp exec --luma
    <br/>Or:  <code>php bin\magento dev:source-theme:deploy --locale="en_AU" --area="frontend" <br/>--theme="VendorName/themeName"</code>
   
2. Run : <code>gulp deploy --theme</code>  ex: gulp deploy --luma
    <br/>Or: <code>php bin\magento setup:static-content:deploy en_AU</code>
    

3. Run gulp command in the root directory with arguments or without. Examples:<br/>
3.a. Compilation of all themes: <code>gulp</code><br/>
3.b. Compilation of certain theme: <code>gulp less --luma</code><br/>
3.c. Watcher of certain theme: <code>gulp watch --luma</code><br/>
3.d. Compilation of certain theme with minification (+~2.5s): <code>gulp less --luma --min</code><br/>
3.e. Compilation of certain theme with sourcemap(+~1.5s), can't be used with minification: <code>gulp less --luma --map</code><br/>
3.f. Compilation with live reload: <code>gulp less --luma --live</code><br/>
3.g. Watcher with liveReload: <code>gulp watch --luma --live</code><br/>
    
4. For using liveReload install extension for your browser: http://livereload.com/
<br/>4.a. Turn on the extension on the page of project.

