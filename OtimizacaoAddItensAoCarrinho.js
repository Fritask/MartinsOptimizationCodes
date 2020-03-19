$(document).ready(function()
{
    var IGDivCLassDispoProds = document.getElementsByClassName("products")[0];

    IGOtimizacaoAddItensCarinho = function()
    {

        if(!(IGDivCLassDispoProds.classList.contains("listNoImage")) && !(IGDivCLassDispoProds.classList.contains("list")))
        {
            $(".product").each(function( i ){

                var IGCTACardPLP = $(this).children('div').children('form').children('div.action-to-buy').children('div').children('button');
                if(IGCTACardPLP.is(":visible"))
                {
                    if(IGCTACardPLP.text() == " COMPRAR")
                    {
                        $(this).append('<a class="IGAddToCartButton" href="javascript:void(0)" style="width: 51.75px; height: 45px; background-color: #004282; color: #ffffff; position: absolute; bottom: 0; right: 0"><i style="padding-top: 15px;" class="fas fa-shopping-cart"></i></a>');
                        IGCTACardPLP.css('visibility', 'hidden');
                        $(this).find('.IGAddToCartButton').click(function(){
                            IGCTACardPLP.click();
                        }).mouseover(function( event ){
                            $(this).stop().css('background-color', '#F27934').animate({
                                width: "100%"
                            }, 200, function(){
                                $(this).children().replaceWith('<i style="padding-top: 15px;" class="fas fa-shopping-cart"><p style="font-family: SegoeUI, sans-serif; display: inline"> ADICIONAR AO CARRINHO</p></i>');
                            });
                        }).mouseout(function( event ){
                            $(this).stop().css('background-color', '#004282').animate({
                                width: "51.75px"
                            }, 200, function(){
                                $(this).children().replaceWith('<i style="padding-top: 15px;" class="fas fa-shopping-cart"></i>');
                            });
                        });
                    }
                }
            });
        }

    };
    IGOtimizacaoAddItensCarinho();

    $("#xtt-load-more-button").click(function(){
        setTimeout(function(){
            IGOtimizacaoAddItensCarinho();
        }, 4400);
    });

});