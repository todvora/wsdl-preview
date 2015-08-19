var xsltText = self.options.xsl;
var wsdl = self.options.wsdl;
var css = self.options.css;

var xsltDoc = new DOMParser().parseFromString(xsltText, "text/xml");

var xsltProcessor = new XSLTProcessor();
xsltProcessor.importStylesheet(xsltDoc);

var xmlDoc = new DOMParser().parseFromString(wsdl, "text/xml");
var fragment = xsltProcessor.transformToFragment(xmlDoc, document);

document.getElementById("container").appendChild(fragment);

var head = document.head;
var style = document.createElement('style');

style.type = 'text/css';
if (style.styleSheet){
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
}

head.appendChild(style);
