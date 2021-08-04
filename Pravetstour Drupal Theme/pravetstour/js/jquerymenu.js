jQuery(document).ready(function() {
    jQuery('.toggle-nav').click(function(e) {
        jQuery(this).toggleClass('active');
        jQuery('ul.c-menu-main').toggleClass('active');
        e.preventDefault();
    });
});
