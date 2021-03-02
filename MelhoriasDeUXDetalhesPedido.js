$(document).ready(function()
{
    //////////Alterações Gerais Desktop + Mobile + Tablet (INÍCIO)//////////
    // Alterações Optimize
    $('div.headerOrder').after('<div id="IGOrderDetailsMenu1WithBoleto" class="IGFlexContainer" style="display: none"><div style="line-height: 40px;"><a href="/martins/pt/BRL/my-account/orders" class="IGOrderDetailsButtonLinks1" style="width: 97px;"><i style="color: #F27934; margin-right: 10px" class="fas fa-arrow-left"></i><span>VOLTAR</span></a></div><div style="line-height: 40px;"><a class="IGOrderDetailsButtonLinks1 IGCTARedoOrder" style="width: 153px;"><i style="color: #F27934; margin-right: 10px" class="fas fa-redo-alt"></i><span>REFAZER PEDIDO</span></a></div><div style="line-height: 40px;"><a target="_blank" id="IGCTABoletoOrderDetailsDesktop" class="IGOrderDetailsMainButtonLinks" style="width: 160px;"><i style="margin-right: 10px" class="fas fa-barcode"></i><span>VISUALIZAR BOLETO</span></a></div><div class="IGOrderDetailsSubmenu2"><div class="IGOrderDetailsTextContent1WithBoleto"><div class="IGSideBordersGray"><span>N° do Pedido: <b class="IGNumPedido"></b></span></div></div><div class="IGOrderDetailsTextContent1WithBoleto"><div class="IGSideBordersGray"><span>Data/Hora: <b class="IGDataHoraPedido"></b></span></div></div><div class="IGOrderDetailsTextContent1WithBoleto"><span>Total: <b class="IGValorTotalPedido" style="color: #F27934"></b></span></div></div></div><div id="IGOrderDetailsMenu1" class="IGFlexContainer" style="display: none"><div style="line-height: 40px;"><a href="/martins/pt/BRL/my-account/orders" class="IGOrderDetailsButtonLinks1" style="width: 97px;"><i style="color: #F27934; margin-right: 10px" class="fas fa-arrow-left"></i><span>VOLTAR</span></a></div><div style="line-height: 40px;"><a class="IGOrderDetailsButtonLinks1 IGCTARedoOrder" style="width: 153px;"><i style="color: #F27934; margin-right: 10px" class="fas fa-redo-alt"></i><span>REFAZER PEDIDO</span></a></div><div class="IGOrderDetailsSubmenu2"><div class="IGOrderDetailsTextContent1"><div class="IGSideBordersGray"><span>N° do Pedido: <b class="IGNumPedido"></b></span></div></div><div class="IGOrderDetailsTextContent1"><div class="IGSideBordersGray"><span>Data/Hora: <b class="IGDataHoraPedido"></b></span></div></div><div class="IGOrderDetailsTextContent1"><span>Total: <b class="IGValorTotalPedido" style="color: #F27934"></b></span></div></div></div><div id="IGOrderDetailsMenu1WithBoletoMobile" style="display: none"><div id="IGOrderDetailsSubmenu1" class="IGFlexContainer" style="justify-content: center;"><div style="line-height: 40px;"><a href="/martins/pt/BRL/my-account/orders" class="IGOrderDetailsButtonLinks1" style="width: 97px;"><i style="color: #F27934; margin-right: 10px" class="fas fa-arrow-left"></i><span>VOLTAR</span></a></div><div style="line-height: 40px;"><a class="IGOrderDetailsButtonLinks1 IGCTARedoOrder" style="width: 153px;"><i style="color: #F27934; margin-right: 10px" class="fas fa-redo-alt"></i><span>REFAZER PEDIDO</span></a></div><div style="line-height: 40px;"><a target="_blank" id="IGCTABoletoOrderDetailsMobile" class="IGOrderDetailsMainButtonLinks" style="width: 160px; margin-right: 0;"><i style="margin-right: 10px" class="fas fa-barcode"></i><span>VISUALIZAR BOLETO</span></a></div></div><div class="IGFlexContainer" style="margin-top: 20px"><div class="IGOrderDetailsSubmenu2"><div class="IGOrderDetailsTextContent1WithBoleto"><div class="IGSideBordersGray"><span>N° do Pedido: <b class="IGNumPedido"></b></span></div></div><div class="IGOrderDetailsTextContent1WithBoleto"><div class="IGSideBordersGray"><span>Data/Hora: <b class="IGDataHoraPedido"></b></span></div></div><div class="IGOrderDetailsTextContent1WithBoleto"><span>Total: <b class="IGValorTotalPedido" style="color: #F27934"></b></span></div></div></div></div><div id="IGOrderDetailsMenu1Mobile" style="display: none"><div id="IGOrderDetailsSubmenu1" class="IGFlexContainer" style="justify-content: center;"><div style="line-height: 40px;"><a href="/martins/pt/BRL/my-account/orders" class="IGOrderDetailsButtonLinks1" style="width: 97px;"><i style="color: #F27934; margin-right: 10px" class="fas fa-arrow-left"></i><span>VOLTAR</span></a></div><div style="line-height: 40px;"><a class="IGOrderDetailsButtonLinks1 IGCTARedoOrder" style="width: 153px;"><i style="color: #F27934; margin-right: 10px" class="fas fa-redo-alt"></i><span>REFAZER PEDIDO</span></a></div></div><div class="IGFlexContainer" style="margin-top: 10px"><div class="IGOrderDetailsSubmenu2"><div class="IGOrderDetailsTextContent1WithBoleto"><div class="IGSideBordersGray"><span>N° do Pedido: <b class="IGNumPedido"></b></span></div></div><div class="IGOrderDetailsTextContent1WithBoleto"><div class="IGSideBordersGray"><span>Data/Hora: <b class="IGDataHoraPedido"></b></span></div></div><div class="IGOrderDetailsTextContent1WithBoleto"><span>Total: <b class="IGValorTotalPedido" style="color: #F27934"></b></span></div></div></div></div>');

    $('div.box-info').after('<div id="IGOrderDetailsMenu2" class="IGFlexContainer" style="background-color: #D2EEF8; margin-top: 20px; margin-bottom: 20px;"><div class="IGOrderDetailsTextContent2" style="width: 65%;"><div class="IGSideBordersBlue"><span>Destino de entrega: <b style="color: #00cff1; font-weight: bold;" id="IGDestinoEntregaPedido"></b></span></div></div><div class="IGOrderDetailsTextContent2" style="width: 35%;"><span>Condição de pagamento: <b style="color: #00cff1; font-weight: bold;" id="IGCPPedido"></b></span></div></div>');
    
    //Abrindo o primeiro vendor
    $('.headerVendor').first().click();

    //Edições headers de Vendors
    $('.headerVendor').each(function( i ){
        $(this).find('div.icon').css('display', 'none'); //Oculta elemento sem conteúdo
        
        //Adicionando ícone de seta e definindo seu comportamento
        if(i == 0)
        {
            $(this).append('<div style="position: absolute; top: 35%; right: 1%"><i class="fas fa-chevron-down IGToggableIcon IGSetaOpen"></i></div>');
        }
        else
        {
            $(this).append('<div style="position: absolute; top: 35%; right: 1%"><i class="fas fa-chevron-down IGToggableIcon"></i></div>');
        }
        
        $(this).click(function(e){
            let $IGHeaderVendorToggableIcon = $(this).find('.IGToggableIcon');
            if($IGHeaderVendorToggableIcon.hasClass('IGSetaOpen'))
            {
                $IGHeaderVendorToggableIcon.removeClass('IGSetaOpen');
            }
            else
            {
                $IGHeaderVendorToggableIcon.addClass('IGSetaOpen');
            }
        });
    });

    //Adiciona função ao CTA "Refazer Pedido"
    $('.IGCTARedoOrder').each(function( i ){
        $(this).click(function(){
            $('div.AccountOrderDetailsReorderComponent-MartinsReorderAction').children().first().find('button').first().click();
        });
    });

    //Muda o modal de confirmação de refazer pedido de lugar para que ele não sofra display: none
    $('#modal--reorderConfirm').appendTo('.account-cart-details');

    //Muda o(s) modal(modais) de NF de lugar para que ele(s) não sofra(m) display: none
    $('.modal--viewInvoice').each(function( i ){
        $(this).appendTo('.account-cart-details')
    });

    //Oculta campo onde ficava CTA NF
    $('.bx-cupons').children().css('display', 'none');

    //Obtem as informações: Número do Pedido, Data/Hora do Pedido e Valor do Pedido
    $('.IGNumPedido').text($('.info').slice(0,1).find('p').slice(1,2).text());
    $('.IGDataHoraPedido').text($('.info').slice(1,2).find('p').slice(1,2).text());
    $('.IGValorTotalPedido').text($('.info').slice(3,4).find('p').slice(1,2).text());

    //Obtem as informações: Destino de entrega e Condição de pagamento
    $('#IGDestinoEntregaPedido').text($('.box-info').find('div').slice(0,1).find('p').slice(1,2).text());
    $('#IGCPPedido').text($('.box-info').find('div').slice(1,2).find('p').slice(1,2).text());

    //Corrige texto de observações importantes
    let IGTxtObsOrderDetails = '<p><b>Observações importantes:</b><br>- O prazo começa a contar a partir da aprovação do pagamento.<br>- Os produtos podem ser entregues separadamente.<br>- As promoções e os totais refletem o que existia no momento do carrinho salvo.<br>- As promoções e os totais podem mudar ou não, mas se aplicarão quando o carrinho for restaurado.</p>'
    $('.orderDetails-bottom').find('div').first().html(IGTxtObsOrderDetails);

    //Layout modal de valores
    $('div.details').each(function( i ){
        $(this).find('.gr-line').last().css('background-color', '#F5F5F5');
    });
    
    //////////Alterações Gerais Desktop + Mobile + Tablet (FIM)//////////



    if ($(window).width() > 991)//////////Alterações Desktop + Tablet (INÍCIO)//////////
    {
        //Edições headers de Vendors
        $('.headerVendor').each(function( i ){
            $(this).find('div').first().after('<ul class="IGElementoStatusPlusStatusBar"></ul>'); //Criando novo elemento pai da barra de status e frase status do pedido
            $(this).find('div').slice(1,2).appendTo($(this).find('.IGElementoStatusPlusStatusBar'));
            $(this).find('div').slice(2,3).appendTo($(this).find('.IGElementoStatusPlusStatusBar'));
        });

        //Verifica se o pedido possui nota fiscal
        $('.vendors').each(function( i ){
            let $IGElementWithNFCTA = $(this).find('div').find('.bx-totals').find('.bx-cupons').children();
            if($IGElementWithNFCTA.length)
            {
                let IGElement = '<a class="IGCTANFOrderDetails IGOrderDetailsMainButtonLinks"><i style="margin-right: 10px" class="fas fa-clipboard-list"></i><span>VISUALIZAR NOTA FISCAL</span></a>';
                $(this).find('.IGElementoStatusPlusStatusBar').after(IGElement);
                $(this).find('.IGCTANFOrderDetails').click(function(e){
                    e.stopPropagation();
                    e.preventDefault();
                    $IGElementWithNFCTA.find('.boxButton').children().click();
                });

            }
        });
        
        //Layout do header da listagem de produtos
        $('.vendors .box-base-product .header-products').each(function( i ){
            $(this).find('p').css('margin', '0px').css('padding', '10px').css('border-top', '1px solid #CCCCCC');

            $(this).find('.header-table').removeClass('text-uppercase');
            $(this).find('.header-table').find('div.col-1').text('Imagem');
            $(this).find('.header-table').find('div').slice(1,7).css('border-left', '1px solid #CCCCCC');
            $(this).find('.header-table').find('div').not('.col-2').css('text-align', 'center').css('padding-left', '0px');
        });
        
        //Layout dos produtos
        $('.products-variants').each(function( i ){
            $(this).children().slice(2,6).css('border-left', '1px solid #F0F1F1').css('padding-left', '0px').css('justify-content', 'center').css('text-align', 'center');
            $(this).children().slice(4,5).find('.bx-div').css('justify-content', 'center');
        });

        if($(window).width() > 1199)//////////Alterações Desktop (INÍCIO)//////////
        {
            //Verifica se o pedido possui botão para visualizar boleto
            if($('.info').slice(2,3).children().length)
            {
                $('#IGOrderDetailsMenu1WithBoleto').css('display', 'flex');
                $('#IGCTABoletoOrderDetailsDesktop').attr('href', $('.info').slice(2,3).children().children().attr('href'));
            }
            else
            {
                $('#IGOrderDetailsMenu1').css('display', 'flex');
            }
        }//////////Alterações Desktop (FIM)//////////
        else//////////Alterações Tablet (INÍCIO)//////////
        {
            //Verifica se o pedido possui botão para visualizar boleto
            if($('.info').slice(2,3).children().length)
            {
                $('#IGOrderDetailsMenu1WithBoletoMobile').css('display', 'block');
                $('#IGCTABoletoOrderDetailsMobile').attr('href', $('.info').slice(2,3).children().children().attr('href'));
            }
            else
            {
                $('#IGOrderDetailsMenu1Mobile').css('display', 'block');
            }
        }//////////Alterações Tablet (FIM)//////////
    }//////////Alterações Desktop + Tablet (FIM)//////////
    else//////////Alterações Mobile (INÍCIO)//////////
    {
        //Verifica se o pedido possui nota fiscal
        $('.vendors').each(function( i ){
            let $IGElementWithNFCTA = $(this).find('div').find('.bx-totals').find('.bx-cupons').children();
            if($IGElementWithNFCTA.length)
            {
                let IGElement = '<a class="IGCTANFOrderDetails IGOrderDetailsMainButtonLinks"><i style="margin-right: 10px" class="fas fa-clipboard-list"></i><span>VISUALIZAR NOTA FISCAL</span></a>';
                $(this).find('.headerVendor').append(IGElement);
                $(this).find('.IGCTANFOrderDetails').click(function(e){
                    e.stopPropagation();
                    e.preventDefault();
                    $IGElementWithNFCTA.find('.boxButton').children().click();
                });

            }
        });

        //Layout do header da listagem de produtos
        $('.vendors .box-base-product .header-products').each(function( i ){
            $(this).find('p').css('margin', '0px').css('padding', '10px').css('border-top', '1px solid #CCCCCC').css('border-bottom', '1px solid #CCCCCC');
        });

        //Verifica se o pedido possui botão para visualizar boleto
        if($('.info').slice(2,3).children().length)
        {
            $('#IGOrderDetailsMenu1WithBoletoMobile').css('display', 'block');
            $('#IGCTABoletoOrderDetailsMobile').attr('href', $('.info').slice(2,3).children().children().attr('href'));
        }
        else
        {
            $('#IGOrderDetailsMenu1Mobile').css('display', 'block');
        }
    }//////////Alterações Mobile (FIM)//////////
});

