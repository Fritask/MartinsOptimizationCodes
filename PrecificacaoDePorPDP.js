$(document).ready(function()
{
    var IGPrecosProdutosPlus2Pct = document.getElementsByClassName("value");
    $(".qdForm").children("div.row").children("div.col-xs-2").css('border-left', 'none').css('border-right', '1px solid rgb(224, 224, 224');
    // var xaeggagadsfafdadfg = $(".qdForm").children("div.row").children("div.col-xs-2");
    
    var IGtempStr = IGPrecosProdutosPlus2Pct[0].innerText;
    var IGtempVar2 = IGtempStr.substring(3, IGtempStr.length);
    IGtempVar2 = IGtempVar2.replace(",", ".");
    IGtempVar2 = parseFloat(IGtempVar2).toFixed(2);
    var IGNumber = IGtempVar2;
    // debugger;

    IGAddPrecificacaoDePor = function()
    {
        
        $(".qdValue .value").each(function( i ){
            var tempHtml;

                var IGTempVar = (parseFloat(IGNumber) + (IGNumber * 0.02)).toFixed(2);
                IGTempVar = String(IGTempVar);
                IGTempVar = IGTempVar.replace(".", ",");

                    tempHtml = '<p style="font-size: 13px; font-weight: normal; color: #525252; margin-bottom: 0px; text-align: left;">De: <del>R$ ' + IGTempVar + '</devl></p><p style="font-size: 13px; font-weight: normal; color: #525252; display: inline">Por:</p>';

            $(this).prepend(tempHtml);
        });
    };

    IGAddPrecificacaoDePor();

});