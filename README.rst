Higlight_js ckeditor plugin
===========================
Simple plugin for ckeditor that can add tags <pre><code class="..."></code></pre>.

This plugin is can using for the `highlight.js <http://softwaremaniacs.org/soft/highlight/en/>`_ project

Installation
~~~~~~~~~~~~
#. Upload folder highlight_js to the ckeditor plugins directory.

#. In ckeditor directory open config.js file and add line::

    config.extraPlugins = 'highlight_js';

Miscellaneous
~~~~~~~~~~~~~
To add other languages need add new files in plugin lang folder and then set new languages in plugin.js::

    lang : [ 'en', 'ru' ],