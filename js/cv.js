(function($) {
  "use strict"; // Start of use strict

  // meta data
  var apiUrl = "https://developer-tool.com/api/";
  // var apiUrl = "http://localhost:5000/api/"

  //   jQuery.getJSON("../data/cv.json", function (result) {
  //     cv = result;
  //   });

  // events
  $(document).on('click', '#download-cv',  function() {
    disableDownloadCvButton();

    // get data
    $.ajax({
      url: apiUrl + "cv/download",
      method: "GET",
      dataType: "json",
      success: function (cv) {    
        var cvFile = convertToFile(cv);
        downloadDocument(cvFile);
        enableDownloadCvButton();            
      },
      error: function (error) {
          alert("Server not available at the moment, pease try later.");
          enableDownloadCvButton();          
      }
    });
  });

  // upate UI
  var disableDownloadCvButton = function() {
    $("#download-cv").prop("disabled", true);
    $("#download-cv-text").addClass('d-none');
    $("#loading-cv").removeClass('d-none');
  };

  var enableDownloadCvButton = function() {
    $("#loading-cv").addClass('d-none');
    $("#download-cv").prop("disabled", false);
    $("#download-cv-text").removeClass('d-none');
  };

  // engine methods
  var downloadDocument = function(cvFile) {
    //IE
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveBlob(cvFile, cvFile.name);
    } else {    
      var link = document.createElement("a");
      link.href = URL.createObjectURL(cvFile);
      link.download = cvFile.name;
      link.click();
    }   
  };

  var convertToFile = function (cv) {
    var blob = dataURItoBlob(cv.document);
    return new File([blob], cv.name, {type: cv.type});
  };

  var dataURItoBlob = function (dataURI) {
    var bytes = [];
    var utf8 = atob(dataURI);
    for (var i = 0; i < utf8.length; i++) {
        bytes.push(utf8.charCodeAt(i));
    }

    return new Blob([new Uint8Array(bytes)]);
  };

})(jQuery); // End of use strict