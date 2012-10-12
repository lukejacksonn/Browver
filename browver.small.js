function Browver(a) {
  a = a || {};
  function b(e, d, f) { return (e.exec(navigator.userAgent) || 0)[1] < (d || f) }
  b(/MSIE.(\d+)/, a.ie, 8) + b(/Firefox.(\d+)/, a.firefox, 15) + b(/Chrome.(\d+)/, a.chrome, 20) + b(/Version.(\d+)[^]*Safari/, a.safari, 5) + b(/Opera.(\d+)/, a.opera, 12) > 0 ?
  document.write('') ||
  document.write('<div style="position:fixed;top:0;left:0;bottom:0;right:0;background:#f2f2f2"><div style="position:absolute;height:250px;width:330px;left:50%;top:50%;margin-top:-135px;margin-left:-175px;"><div style="width:330px;height:100px;"><img src="http://goo.gl/71X06"/></div><div style="width:330px;height:120px;margin-top:10px"><a href="http://mozilla.org/en-US/firefox/new/"><img src="http://goo.gl/AiiKU"/></a><a href="http://support.apple.com/downloads/#safari"><img src="http://goo.gl/hCMuU"/></a><a href="http://google.com/chrome"><img src="http://goo.gl/orI1l"/></a><style type="text/css">a img{float:left;width:110px;height:110px;border:0;}</style></div></div></div>'):0;
};