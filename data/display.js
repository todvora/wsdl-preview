// Receives the XML data and XSLT transformation in options, runs the conversion
// and puts the result in 'container' element of the wsdl-viewer.html

var xsltText = self.options.xsl;
var wsdl = self.options.wsdl;
var css = self.options.css;

var xsltProcessor = new XSLTProcessor();
var domParser = new DOMParser();
var xsltDoc = domParser.parseFromString(xsltText, 'text/xml');

xsltProcessor.importStylesheet(xsltDoc);

var xmlDoc = domParser.parseFromString(wsdl, 'text/xml');
var fragment = xsltProcessor.transformToFragment(xmlDoc, document);

document.getElementById('container').appendChild(fragment);

var head = document.head;
var style = document.createElement('style');

style.type = 'text/css';
style.appendChild(document.createTextNode(css));
head.appendChild(style);
