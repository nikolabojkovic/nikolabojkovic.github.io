$(document).ready(function() {
    $('#about').load('../pages/about/about.html', function() {
        myPieChart = createChart();
        linearChart = createStackChart();
        // $('#years').text(new Date().getFullYear() - new Date(1993, 4, 20).getFullYear());
        $('#date-of-birth').text("20 April 1993");
        $('#email').text("nikolabojkovic@gmail.com");
        $('#skype').text("nikola.bojkovic6");
        $('#address').text("Vojvode Stepe 252, 11000 Begorad");
        $('#years-of-experience').text(new Date().getFullYear() - new Date(2015, 1, 5).getFullYear());
    });
}); 

// asdfsdafsdf sd f <div>a sdasd as</div>