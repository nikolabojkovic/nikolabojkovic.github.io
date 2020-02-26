(function($) {
    "use strict"; // Start of use strict

  var apiUrl = "http://developer-tool.com/api/";
  // var apiUrl = "http://localhost:5000/api/"

  //   jQuery.getJSON("../data/cv.json", function (result) {
  //     cv = result;
  //   });

  $(document).on('click', '#download-cv',  function() {
    // refresh UI
    $("#download-cv").prop("disabled", true);
    $("#download-cv-text").addClass('d-none');
    $("#loading-cv").removeClass('d-none');

    // get data
    $.ajax({
      url: apiUrl + "download",
      method: "GET",
      dataType: "json",
      success: function (cv) {
          if (cv === undefined) {
            return;
          }
    
          var blob = dataURItoBlob(cv.document);
          var cvFile = new File([blob], cv.name, {type: cv.type});
      
          //IE
          if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveBlob(cvFile, cvFile.name);
            return;
          } 
      
          var a = document.createElement("a");
          var fileUrl = URL.createObjectURL(cvFile);   
          a.href = fileUrl;
          a.download = cvFile.name;
          a.click();

          // refresh UI
          $("#loading-cv").addClass('d-none');
          $("#download-cv").prop("disabled", false);
          $("#download-cv-text").removeClass('d-none');
          
      },
      error: function (error) {
          alert("Server not available at the moment, pease try later.");
      }
    });
  });

  var dataURItoBlob = function (dataURI) {
    var bytes = [];
    var utf8 = atob(dataURI);
    for (var i = 0; i < utf8.length; i++) {
        bytes.push(utf8.charCodeAt(i));
    }

    return new Blob([new Uint8Array(bytes)]);
  };

})(jQuery); // End of use strict