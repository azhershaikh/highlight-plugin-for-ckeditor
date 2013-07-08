Higlight_js ckeditor plugin
===========================
Simple plugin for ckeditor that can add tags <pre><code class="..."></code></pre>.

This plugin on can use for the `highlight.js <http://softwaremaniacs.org/soft/highlight/en/>`_ project

**Warning**
----------- 
this plugin does not include highlight.js file! You should download it from highlight project page. This plugin just create HTML code.

Installation
~~~~~~~~~~~~
#. Upload folder highlight_js to the ckeditor plugins directory.

#. In ckeditor directory open config.js file and add line::

    config.extraPlugins = 'highlight_js';

Usage
~~~~~
#. Find plugin button on ckeditor toolbar.
#. Open dialog window.
#. Choose programm language.
#. Insert code and press ok.

**Note**: If you'll click on the previously added code in ckeditor and then press plugin button you'll can edit existing code.

Miscellaneous
~~~~~~~~~~~~~
#. If you use option "Auto" in plugin dialog language select, that's mean that in tag <code> will not be inserted  attribute 'class' and highlight.js should automatically recognize language. 
#. To add other languages need add new files in plugin lang folder and then set new languages in plugin.js::

    lang : [ 'en', 'ru' ],