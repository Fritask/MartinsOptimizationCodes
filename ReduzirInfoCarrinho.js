$(document).ready(function()
{
    $('.col-2-wrapper').each(function( i ){
        $(this).find('.cods').slice(0,2).css('display', 'none');
    });

    $('.js-voucher-validation-container').each(function( i ){
        if(!($(this).children().length > 0))
        {
            $(this).parent().css('display', 'none');
        }
    });

    // $('<a style="font-size: 16px; font-weight: bold; text-decoration: none; padding: 3px; border: 1px solid #23527C;" class="IGToggleCupomDesconto" href="javascript:void(0)"><i class="fas fa-ticket-alt"></i> Possui cupom de desconto?</a>').insertBefore('.js-voucher-respond');
    // $('<a class="IGToggleCupomDesconto" href="javascript:void(0)"><i class="fas fa-ticket-alt"></i> Possui cupom de desconto?</a>').insertBefore('.js-voucher-respond');
    $('.js-voucher-respond').before('<a class="IGToggleCupomDesconto" href="javascript:void(0)"><i class="fas fa-ticket-alt"></i> Possui cupom de desconto?</a>')
    $('.IGToggleCupomDesconto').each(function( i ){
        $(this).click(function(){
            $(this).next().toggle();
        })
    });
});

<style>
    .IGToggleCupomDesconto {
        font-size: 16px;
        font-weight: bold;
        text-decoration: none;
        padding: 3px;
        border: 1px solid #23527C;
        background-color: #FFFFFF;
        color: #23527C;
    }
    .IGToggleCupomDesconto:hover {
        background-color: #23527C;
        color: #FFFFFF;
    }

    div.box-select {
        width: fit-content;
        padding: 0px 10px;
        border: 1px solid #CCCCCC;
        border-radius: 4px;
    }
    select.selectMartins {
        border: none;
        box-shadow: none;
        margin-top: 0px;
        padding: 0px 25px 0px 0px;
    }
    .vendore-mart {
        background-color: red !important;
    }
</style>