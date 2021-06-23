/**
 * @Script js for (Template/Project Name)
 *
 * @project     - Project Name
 * @author      - 
 * @created_by  - 
 * @created_at  - 
 * @modified_by -
 */


/**
 * ========================================================
 * this function execute when window properly loaded
 * ===========================================================
 */

$(window).on('load', function () {

    // code should be execute here

});



/**
 * ========================================================
 * this function execute when DOM element ready 
 * ===========================================================
 */

$(document).ready(function () {

    // intlTelInput
    if ($(".mobile-number-control").length) {
        $(".mobile-number-control").intlTelInput();
    }

    // uptime-countdown
    $(function () {
        if ($('.uptime-countdown').length) {
            let now = new Date();
            let day = now.getDate();
            let month = now.getMonth() + 1;
            let year = now.getFullYear() + 1;
            let nextYear = month + '/' + day + '/' + year + ' 07:07:07'; // '4/25/2022 07:07:07'
            
            $('.uptime-countdown').countdown({
                date: nextYear,
                offset: +2,
                day: 'Day',
                days: 'Days',
                hideOnComplete: true
            }, function (container) {
                alert('Done!');
            });
        }
    });

    

});
