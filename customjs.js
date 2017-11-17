$( window ).on( "load", function() {
    var dim = document.documentElement.clientWidth

    if (dim <= 320) {
        $("#slider").html("<img src='https://media.yoox.biz/ytos/resources/FEDTEST/images/man-yellow-jacket/man-yellow-jacket-320w.jpg'>");
    }
    else if ((dim > 320) && (dim <= 412)) {
        $("#slider").html("<img src='https://media.yoox.biz/ytos/resources/FEDTEST/images/man-yellow-jacket/man-yellow-jacket-412w.jpg'>");
    }
    else if ((dim > 412) && (dim <= 640)) {
        $("#slider").html("<img src='https://media.yoox.biz/ytos/resources/FEDTEST/images/man-yellow-jacket/man-yellow-jacket-640w.jpg'>");
    }
    else if ((dim > 640) && (dim <= 750)) {
        $("#slider").html("<img src='https://media.yoox.biz/ytos/resources/FEDTEST/images/man-yellow-jacket/man-yellow-jacket-750w.jpg'>");
    }
    else if ((dim > 750) && (dim <= 768)) {
        $("#slider").html("<img src='https://media.yoox.biz/ytos/resources/FEDTEST/images/man-yellow-jacket/man-yellow-jacket-768w.jpg'>");
    }
    else if ((dim > 768) && (dim <= 824)) {
        $("#slider").html("<img src='../images/man-yellow-jacket-824w.jpg' alt='image-man-yellow-jacket'>");
    }
    else if ((dim > 824) && (dim <= 1024)) {
        $("#slider").html("<img src='https://media.yoox.biz/ytos/resources/FEDTEST/images/man-yellow-jacket/man-yellow-jacket-1024w.jpg'>");
    }
    else if ((dim > 1024) && (dim <= 1536)) {
        $("#slider").html("<img src='https://media.yoox.biz/ytos/resources/FEDTEST/images/man-yellow-jacket/man-yellow-jacket-1536w.jpg'>");
    }
    else {
        $("#slider").html("<img src='https://media.yoox.biz/ytos/resources/FEDTEST/images/man-yellow-jacket/man-yellow-jacket-2048w.jpg' alt='image-man-yellow-jacket'>");
    }
});
$(document).ready(function () {
    //Seleziono del Json solo i primi 5 id e stampo un <h2> e un <p> con title e body
    // L'id degli object del Json l'ho incapsulato dentro un <button>
   $.getJSON( "https://jsonplaceholder.typicode.com/posts/", function( dataId ) {
        var items = [];
        for (var i=0;i<5;i++) {
            if (i===0) {
                var testo = '<div class="column-4"><h2>'+dataId[i]['title']+'</h2></div><div class="column-8" ><p>'+dataId[i]['body']+'</p></div>';
            }
            var activeClass = (i===0) ? 'class="active"' : '';
            var newId = i+1;
            items.push( "<li id='" + dataId[i]['id'] + "'><button data-id='" + dataId[i]['id'] + "' "+activeClass+">" + newId + "</button></li>" );
        }
       $( "<ul/>", {
            "class": "my-new-list",
            html: items.join( "" )
        }).appendTo( ".tabs-container" );
        $('.tabs-container .testoTabs').html(testo);
    });
   //Funzione per cambiare title e body a seconda del <button> schiacciato
    $('.tabs-container').on('click', 'li button', function () {
        if ($(this).addClass('active')) {
            $('.my-new-list li button').removeClass('active');
            var newId = $(this).attr('data-id');
            $.getJSON( "https://jsonplaceholder.typicode.com/posts/"+newId, function( dataId ) {
                console.log(dataId);
                var testo = '<div class="column-4"><h2>'+dataId['title']+'</h2></div><div class="column-8">' +
                    ' <p>'+dataId['body']+'</p></div>';
                $('.tabs-container .testoTabs').html(testo);
            });
        }
    });
    $('form').submit(function(e){
        e.preventDefault();
        var $email = $('form input[name="email');
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test($email.val()))
        {
            $("#form").html("<h4>Successful registration</h4>").css({"color":"#5cb85c", "text-transform": "uppercase", "margin-top": "10px"})
        }
    })
});
