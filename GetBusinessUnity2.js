var IGGetBusinessUnity = function()
{
    var cname = "martins-user-data";
    var cookieUserData;
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            cookieUserData = c.substring(name.length, c.length);
            break;
        }
        cookieUserData = "";
    }

    var arrayInfoUsuario = [];
    var posArrayInfoUsuario = 0;
    var eachInfoArrayUsuario = "";

    for (var i = 2; i < cookieUserData.length; i++)
    {
        if (cookieUserData[i] != '{' && cookieUserData[i] != '}' && cookieUserData[i] != '"' && cookieUserData[i] != '\\' && cookieUserData[i] != ',')
        {
            eachInfoArrayUsuario = eachInfoArrayUsuario + cookieUserData[i];
        }
        if (cookieUserData[i] == ',' || cookieUserData[i] == '{')
        {
            arrayInfoUsuario[posArrayInfoUsuario] = eachInfoArrayUsuario;
            eachInfoArrayUsuario = "";
            posArrayInfoUsuario++;
        }
    }

    var IGBusinessUnityUser = arrayInfoUsuario[24].substring(3, (arrayInfoUsuario[1].length));

    return IGBusinessUnityUser;
}