function browver(i,f,c,s) {

	i = i || 8;
	f = f || 3.6;
	c = c || 10;
	s = s || 4;
		
	var ie = (function () {
	    var undef, v = 3, div = document.createElement('div');
	    while (
	        div.innerHTML = '<!--[if gt IE '+(++v)+']><i></i><![endif]-->',
	        div.getElementsByTagName('i')[0]
	    );
	    return v > 4 ? parseInt(v) : 0;
	}());
	
	var iev = ie >= i;
	
	var ff = navigator.userAgent.indexOf('Firefox') != -1 && parseFloat(navigator.userAgent.substring(navigator.userAgent.indexOf('Firefox') + 8)) >= f;
	
	var ch = navigator.userAgent.indexOf('Chrome') != -1 && parseFloat(navigator.userAgent.substring(navigator.userAgent.indexOf('Chrome') + 7).split(' ')[0]) >= c;
	
	var sf = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Version') != -1 && parseFloat(navigator.userAgent.substring(navigator.userAgent.indexOf('Version') + 8).split(' ')[0]) >= s;
	
		
	if(!(ff||ch||sf||iev))
	{
	 	document.write("");
	 	document.write("<div style='position:fixed;top:0;left:0;bottom:0;right:0;background:#f2f2f2'><div style='position:absolute;height:250px;width:330px;left:50%;top:50%;margin-top:-135px;margin-left:-175px;'><div style='width:330px;height:100px;'><img src='http://goo.gl/71X06'/></div><div style='width:330px;height:120px;margin-top:10px'><a href='http://mozilla.org/en-US/firefox/new/'><img src='http://goo.gl/AiiKU' style='float:left;width:110px;height:110px;border:0;'/></a><a href='http://support.apple.com/downloads/#safari'><img src='http://goo.gl/hCMuU' style='float:left;width:110px;height:110px;border:0;'/></a><a href='http://google.com/chrome'><img src='http://goo.gl/orI1l' style='float:left;width:110px;height:110px;border:0;'/></a></div></div></div>");	 	
	}
}