<style>.IGCTANFOrderDetails{margin-top:auto;margin-bottom:auto;margin-left:25px}.vendors .box-base-product .header-products{padding:0!important}.vendors .box-base-product .header-products .header-table{padding:10px;background-color:#f0f1f1;border-top:1px solid #ccc;border-bottom:1px solid #ccc}.IGToggableIcon{transform:rotate(0);transition:transform .3s ease}.IGToggableIcon.IGSetaOpen{transform:rotate(180deg);transition:transform .3s ease}div.details{border:1px solid #ccc;border-radius:5px;padding-top:10px}.IGOrderDetailsSubmenu2{display:flex;flex-wrap:nowrap;height:40px}.headerVendor{position:relative}.headerOrder,div.box-info,.comments{display:none !important}.barStatus,.nivel{height:10px!important}.orderStatus .barStatus .nivel{position:static!important}.orderStatus.w1 .nivel::after,.orderStatus.w2 .nivel::after,.orderStatus.w3 .nivel::after{display:none!important}.accountActions-bottom{display:none}.IGElementoStatusPlusStatusBar{list-style-type:none;width:738px;margin:0;padding:0}.IGFlexContainer{display:flex;flex-wrap:nowrap;width:1140px;margin:auto;border-radius:0!important}.IGOrderDetailsButtonLinks1{font-weight:700;color:#004282;background-color:#fff;border:1px solid #004282;text-decoration:none!important;cursor:pointer;margin-right:15px;height:40px;padding:10px}.IGOrderDetailsButtonLinks1:hover{background-color:#004282;color:#fff}.IGOrderDetailsMainButtonLinks,.IGOrderDetailsMainButtonLinks:focus{font-weight:700;color:#fff;background-color:#004282;border:1px solid #004282;text-decoration:none!important;cursor:pointer;margin-right:15px;height:40px;padding:10px}.IGOrderDetailsMainButtonLinks:hover{background-color:#fff;color:#004282}.IGOrderDetailsTextContent1{width:287px;padding:10px 10px 10px 20px;color:#525252;background-color:#f0f1f1;position:relative}.IGOrderDetailsTextContent1WithBoleto{width:225px;padding:10px 10px 10px 20px;color:#525252;background-color:#f0f1f1;position:relative}.IGOrderDetailsTextContent2{padding:10px 10px 10px 20px;color:#525252;position:relative}.IGSideBordersGray:after{content:"";border-right:1px solid #ccc;position:absolute;right:0;height:45%}.IGSideBordersBlue:after{content:"";border-right:1px solid #3485c2;position:absolute;right:0;height:45%}@media only screen and (max-width:1199px){.IGFlexContainer{width:940px}.IGOrderDetailsTextContent1WithBoleto{width:calc(940px/3);padding:10px}#IGOrderDetailsMenu2{display:block;text-align:center}.IGOrderDetailsTextContent2{width:100%!important}.IGSideBordersBlue:after{display:none}.IGElementoStatusPlusStatusBar{width:538px}.orderStatus .headerStatus>div{font-size:12px}}@media only screen and (max-width:991px){.IGFlexContainer{width:720px;font-size:12px}.IGOrderDetailsTextContent1WithBoleto{width:calc(720px/3)}.IGCTANFOrderDetails{position:absolute;right:0;bottom:0;font-size:12px}}@media only screen and (max-width:767px){.IGFlexContainer{width:calc(100vw - 30px)}.IGOrderDetailsTextContent1WithBoleto{width:calc((100vw - 30px)/ 3)}}@media only screen and (max-width:560px){.IGOrderDetailsSubmenu2{display:block;height:auto;text-align:center;width:100%}.IGOrderDetailsTextContent1WithBoleto{width:calc(100% - 130px);border:1px solid #ccc;margin-left:auto;margin-right:auto}.IGSideBordersGray:after{display:none}}@media only screen and (max-width:450px){#IGOrderDetailsSubmenu1{display:block!important}#IGOrderDetailsSubmenu1>div{line-height:initial!important;text-align:center}#IGCTABoletoOrderDetailsMobile,.IGOrderDetailsButtonLinks1{width:calc(100% - 130px)!important;display:inline-block}.IGOrderDetailsButtonLinks1{margin:0 0 15px 0!important}}@media only screen and (max-width:375px){.IGCTANFOrderDetails{right:-10px;margin-right:0}}</style>