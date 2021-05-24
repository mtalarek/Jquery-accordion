$(document).ready(function () {

    $('li').next().hide();

    $('li').click(function () {
        $(this).each(function () {
            $(this).toggleClass("minus");
            $(this).next().slideToggle();
        });
    });
});
