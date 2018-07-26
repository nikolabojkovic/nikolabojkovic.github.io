(function($) {
    "use strict"; // Start of use strict
  var cv;
   var apiUrl = "https://developer-tool.com/api/"
// var apiUrl = "http://localhost:5000/api/"

//   jQuery.getJSON("../data/cv.json", function (result) {
//     cv = result;
//   });

  $.ajax({
    url: apiUrl + "download",
    method: "GET",
    dataType: "json",
    success: function (result) {
        cv = result;
    },
    error: function (error) {
        console.log('error', error);
    }
  });

  $(document).on('click', '#download-cv',  function() {
    
    var blob = dataURItoBlob(cv.document);
    var cvFile = new File([blob], cv.name, {type: cv.type});

    //IE
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveBlob(cvFile, cvFile.name);
      return;
    } 

    var fileUrl = URL.createObjectURL(cvFile);   
    this.href = fileUrl;
    this.download = cvFile.name;
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