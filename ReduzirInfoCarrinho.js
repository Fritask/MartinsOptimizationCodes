$(document).ready(function()
{
    $('.cods').css('display', 'none');

    $('.js-voucher-validation-container').each(function( i ){
        if(!($(this).children().length > 0))
        {
            $(this).parent().css('display', 'none');
        }
    });

    $('<a style="font-size: 16px; font-weight: bold; text-decoration: none; padding: 3px; border: 1px solid #23527C;" class="IGToggleCupomDesconto" href="javascript:void(0)"><i class="fas fa-ticket-alt"></i> Possui cupom de desconto?</a>').insertBefore('.js-voucher-respond');
    $('.IGToggleCupomDesconto').each(function( i ){
        $(this).click(function(){
            $(this).next().toggle();
        })
    }).mouseover(function(){
        $(this).css('background-color', '#23527C').css('color', '#ffffff');
    }).mouseout(function(){
        $(this).css('background-color', '#ffffff').css('color', '#23527C');
    });
});