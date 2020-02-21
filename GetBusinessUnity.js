$(document).ready(function()
{
    var IGBusinessUnityUser;
    function IGGetCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
            c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
            }
        }
        return "";
    }
    var cookieUserData = IGGetCookie("martins-user-data");

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
    var IGEstadoCliente = arrayInfoUsuario[22].substring(9, (arrayInfoUsuario[22].length));
    // document.getElementById("IGTesteUserInfo").innerText = IGBusinessUnityUser;
    // document.getElementById("IGPecaBanner1").src = "http://b.martins.com.br/Conteudo/Banner/EmailMarketing/banner1-" + IGEstadoCliente + "-" + IGBusinessUnityUser;

    console.log(IGBusinessUnityUser);

    // if (IGBusinessUnityUser == 1)
    // {
    //     alert("Varejo Alimentar");
    // }
    // else if (IGBusinessUnityUser == 2)
    // {
    //     alert("Eletro");
    // }
    // else if (IGBusinessUnityUser == 3)
    // {
    //     alert("Martcon");
    // }
    // else if (IGBusinessUnityUser == 4)
    // {
    //     alert("Farma Nacional");
    // }
    // else if (IGBusinessUnityUser == 5)
    // {
    //     alert("Informática");
    // }
    // else if (IGBusinessUnityUser == 7)
    // {
    //     alert("Atacado");
    // }
    // else if (IGBusinessUnityUser == 8)
    // {
    //     alert("Pessoa Física");
    // }
    // else if (IGBusinessUnityUser == 9)
    // {
    //     alert("Veterinário");
    // }
    // else if (IGBusinessUnityUser == 10)
    // {
    //     alert("Smart");
    // }
});