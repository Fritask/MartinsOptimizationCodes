$(document).ready(function()
{
    $(".product").each(function( i ){
        // $(this).$('div').$('form').attr('id');
        // $(this).$('div').$('form').$('div.action-to-buy').$('div button').click();
        $(this).append('<a class="IGAddToCartButton" href="javascript:void(0)" style="padding: 12px; background-color: #004282; color: #ffffff; position: absolute; bottom: 0; right: 0"><i class="fas fa-shopping-cart"></i></a>');
        $(this).find('.IGAddToCartButton').click(function(){
            // $(this).find('div').find('form').find('div.action-to-buy').find('div button').click();
            $(this).find('div').find('form').find('div.action-to-buy').find('div').find('button').css('background-color', 'red');
        });
    });




    

    var x9884787252 = document.getElementsByClassName('boxButton');
    debugger;
    console.log(x9884787252);
    // $('.icon-lorry').css('display', 'none');
    $('div.boxButton button').css('visibility', 'hidden');
    // $('div.boxButton button').css('visibility', 'hidden').css('width', '0').css('height', '0').css('margin', '0').css('padding', '0');
    $('div.boxButton button i').css('visibility', 'visible');

    // $('div.boxButton button').text('').append('<i class="fas fa-shopping-cart"></i>');
    // $('.cods').css('display', 'none');
    // $('.js-voucher-respond').css('display', 'none');
    // $('<a style="font-size: 16px; font-weight: bold; text-decoration: none; padding: 3px; border: 1px solid #23527C;" class="IGToggleCupomDesconto" href="javascript:void(0)"><i class="fas fa-ticket-alt"></i> Possui cupom de desconto?</a>').insertBefore('.js-voucher-respond');
    // $('.IGToggleCupomDesconto').each(function( i ){
    //     $(this).click(function(){
    //         $(this).next().toggle();
    //     })
    // }).mouseover(function(){
    //     $(this).css('background-color', '#23527C').css('color', '#ffffff');
    // }).mouseout(function(){
    //     $(this).css('background-color', '#ffffff').css('color', '#23527C');
    // });
    $('#IGTESTETESTE22223254').click(function(){
        var teste5665161 = document.getElementsByClassName("boxButton");
        $("div.boxButton button").first().click();
    })
});

<button onclick="document.getElementsByClassName('boxButton')[3].click()">aaaaaa</button>
<button onclick="document.getElementsByClassName('boxButton')[3].click()">aaaaaa</button>

add-to-cart--martins_1601448