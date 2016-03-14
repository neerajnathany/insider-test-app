jQuery(document).ready(function() {
    var offset = 700;
    var duration = 1000;

     $('.fun-icon').click(function() {
        $('.app-screen').css({'background':'#7D0B0B'});
        $('.logo-contain').css({'top':'-54px'});
        $('.logo').width('53px').height('45px');
        $('.logo').css('background-image','url(insider-w.png)');
        $('.header-text').css({'top':'-50px'});
        $('.header-text').animate({'opacity': 0.0}, 300);
        $('.intro-sect').css({'opacity': '0','left':'-150px'});
        $('.card-list').css({'opacity': '1'});
        $('.comedy').css({'top':'20px','left':'32.5px','transform':'rotate(0deg)'});
        $('.comedy').next().css({'top':'140px','left':'387.5px','transform':'rotate(37.6deg)'});
        $('.comedy').fadeTo(300,1);
        $('.comedy .answer-text').delay(290).fadeTo(60,1);
    });


    $('.half.right').click(function() {
        $(this).parent().prev().css({'top':'200px','left':'-680px'});
        $(this).parent().css({'top':'140px','left':'-322.5px','transform':'rotate(-37.6deg)','transition': 'left 0.3s cubic-bezier(0, 0, 0.95, 0.98), top 0.3s cubic-bezier(0.34, 0.01, 0.68, 0.37), transform 0.3s linear'});
        $(this).parent().fadeTo(300, 0.3);
        $(this).siblings('.answer-text').fadeTo(50, 0);
        $(this).parent().next().css({'top':'20px','left':'32.5px','transform':'rotate(0deg)','transition': 'left 0.3s cubic-bezier(0.05, 0.02, 1, 1), top 0.3s cubic-bezier(0.32, 0.63, 0.66, 0.99), transform 0.3s linear'});
        $(this).parent().next().fadeTo(300, 1);
        $(this).parent().next().children('.answer-text').delay(290).fadeTo(60,1);
        $(this).parent().next().next().css({'top':'140px','left':'387.5px','transform':'rotate(37.6deg)'});
    });

    $('.half.left').click(function() {
        $(this).parent().prev().prev().css({'top':'140px','left':'-322.5px','transform':'rotate(-37.6deg)'});
        $(this).parent().prev().css({'top':'20px','left':'32.5px','transform':'rotate(0deg)','transition': 'left 0.3s cubic-bezier(0.05, 0.02, 1, 1), top 0.3s cubic-bezier(0.32, 0.63, 0.66, 0.99), transform 0.3s linear'});
        $(this).parent().prev().fadeTo(300, 1);
        $(this).parent().prev().children('.answer-text').delay(290).fadeTo(60,1);
        $(this).parent().css({'top':'140px','left':'387.5px','transform':'rotate(37.6deg)','transition': 'left 0.3s cubic-bezier(0, 0, 0.95, 0.98), top 0.3s cubic-bezier(0.34, 0.01, 0.68, 0.37), transform 0.3s linear'});
        $(this).parent().fadeTo(300, 0.3);
        $(this).siblings('.answer-text').fadeTo(50, 0);
        $(this).parent().next().css({'top':'200px','left':'742.5px'});
    });


    $('.comedy .right').click(function() {
        $('.app-screen').css({'background':'#090064'});
        $('.header-text h4').animate({'opacity': 0.3}, 150, function () {
            $(this).text("Heard it on the album?");
        }).animate({'opacity': 1}, 150);
    });
    $('.music .left').click(function() {
        $('.app-screen').css({'background':'#7D0B0B'});
        $('.header-text h4').animate({'opacity': 0.3}, 150, function () {
            $(this).text("How to lose that double chin?");
        }).animate({'opacity': 1}, 150);
    });
    $('.music .right').click(function() {
        $('.app-screen').css({'background':'#E6930E'});
        $('.header-text h4').animate({'opacity': 0.3}, 150, function () {
            $(this).text("Bored of your routine?");
        }).animate({'opacity': 1}, 150);
    });
    $('.getout .left').click(function() {
        $('.app-screen').css({'background':'#090064'});
        $('.header-text h4').animate({'opacity': 0.3}, 150, function () {
            $(this).text("Heard it on the album?");
        }).animate({'opacity': 1}, 150);
    });
    $('.getout .right').click(function() {
        $('.app-screen').css({'background':'#852905'});
        $('.header-text h4').animate({'opacity': 0.3}, 150, function () {
            $(this).text("Gluttony is a sin");
        }).animate({'opacity': 1}, 150);
    });
    $('.food .left').click(function() {
        $('.app-screen').css({'background':'#E6930E'});
        $('.header-text h4').animate({'opacity': 0.3}, 150, function () {
            $(this).text("Bored of your routine?");
        }).animate({'opacity': 1}, 150);
    });
    $('.food .right').click(function() {
        $('.app-screen').css({'background':'#C5A175'});
        $('.header-text h4').animate({'opacity': 0.3}, 150, function () {
            $(this).text("Need a new hobby?");
        }).animate({'opacity': 1}, 150);
        $(this).parent().next().next().css({'top':'-164px','left':'420px','transform':'rotate(0deg)'});
    });
    $('.alcohol .left').click(function() {
        $('.app-screen').css({'background':'#852905'});
        $('.header-text h4').animate({'opacity': 0.3}, 150, function () {
            $(this).text("Gluttony is a sin");
        }).animate({'opacity': 1}, 150);
    });
    $('.alcohol .right').click(function() {
        $('.app-screen').css({'background':'white'});
        $('.header-text h4').animate({'opacity': 0}, 150);
        $(this).parent().fadeTo(100, 0);
        $(this).parent().next().css({'top':'-164px','left':'0'});
    });
    $('.do-home .left').click(function(){
        $('.app-screen').css({'background':'#C5A175'});
        $(this).parent().fadeTo(300, 0);
        $('.header-text h4').animate({'opacity': 1}, 300, function () {
            $(this).text("Need a new hobby?");
        });
        $(this).parent().css({'top':'-164px','left':'420px','transform':'rotate(0deg)','transition': 'left 0.3s cubic-bezier(0, 0, 0.95, 0.98), top 0.3s cubic-bezier(0.34, 0.01, 0.68, 0.37), transform 0.3s linear'});
    });

});