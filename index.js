var $ = require('jquery')
import 'bootstrap'


$(document).ready(function () {
    function tweet() {
        console.log(encodeURIComponent($("#quote-content").html()))
        window.open('https://twitter.com/intent/tweet?hashtags=freecodecamp&text=' + encodeURIComponent($("#quote-content p").html()))
    }

    $("#get-another-quote-button").on("click", function (t) {
        var randomColor = "#000000".replace(/0/g, function () {
            return (~~(Math.random() * 16)).toString(16);
        });
        t.preventDefault(), $.ajax({
            url: "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
            success: function (t) {
                var e = t.shift();
                $('.item').css('background-color', randomColor)
                $("#quote-title").text(e.title)
                $("#quote-content").html(e.content)
            },
            cache: !1
        })
    }).click();

    $('#tweet').on('click', function (e) {
        e.preventDefault()
        tweet()
    })
});