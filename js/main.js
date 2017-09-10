function dwn() {
    $('dwb').each(function(i) {
        var link = $(this).attr("link");
        var name = $(this).attr("name");
        var size = $(this).attr("size");
        var storage = $(this).attr("storage");
        
        $(this).html(
            '\
            <div class="dw-button '+storage+'">\
                <a target="_blank" href="'+link+'">\
                    <div class="container">\
                        <div class="logo">\
                            <img src="/img/'+storage+'.png"/>\
                        </div>\
                        <div class="text">\
                            <p class="name">'+name+'</p>\
                            <p class="size">'+size+'</p>\
                        </div>\
                        <div class="icon">\
                            <i class="fa fa-download"></i>\
                        </div>\
                    </div>\
                </a>\
            </div>\
            '
        );
    });
}

function searchModalButton() {
    $('#searchModalButton').animatedModal({
        modalTarget: 'searchModal',
        animatedIn:'zoomIn',
        animatedOut:'bounceOut',
        color:'#39BEB9'
    });
}

function pinNavBar() {
    $("#navbar").pin();
}

$(document).ready(function() {
    dwn();
    searchModalButton();
    pinNavBar();
});