jQuery(document).ready(function() {

     $('.fun-icon').click(function() {
        $('.app-screen').css({'background':'#7D0B0B'});
        $('.logo-contain').css({'top':'-54px'});
        $('.logo').width('53px').height('45px');
        $('.logo').css('background-image','url(assets/icons/insider-w.png)');
        $('.header-text').css({'top':'-50px'});
        $('.header-text').fadeTo(300,0);
        $('.intro-sect').css({'opacity': '0','left':'-150px'});
        $('.card-list').css({'opacity': '1'});
        $('.comedy').css({'top':'20px','left':'32.5px','transform':'rotate(0deg)'});
        $('.comedy').next().css({'top':'140px','left':'387.5px','transform':'rotate(37.6deg)'});
        $('.comedy').fadeTo(300,1);
        $('.comedy .answer-text').delay(290).fadeTo(60,1);
        $('.header-text').hide();
    });

     $('.half.bottom').click(function() {
        $(this).parent().css({'transition':'left 0.3s ease-in-out, top 0.3s ease-in-out, width 0.3s ease-in-out, height 0.3s ease-in-out, border-radius 0.3s ease-in-out, background 0.3s ease-in-out'});
        $(this).parent().addClass('card-page');
        $(this).parent().next().fadeTo(300,0);
        $(this).parent().prev().fadeTo(300,0);
        $(this).parent().children('.page-event').delay(200).fadeTo(200,1);
        $(this).parent().children('.card-name').hide();
        $(this).parent().children('.half.bottom').fadeTo(300,0);
        $(this).parent().children('.answer-text').fadeTo(300,0);
        $('.icon.search').hide();
        $('.tool-bar').hide().delay(200).fadeTo(100,1);
        $('.icon.menu').addClass('backb');
        $('.tool-bar').css({'background':'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0))'});
    });


    $(document).on('click', '.icon.backb', function() {
        $('.card-page').next().fadeTo(300,0.3);
        $('.card-page').prev().fadeTo(300,0.3);
        $('.card-page').children('.page-event').fadeTo(200,0);
        $('.card-page').children('.card-name').show();
        $('.card-page').children('.half.bottom').fadeTo(300,1);
        $('.card-page').children('.answer-text').fadeTo(300,1);
        $('.icon.search').show();
        $('.tool-bar').hide().delay(200).fadeTo(100,1);
        $('.tool-bar').css({'background':'rgba(0,0,0,0)'});
        $('.icon.menu').delay(300).removeClass('backb');
        $('.card-page').delay(300).removeClass('card-page');
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
        $('.app-screen').css({'background':'#0761C2'});
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
        $('.app-screen').css({'background':'#0761C2'});
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
        $('.app-screen').css({'background':'#A77F4F'});
        $('.header-text h4').animate({'opacity': 0.3}, 150, function () {
            $(this).text("Need a new hobby?");
        }).animate({'opacity': 1}, 150);
    });
    $('.alcohol .left').click(function() {
        $('.app-screen').css({'background':'#852905'});
        $('.header-text h4').animate({'opacity': 0.3}, 150, function () {
            $(this).text("Gluttony is a sin");
        }).animate({'opacity': 1}, 150);
    });
    $('.alcohol .right').click(function() {
        $('.app-screen').css({'background':'#666350'});
        $('.header-text h4').animate({'opacity': 0.3}, 150, function () {
            $(this).text("Need a new hobby?");
        }).animate({'opacity': 1}, 150);
    });
    $('.do-home .left').click(function(){
        $('.app-screen').css({'background':'#A77F4F'});
        $('.header-text h4').animate({'opacity': 0.3}, 150, function () {
            $(this).text("Gluttony is a sin");
        }).animate({'opacity': 1}, 150);
    });

    $('.app-below').click(function(){
        $(this).css({'top':'0px'});
        $(this).children('.below-button').css({'background':'none'});
        $(this).children('.below-button').children('.icon.explore').css({'background-image':'url(assets/icons/collections.png)','width':'45px','height':'36px','margin-top':'8px'});
        $(this).children('.explore-page').children('.page-event').delay(200).fadeTo(200,1);
        $(this).addClass('app-above');
        $('.app-main').children('.logo-contain').hide();
    });

    $(document).on('click', '.app-above .below-button .explore', function() {
        $('.app-below').css({'top':'640px'});
        $('.app-below').children('.below-button').css({'background':'white'});
        $('.app-below').children('.below-button').children('.icon.explore').css({'background-image':'url(assets/icons/explore.png)','width':'36px','height':'36px','margin-top':'0'});
        $('.app-main').children('.logo-contain').show();
    });

});