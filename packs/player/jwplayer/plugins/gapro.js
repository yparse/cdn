!function(n){function e(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return n[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var t={};e.m=n,e.c=t,e.i=function(n){return n},e.d=function(n,t,o){e.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:o})},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},e.p="",e(e.s=1)}([function(n,e){n.exports={version:"2.0.2",minPlayerVersion:"7.0.0"}},function(n,e,t){var o,i;o=[t(0)],void 0!==(i=function(n){var e={gtag:"gtag",trackingobject:"_gaq",universalga:"ga",idstring:"file",label:"file"},t=function(n,t){function o(){return window[y.universalga]?(s||(s={push:function(n){var e=window[y.universalga];n.splice(0,1,"send","event"),n[5]={nonInteraction:n[6]},n.length=6,e.apply(window,n)}}),s):"string"==typeof y.trackingobject?window[y.trackingobject]:y.trackingobject}function i(n,e){return n?e&&n[e]&&n[e].length?"file"===e?p.getAbsolutePath(n[e]):n[e]:n.file?n.file:n.sources?a(n.sources):"":""}function a(n){for(var e=[],t=n.length-1;t--;)n[t].file&&e.push(n[t].file);return e.sort(),p.getAbsolutePath(e[0])}function r(n,e){var t="",i="function"==typeof y.gtag?y.gtag:window[y.gtag];b||(i?(t="gtag",c(i,"JW Player Video",n,f.label,e)):void 0!==o()._trackEvent?(t="sync",u("JW Player Video",n,f.label,e)):void 0!==o().push&&(t="async",l("JW Player Video",n,f.label,e)),w({type:t,category:"JW Player Video",action:n,label:f.label,nonInteraction:e}))}function l(n,e,t,i){o().push(["_trackEvent",n,e,t,void 0,i])}function u(n,e,t,i){o()._trackEvent(n,e,t,void 0,i)}function c(n,e,t,o,i){n("event",t,{event_category:e,event_label:o,event_action:t,non_interaction:i})}var s,f,g,p=n.utils,d=n._,y=d.extend({},e,t),v=n,b=!1,w=p.noop;if(t.debug&&d.isFunction(t.onGaTrack)&&(w=t.onGaTrack),("string"!=typeof y.gtag||void 0===window[y.gtag])&&"function"!=typeof y.gtag){var P=o();if(!P||"string"==typeof P)return void p.log("Could not find Google Analytics Interface.")}!function(){n.on("playlistItem",function(e){f=d.extend({played:!1},v.getPlaylistItem(e.index)),f.label=i(n.getPlaylistItem(e.index),y.label),f.mediaID=i(n.getPlaylistItem(e.index),y.idstring)}),n.on("play",function(n){f.played?"paused"===g&&r("Resume","interaction"!==n.playReason):(f.played=!0,r("Play","interaction"!==n.playReason)),g="playing"}),n.on("buffer",function(){r("Buffer",!0),g="buffering"}),n.on("pause",function(n){r("Pause","interaction"!==n.pauseReason),g="paused"}),n.on("seek",function(){r("Seek",!0)}),n.on("complete",function(){r("Complete",!0)}),n.on("cast",function(n){b=!!n.active})}()};t.version=n.version,(window.jwplayerPluginJsonp||window.jwplayer().registerPlugin)("gapro",n.minPlayerVersion,t)}.apply(e,o))&&(n.exports=i)}]);