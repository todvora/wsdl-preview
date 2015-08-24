// Reads the XML data and forwards them back to the index.js script.

var rootTag = document.firstChild.tagName;
if(typeof rootTag !== 'undefined' && rootTag.indexOf('definitions') !== -1) {
  // the page seems to contain WSDL definition.
  payload = self.postMessage((new XMLSerializer()).serializeToString(document));
} else {
  alert('The selected page does not match expected WSDL format.');
}
