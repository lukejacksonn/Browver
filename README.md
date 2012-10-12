Browver
=======

A useful JavaScript plugin for developers who like to take advantage of bleeding edge web technologies but don’t have the time to code for (or just couldn’t give a care about) users that refuse to update their browser. The plugin that detects if a browser is too old for a website to function properly if so, it provides the user with direct links to the latest browser downloads.

Demo : http://lukejacksonn.com/Projects/browver


Add this to the bottom of the body section of your site and it will prompt really old browsers automatically :

<code>&lt;script src="http://goo.gl/yQRYY" type="text/javascript">&lt;/script></code><br>
<code>&lt;script>Browver();&lt;/script></code>


You can specify specific browser and version requirements, the following snippet prompts all but the latest bowsers :

<code>Browver({ ie:9, firefox:15, chrome:24, safari:5, opera:12 });</code>

