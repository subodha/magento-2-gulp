# magento-2-gulp
Gulp for Magento 2

<p>As a Magento 2 frontend developer you might have noticed that less to css compilation process is slow with grunt and it takes more time to rebuild everything making you an inefficient developer. </p>

<p>However, you could solve this problem with Gulp. Gulp is a task / build runner which uses Node.js for web development. The main difference between Gulp and Grunt lies in how they deal with their automation tasks inside. </p>

<p>Gulp uses Node Stream while Grunt uses temp files. Therefore, Gulp compilation is faster compared to Grunt. </p>


<h2>Comparing with Grunt</h2>
<table>
<tr><th></th><th>Gulp</th><th>Grunt</th></tr>
<tr><td>Compilation of all themes (10 files):</td><td>16sec</td><td>33sec</td></tr>
<tr><td>Custom theme compilation (2 files)</td><td>4.5s</td><td>11.2s</td></tr>
</table>

<h2>Installation</h2>

1. Download as a zip file or clone this in to ur pc.

2. Copy "gulpfile.js" and "package.json" in to the root directory (codepool)

3. Install node.js for your OS: https://nodejs.org/en/

4. Install gulp globaly using <code>npm install -g gulp-cli</code>

5. Install modules: run a command in a root directory of your project "npm install".
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
3.h. For clear the magento cache: <code>gulp cache-flush</code><br/>
    
4. For using liveReload install extension for your browser: http://livereload.com/
<br/>4.a. Turn on the extension on the page of project.

