'use strict';

var buttons = require('sdk/ui/button/action');
var self = require('sdk/self');
var tabs = require('sdk/tabs');

function onNewTabReady(tab, wsdlContent) {
  var transformation = self.data.load('wsdl-viewer.xsl');
  var cssStyles = self.data.load('styles.css'); // embed the css style into the page itself to allow easy 'save as'
  tab.attach({
    contentScriptFile: self.data.url('display.js'),
    contentScriptOptions: {
      xsl: transformation,
      wsdl: wsdlContent,
      css: cssStyles
    }
  });
}

function onWsdlRead(wsdlContent) {
  tabs.open({
    url: self.data.url('wsdl-browser.html'),
    onReady: function(tab) {
      onNewTabReady(tab, wsdlContent);
    }
  });
}

function onButtonClick() {
  tabs.activeTab.attach({
    contentScriptFile: self.data.url('readpage.js'),
    onMessage: onWsdlRead
  });
}

buttons.ActionButton({
  id: 'wsdl-browser-button',
  label: 'Open WSDL Browser',
  icon: {
    '16': './icon-16.png',
    '32': './icon-32.png',
    '64': './icon-64.png'
  },
  onClick: onButtonClick
});
