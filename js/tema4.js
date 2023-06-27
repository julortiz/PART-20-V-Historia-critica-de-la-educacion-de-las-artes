$(function () {
    function checkitem() {
        
        var id = ['#tipo-hipotesis-modal','#forma-adecuada-plantear-modal','#operacionalizacion-hipotesis-modal','#carousel-investigacion'];
        for (var i = 0; i < id.length; i ++) {
            if ($(id[i] + ' .carousel-inner .carousel-item:first').hasClass('active')) {
            $(id[i] + ' .carousel-control-prev').hide();
            $(id[i] + ' .carousel-control-next').show();
        } else if ($(id[i] + ' .carousel-inner .carousel-item:last').hasClass('active')) {
            $(id[i] + ' .carousel-control-prev').show();
            $(id[i] + ' .carousel-control-next').hide();
        } else {
            $(id[i] + ' .carousel-control-prev').show();
            $(id[i] + ' .carousel-control-next').show();
        }
        }
        
    }

    checkitem();
    /*checkitem('#tipo-hipotesis-modal');
    checkitem('#forma-adecuada-plantear-modal');
    checkitem('#operacionalizacion-hipotesis-modal');

    $('#pasos').on('slid.bs.carousel', '', checkitem('#pasos'));
    $('#tipo-hipotesis-modal').on('slid.bs.carousel', '', checkitem('#tipo-hipotesis-modal'));
    $('#forma-adecuada-plantear-modal').on('slid.bs.carousel', '', checkitem('#forma-adecuada-plantear-modal'));
    $('#operacionalizacion-hipotesis-modal').on('slid.bs.carousel', '', checkitem('#operacionalizacion-hipotesis-modal'));*/
    
    $('.carousel').on('slid.bs.carousel', '', checkitem);
})