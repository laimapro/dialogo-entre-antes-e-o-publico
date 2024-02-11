/* INICIO DO TWITTER */ ! function(d, s, id) {
    var js,
        fjs = d.getElementsByTagName(s)[0],
        p = /^http: /.test(d.location) ? 'http' : 'https';
    if (!d.getElementById(id)) {
        js = d.createElement(s);
        js.id = id;
        js.src = p + '://platform.twitter.com/widgets.js';
        fjs.parentNode.insertBefore(js, fjs);
    }
}

(document, 'script', 'twitter-wjs');
/* FINAL DO TWITTER */

/* INICIO DO FACEBOOK */
(function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = "https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v2.5&appId=494295890618531";
        fjs.parentNode.insertBefore(js, fjs);
    }
    (document, 'script', 'facebook-jssdk'));
/* FINAL DO FACEBOOK */

/* INICIO DO SLIDE */
jQuery(document).ready(function() {
    jQuery('.navigation li').hover(
        function() {
            jQuery('ul', this).slideDown();
        },
        function() {
            jQuery('ul', this).slideUp();
        }
    );
});
