$(document).ready(function() {
    $('#portfolio').load('../pages/portfolio/portfolio.html', function () {
        $('#portfolio-modals').load('../pages/portfolio/modals.html', function () {
            // Modal popup$(function () {
            $('.portfolio-item').magnificPopup({
                type: 'inline',
                preloader: false,
                focus: '#username',
                modal: true
            });
            $(document).on('click', '.portfolio-modal-dismiss', function(e) {
                e.preventDefault();
                $.magnificPopup.close();
            });

            // TODO: loading a theame should be a part of common module
            var theme = localStorage.getItem('theme');
            $("#light-on").addClass('d-none');
            if (theme == 'dark') {
              switchLightOff();
            }
        });
    });
});