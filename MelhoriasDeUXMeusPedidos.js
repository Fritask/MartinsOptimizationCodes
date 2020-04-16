$(document).ready(function()
{
    document.getElementsByClassName("control-label")[1].style.display = "none";
    if ($(window).width() > 767) {
        $('.sort-refine-bar').first().css('padding', '5px 0 5px 8px').css('border', '1px solid #CCCCCC').css('border-radius', '5px');
    }
    $('.responsive-table-link').parent().css('position', 'relative').append('<p class="IGCTAVisualizarPedido">VISUALIZAR</p>');
    $('.control-label').append(document.createTextNode(":"));
    $('#sortForm1').append('<i style="position: absolute; right: 10px; top: 20%; pointer-events: none;" class="fas fa-chevron-down"></i>');
    $('.responsive-table-item').click(function(){
        window.location.href = $(this).find('.responsive-table-link').attr('href');
    });
});

<style>
    #sortForm1 {
        position: relative;
    }
    .IGCTAVisualizarPedido {
        padding: 5px 8px;
        background-color: #CCCCCC;
        color: #525252;
        position: absolute;
        top: 20%;
        right: 5%;
    }
    .pagination-prev, .pagination-next {

    }
    .control-label {
        padding-right: 5px;
        margin: 0;
        font-weight: bold !important;
    }
    .pagination-bar-results {
        padding: 5px;
        border: 1px solid #CCCCCC;
        border-radius: 5px;
    }
    #sortOptions1 {
        border: none;
        padding: 0px !important;
    }
    #sortOptions2 {
        display: none;
    }
    .pagination-wrap {
        text-align: center;
    }
    tbody:before {
        line-height: 20px;;
        content:"_";
        color: white;
        display: block;
    }
    tr.responsive-table-head th {
        text-align: center;
        padding-top: 15px !important;
        padding-bottom: 15px !important;
        background-color: #CCCCCC;
        border: 2px solid #FFFFFF;
        position: relative;
    }
    tr.responsive-table-head th:after {
        content:'';
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -10px;
        width: 0;
        height: 0;
        border-top: solid 10px #CCCCCC;
        border-left: solid 10px transparent;
        border-right: solid 10px transparent;
    }
    .account-overview-table table tbody tr:nth-of-type(2n+1) {
        background-color: #F2F2F2 !important;
    }
    .account-overview-table table tbody tr:hover {
        background-color: #CCCCCC !important;
        font-weight: bold;
        cursor: pointer;
    }
    .account-overview-table table tbody tr:hover .IGCTAVisualizarPedido {
        background-color: #F27934;
        color: #FFFFFF;
    }
    .account-overview-table table tbody tr:hover .responsive-table-link {
        color: #F27934 !important;
    }
    .responsive-table-link {
        color: #525252 !important;
    }
    .responsive-table-link:hover {
        text-decoration: none;
    }
    .responsive-table-cell {
        border: 2px solid #FFFFFF;
    }
    @media only screen and (max-width: 991px) and (min-width: 768px) {
        .IGCTAVisualizarPedido {
            font-size: 12px;
            padding: 2px 4px;
            top: 27%;
        }
    }
    @media only screen and (max-width: 767px) {
        .IGCTAVisualizarPedido {
            font-size: 12px;
            padding: 2px 4px;
            top: 10%;
        }
    }
    @media only screen and (max-width: 480px) {
        #sortOptions1 {
            margin-left: 0 !important;
            width: 100% !important;
        }
    }
</style>