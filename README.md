# WSDL Preview
Firefox plugin to display [WSDL](https://en.wikipedia.org/wiki/Web_Services_Description_Language) files in a human readable form.

## What is WSDL
WSDL file is XML descriptor of a web service. It describes all available methods and their
data types, restrictions, possible values.

But XML used to describe computer-computer communication is often very hard to read for humans.
The WSDL browser plugin tries to solve this issue by providing human-readable view.

## XSLT Transformation
The WSDL -> HTML transformation is based on excellent [WSDL viewer](http://tomi.vanek.sk/index.php?page=wsdl-viewer)
project (Apache 2.0 licence) by [Tomi Vanek](https://twitter.com/tomivanek1). There are some
minor modifications due to the nature of this Firefox plugin (extracted styles) and due
to formatting of results page (added css ids and classes).

## Privacy Policy
The plugin neither use any external resources nor sends anywhere the WSDLs itself. The XSLT transformation is stored locally and
executed also locally in your browser. There is no usage tracking, ping or calling home. It should be safe to use the plugin for exploring
private, company internal or unpublished WSDLs. The complete source codes are provided on [github.com/todvora/wsdl-preview](https://github.com/todvora/wsdl-browser).

The plugin does not communicate with the webservice itself and does not provide any functionality to do so.
It only reads the WSDL and displays it in another tab.

## Screenshots

![Transformed WSDL](https://raw.github.com/todvora/wsdl-viewer/master/screenshots/transformed-operation-details.png)

- [Raw WSDL displayed in browser](https://raw.github.com/todvora/wsdl-viewer/master/screenshots/raw-wsdl.png)
- [Transformation applied](https://raw.github.com/todvora/wsdl-viewer/master/screenshots/transformed-wsdl.png)
- [Operation details](https://raw.github.com/todvora/wsdl-viewer/master/screenshots/transformed-operation-details.png)
- [Print preview](https://raw.github.com/todvora/wsdl-viewer/master/screenshots/print-preview.png)

## Licence
[Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0.txt)
