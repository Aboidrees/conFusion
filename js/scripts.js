$(document).ready(function () {
    $("#mycarousel").carousel({ interval: 2000 });

    $("#carousel-button").click(function () {
        if ($("#carousel-button").children("span").hasClass("fa-pause")) {
            $("#mycarousel").carousel('pause');
            $("#carousel-button").children("span").removeClass("fa-pause");
            $("#carousel-button").children("span").addClass("fa-play");
        } else if ($("#carousel-button").children("span").hasClass("fa-play")) {
            $("#mycarousel").carousel('cycle');
            $("#carousel-button").children("span").removeClass("fa-play");
            $("#carousel-button").children("span").addClass("fa-pause");
        }
    });

    $("#reserve").click(function(){
        if(~$("#reserveModal").hasClass("show")){
            $('#reserveModal').modal('toggle');
        }
    });

    $("#login-button").click(function(){
        if(~$("#loginModal").hasClass("show")){
            $('#loginModal').modal('toggle');
        }
    });
});