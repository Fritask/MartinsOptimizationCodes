$(document).ready(function()
{
    // div class prazo de entrega = "detailProd"
    var IGNumber = [];
    $(".detailProd").css('display', 'none');
    $(".qd2").css('margin', 'auto 0px 10px');
    $(".qd2").css('width', 'auto');
    $(".boxQtde").css('max-width', '71px');
    // $(".popover-mart-container .icon-blue").css('padding-top', '35px');
    $(".popover-mart-container").css('padding-top', '30px');
    // var IGElementoClassqdValue = document.getElementsByClassName("qdValue");
    // var IGPrecosProdutosPlus2Pct = document.getElementsByClassName("value");
    $(".qdValue .value").each(function( i ){
        // let tempStr = $(this).find("span").innerText;
        // let tempStr = $(this).innerText;
        var tempStr = this.innerText;
        var tempVar = tempStr.substring(3, tempStr.length);
        IGNumber[i] = parseFloat(tempVar);
        IGNumber[i] = IGNumber + (IGNumber * 0.02);
        debugger;
    });
    $(".qdValue .value").each(function( i ){
        // let tempStr = $(this).find("span").innerText;
        // let tempStr = $(this).innerText;
        // let tempStr = this.innerText;
        // debugger;
        // let tempVar = tempStr.substring(3, tempStr.length);
        // let IGNumber = parseFloat(tempVar);
        // IGNumber = IGNumber + (IGNumber * 0.02);
        let tempHtml = '<p style="font-size: 13px; color: #525252; margin-top: 10px; margin-bottom: 0px">De: R$ <del>' + IGNumber[i] + '</devl></p><p style="font-size: 13px; color: #525252; display: inline">Por:</p>';
        debugger;
        $(this).prepend(tempHtml);
    });
    // for(i = 0; i < IGPrecosProdutosPlus2Pct.length; i++)
    // {
    //     let tempStr = document.getElementsByClassName("value")[i].children[0].innerHTML;
    //     let tempVar = tempStr.substring(3, tempStr.length);
    //     let tempHtml = '<p style="font-size: 12px; color: #000000; display: inline">De: ' + tempVar + '</p>';
    //     IGPrecosProdutosPlus2Pct[i].prepend(tempHtml);
    // }
    // $(".qdValue .value").prepend('<p style="font-size: 12px; color: #000000; display: inline">Por:</p>');
    // $("#qtd").css('margin-left', '0px');
    // $("#qtd").css('margin-right', '0px');
    // document.getElementById("qtd").style.margin = "auto 0px";
});

<div class="qdValue" data-gtm-vis-recent-on-screen-10258651_362="5852" data-gtm-vis-first-on-screen-10258651_362="5852" data-gtm-vis-total-visible-time-10258651_362="100" data-gtm-vis-has-fired-10258651_362="1" style="">
    <div class="value" data-gtm-vis-recent-on-screen-10258651_362="5863" data-gtm-vis-first-on-screen-10258651_362="5863" data-gtm-vis-total-visible-time-10258651_362="100" data-gtm-vis-has-fired-10258651_362="1">
        <span>R$ 26,39</span>
<span class="popover-mart-container">
    <i class="icon-info-circle icon-blue" data-toggle="popover-mart" data-original-title="" title=""></i>
    <div class="popover" role="tooltip">
        <div>
            <div class="gr-line">
                <span>
                    <i class="icon-angle-double-right bright"></i>
                    <b>Preço unitário: R$ 4,40</b>
                </span>
            </div>
            
            <div class="gr-line">
                <span>
                    <i class="icon-angle-double-right bright"></i>
                    <b>Preço embalagem (6 unid.): R$ 26,39</b>
                </span>
            </div>
            
            
                <div class="gr-line">
                    <span>
                        <i class="icon-angle-double-right bright"></i>
                        <div><b>Preço caixa fechada: (8 Emb.): R$ 202,08</b> <br> <span class="ml"> (Desconto: R$ 1,13 a embalagem) </span></div>
                    </span>
                </div>
            
            
            
        </div>
    </div>
</span></div>
								<p class="detailProd">
									A embalagem Entrega em até 6 dias</p>
							</div>