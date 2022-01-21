var name = "cookieTestOptimize=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
        if (c.substring(name.length, c.length) == "1") {
            return true;
        }
    }
  }
  return false;



var name = "martins-user-data=";
var decodedCookie = decodeURIComponent(document.cookie);
var ca = decodedCookie.split(';');
for(var i = 0; i <ca.length; i++) {
	var c = ca[i];
	while (c.charAt(0) == ' ') {
		c = c.substring(1);
	}
	if (c.indexOf(name) == 0) {
		let IGSubstr = c.substring(name.length, c.length);
		if (IGSubstr.includes('commercialActivity":99')) {
			alert('cpf');
		}
	}
}

var name = "martins-user-data=";
var decodedCookie = decodeURIComponent(document.cookie);
var ca = decodedCookie.split(';');
for(var i = 0; i <ca.length; i++) {
	var c = ca[i];
	while (c.charAt(0) == ' ') {
		c = c.substring(1);
	}
	if (c.indexOf(name) == 0) {
		let IGSubstr = c.substring(name.length, c.length);
		if (IGSubstr.includes('bu":1') || IGSubstr.includes('bu":3')) {
			alert('cpf');
		}
	}
}

var name = "martins-user-data=";
var decodedCookie = decodeURIComponent(document.cookie);
var ca = decodedCookie.split(';');
for(var i = 0; i <ca.length; i++) {
	var c = ca[i];
	while (c.charAt(0) == ' ') {
		c = c.substring(1);
	}
	if (c.indexOf(name) == 0) {
		let IGSubstr = c.substring(name.length, c.length);
		if (IGSubstr.includes('bu":1') || IGSubstr.includes('bu":3')) {
			$('#IGFooterMarcas').addClass('IGTeste');
		}
	}
}
