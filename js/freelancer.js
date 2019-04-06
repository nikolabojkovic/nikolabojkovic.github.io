

  $(document).ready(function() {
    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
    });
    
    $('#current-year').text(new Date().getFullYear());
  });
