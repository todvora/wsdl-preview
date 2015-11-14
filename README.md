# WSDL Preview
Firefox plugin to display [WSDL](https://en.wikipedia.org/wiki/Web_Services_Description_Language) files in a human readable form.

## What is WSDL
WSDL file is XML descriptor of a web service. It describes all available methods and their
data types, restrictions, possible values.

But XML used to describe computer-computer communication is often very hard to read for humans.
The WSDL browser plugin tries to solve this issue by providing human-readable view.

## XSLT Transformation
The WSDL -> HTML transformation is based on excellent [WSDL viewer](http://tomi.vanek.sk/index.php?page=wsdl-preview)
project (Apache 2.0 licence) by [Tomi Vanek](https://twitter.com/tomivanek1). There are some
minor modifications due to the nature of this Firefox plugin (extracted styles) and due
to formatting of results page (added CSS ids and classes).

## Usage
This plugin adds icon [![Transformed WSDL](https://raw.github.com/todvora/wsdl-preview/master/data/icon-16.png)] to your browser menu bar. Navigate to a site with WSDL document and press this icon. New tab will be opened with a human readable preview of WSDL. You can also easily print this page.

## Screenshots

![Transformed WSDL](https://raw.github.com/todvora/wsdl-preview/master/screenshots/transformed-operation-details.png)

- [Raw WSDL displayed in browser](https://raw.github.com/todvora/wsdl-preview/master/screenshots/raw-wsdl.png)
- [Transformation applied](https://raw.github.com/todvora/wsdl-preview/master/screenshots/transformed-wsdl.png)
- [Operation details](https://raw.github.com/todvora/wsdl-preview/master/screenshots/transformed-operation-details.png)
- [Print preview](https://raw.github.com/todvora/wsdl-preview/master/screenshots/print-preview.png)

## Example WSDLs to test

On following URLs is possible to test and preview plugin functionality:
- https://webservices.amazon.com/AWSECommerceService/AWSECommerceService.wsdl
- http://api.search.live.net/search.wsdl
- http://www.w3.org/2002/ws/databinding/edcopy/collection/cache/AWS-AmazonWebServices.xml
- http://www.w3schools.com/webservices/tempconvert.asmx?WSDL

## Privacy Policy
The plugin neither use any external resources nor sends anywhere the WSDLs itself. The XSLT transformation is stored locally and
executed also locally in your browser. There is no usage of tracking, ping or calling home. It should be safe to use the plugin for exploring
private, company internal or unpublished WSDLs. The complete source codes are provided on [github.com/todvora/wsdl-preview](https://github.com/todvora/wsdl-preview).

The plugin does not communicate with the webservice itself and does not provide any functionality to do so. It only reads the WSDL and displays it in another tab.

## Licence
[Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0.txt)
