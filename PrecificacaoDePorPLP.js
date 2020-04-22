$(document).ready(function()
{
    var IGNumber = [];
    var IGDivCLassDispoProds = document.getElementsByClassName("products")[0];
    IGAddPrecificacaoDePor = function()
    {

        if(IGDivCLassDispoProds.classList.contains("listNoImage") || IGDivCLassDispoProds.classList.contains("list"))
        {
            $(".product a").css('max-width', '550px');
            $(".details").css('width', 'calc((100%/3)*1)');
            $(".qdValue").css('text-align', 'center');
        }
        else
        {
            $(".detailProd").css('display', 'none');
            $(".qd2").css('margin', 'auto 0px 10px').css('width', 'auto');
            $(".boxQtde").css('max-width', '71px');
            $(".popover-mart-container").css('padding-top', '28px');
        }
        
        var IGPrecosProdutosPlus2Pct = document.getElementsByClassName("value");

        for (var i = 0; i < IGPrecosProdutosPlus2Pct.length; i++)
        {
            var tempStr = IGPrecosProdutosPlus2Pct[i].innerText;
            var tempVar = tempStr.substring(3, tempStr.length);
            if(tempVar.includes("."))
            {
                tempVar = tempVar.replace(".", "");
            }
            tempVar = tempVar.replace(",", ".");
            tempVar = parseFloat(tempVar).toFixed(2);
            IGNumber[i] = tempVar;
        }
        
        $(".qdValue .value").each(function( i ){
            var tempHtml;
            if (IGNumber[i] != "NaN")
            {
                var IGTempVar = (parseFloat(IGNumber[i]) + (IGNumber[i] * 0.02)).toFixed(2);
                IGTempVar = String(IGTempVar);
                IGTempVar = IGTempVar.replace(".", ",");
                IGTempVar = IGTempVar.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".");
            }
            if(IGDivCLassDispoProds.classList.contains("listNoImage") || IGDivCLassDispoProds.classList.contains("list"))
            {
                if (IGNumber[i] != "NaN")
                {
                    tempHtml = '<p style="font-size: 13px; font-weight: normal; color: #525252; margin-top: 10px; margin-bottom: 0px; margin-right: 6px; display: inline">De: <del>R$ ' + IGTempVar + '</devl></p><p style="font-size: 13px; font-weight: normal; color: #525252; display: inline">Por:</p>';
                }
            }
            else
            {
                if (IGNumber[i] != "NaN")
                {
                    tempHtml = '<p style="font-size: 13px; font-weight: normal; color: #525252; margin-top: 10px; margin-bottom: 0px">De: <del>R$ ' + IGTempVar + '</devl></p><p style="font-size: 13px; font-weight: normal; color: #525252; display: inline">Por:</p>';
                }
            }
            $(this).prepend(tempHtml);
        });
    }
    IGAddPrecificacaoDePor();

    $("#xtt-load-more-button").click(function(){
        setTimeout(function(){
            IGAddPrecificacaoDePor();
        }, 4000);
    });

});