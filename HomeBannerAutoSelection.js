$(document).ready(function()
{
    var slideAtual = 1;
    var qtdSlides;
    var i;
    var IGConjuntoLinksImagensBanners = new Set();
    var IGDicionarioLinksBanner = new Object();
    var IGArrayLinksImagensBanners = [];

    Object.size = function(obj) {
        var size = 0, key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) size++;
        }
        return size;
    };

    IGGetQtdSlides = function()
    {
        var teste = document.getElementsByClassName("slick-track");
        var IGArraySlideElements = teste[0].getElementsByClassName("classBanner slick-slide");
        var ijk = 0;
        
        for (var i = 0; i < IGArraySlideElements.length; i++)
        {
            var IGTemp = IGArraySlideElements[i].children[0].src;
            IGDicionarioLinksBanner[IGTemp] = IGArraySlideElements[i].href;

            IGConjuntoLinksImagensBanners.add(IGTemp);
        }
        var IGDictSize = Object.size(IGDicionarioLinksBanner);
        for (ijk = 0; ijk < IGDictSize; ijk++)
        {
            IGArrayLinksImagensBanners[ijk] = Object.keys(IGDicionarioLinksBanner)[ijk];
        }
        
        qtdSlides = IGConjuntoLinksImagensBanners.size;
    };

    IGGetQtdSlides();
    // qtdSlides = 6;

    IGMontarBanners = function()
    {
        for(var i = 0; i < qtdSlides; i++)
        {
            $('#IGContainerSlides').append('<div id="IGSlide' + (i+1) + '" name="IGSlides" class="mySlides IGfade"><a href="'+ IGDicionarioLinksBanner[IGArrayLinksImagensBanners[i]] +'"><img id="IGPecaBanner2" class="IGBanner" src="' + IGArrayLinksImagensBanners[i] + '"></a></div>');
        }
        $('#IGContainerSlides').append('<a class="IGPrevSlideButton" onclick="IGAntSlide()">&#10094;</a><a class="IGNextSlideButton" onclick="IGProxSlide()">&#10095;</a><div id="IGDots" class="IGDots"></div>');
    };

    IGMontarBanners();

    IGProxSlide = function()
    {
        if (slideAtual < qtdSlides)
        {
            IGShowSlide(slideAtual + 1);
        }
        else
        {
            IGShowSlide(1);
        }
    };

    var IGTimeOut = setTimeout(IGProxSlide, 5000);

    var IGFunctTempStop = function()
    {
        $(document.getElementById("IGprogressBar2")).stop();
    };

    var IGFunctTemp = function()
    {
        var IGElementoBar = document.getElementById("IGprogressBar1");

        $(document.getElementById("IGprogressBar2")).animate({width: 0 }, 0, 'linear');

            $(document.getElementById("IGprogressBar2")).animate({width: IGElementoBar.offsetWidth }, 5000, 'linear');
    };

    IGAntSlide = function()
    {
        if (slideAtual > 1)
        {
            IGShowSlide(slideAtual - 1);
        }
        else
        {
            IGShowSlide(qtdSlides);
        }
    };

    IGAddBotoesSlides = function()
    {
        for(var i = 0; i < qtdSlides; i++)
        {
            var IGDotId = "#IGDot" + (i+1);
            $('#IGDots').append('<span id="IGDot'+ (i+1) +'" class="dot"></span>');
        }
    };

    IGAddBotoesSlides();

    IGShowSlide = function(slide)
    {
        IGFunctTempStop();
        IGFunctTemp();

        for(i = 0; i < qtdSlides; i++)
        {
            document.getElementById("IGDot"+(i+1)).classList = "dot";
        }

        for (i = 0; i < qtdSlides; i++)
        {
            if (slide == (i+1))
            {
                document.getElementById("IGDot" + slide).classList.add("active");
            }
        }

        document.getElementById("IGSlide" + slideAtual).style.display = "none";
        document.getElementById("IGSlide" + slide).style.display = "block";
        
        slideAtual = slide;

        clearTimeout(IGTimeOut);
        IGTimeOut = setTimeout(function(){
            IGProxSlide();
        }, 5000);
        
    };

    //INÍCIO - Adicionando click aos botões de cada banner
    function IGgenerate_handler( j ) {
        return function(event) { 
            IGShowSlide(j);
        };
    }
    
    for(var i = 0; i < qtdSlides; i++)
    {
        var IGDotId = "#IGDot" + (i+1);
        $(IGDotId).click(IGgenerate_handler( i+1 ));
    }
    //FIM - Adicionando click aos botões de cada banner

    IGShowSlide(slideAtual);
});